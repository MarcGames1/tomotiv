// import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { statSync, writeFile } from 'fs';
import { uploadVideo, deleteVideo } from '../utils/fileManager';
import path from 'path';
import { createReadStream } from 'fs';
import { CheckOrCreateFolder } from '../utils/fileManager';

import Video from '../models/video';


export const getImage = async (req, res) => {
  try {
    const { key } = req.query;

    const uploadsFolder = path.join(__dirname, '../uploads');
    const imagePath = path.join(uploadsFolder, key);

    // Setează tipul de conținut pentru răspunsul HTTP
    res.set('Content-Type', 'image/*');

    // Transmite imaginea ca răspuns HTTP
    res.sendFile(imagePath);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const uploadImage = async (req, res) => {
   const { slug } = req.query;

   try {
     const { image } = req.body;
     console.log(image);

     if (!image) {
       return res.status(400).send('No Image');
     }

     const base64Data = new Buffer.from(
       image.replace(/^data:image\/\w+;base64,/, ''),
       'base64'
     );

     const type = image.split(';')[0].split('/')[1];

     const uploadsFolder = path.join(__dirname, '../uploads');
     const slugFolder = path.join(uploadsFolder, slug);

     // Check if the 'slug' folder exists, if not, create it
     CheckOrCreateFolder(slugFolder);

     const imagePath = path.join(
       uploadsFolder,
       slug,
       `imagine-${slug}.${type}`
     );

     writeFile(imagePath, base64Data, 'base64', (err) => {
       if (err) {
         console.error(err);
         return res.status(500).send('Internal Server Error');
       }

       console.log(`Image saved successfully: ${imagePath}`);

       const relativePath = path.relative(uploadsFolder, imagePath);
       res.send({ Key: relativePath });
     });
   } catch (error) {
     console.error(error);
     res.status(500).send('Internal Server Error');
   }
};

// o s-o rescriu deocamdata e doar la remove poza reprezentativa curs
export const removeVideoController = async (req, res) => {
  try {
    const { id } = req.query;
   
   deleteVideo(id);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};



export const uploadVideoController = async (req, res) => {
  try {
    //   
    // Verifică dacă user-ul este autorizat
    if (req.auth._id !== req.params.instructorId) {
      return res.status(400).send('Unauthorized');
    }

    // Apelarea funcției uploadVideo pentru a salva videoclipul
    const video = await uploadVideo(req, res);
    res.send({...video})

    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const removeVideo = async (req, res) => {
  try {
    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send('Unauthorized');
    }

    const { id } = req.query;
   

    deleteVideo(id);
    res.send({ ok: true });
   
  } catch (err) {
    console.log(err);
  }
};



export const getVideo = async (req, res) => {

 
  const range = req.headers.range
  if(!range) return res.status(400).send('Range is Required');
   try {
     // Verifică permisiunile și alte condiții specifice pentru a permite accesul la videoclip

     // Obține cheia videoclipului din parametrii cererii
     const { id } = req.query;
      console.log(id);
     // Verifică existența și alte condiții specifice pentru a valida cheia videoclipului
    const video = await Video.findById(id);
     
     // Definirea caii către videoclipul dorit
     const uploadsFolder = path.join(__dirname, '../uploads');
     const videoPath = path.join(uploadsFolder, video.path);
     console.log(videoPath)
    const videoSize = statSync(videoPath).size
    const CHUNK_SIZE = 10 ** 6 
    const start = Number(range.replace(/\D/g,''))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

    const contentLength = end - start + 1

    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    };
     // Setează tipul de conținut pentru răspunsul HTTP
     res.writeHead(206, headers);

     // Creează un stream de citire pentru videoclip
     const videoStream = createReadStream(videoPath, {start, end});

     // Transmite bucăți ale videoclipului către răspunsul HTTP
     videoStream.pipe(res)
    

     // Sfârșitul transmiterii videoclipului
     

     
   } catch (error) {
     console.error('Error:', error);
     res.status(500).send('Internal Server Error');
   }
 };

 


