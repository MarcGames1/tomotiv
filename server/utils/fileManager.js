import express, { json } from 'express';
import slugify from 'slugify';
import Video from '../models/video';
import Lesson from '../models/lesson';
import {
  mkdirSync,
  existsSync,
  unlinkSync,
  createWriteStream,
  createReadStream,
} from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

export const createFolder = (uploadsFolder, router) => {
  if (existsSync(uploadsFolder)) {
    // Dacă folderul există, îl poți defini ca director static în Express.js
    router.use(express.static('uploads'));
  } else {
    // Dacă folderul nu există, îl poți crea utilizând fs.mkdirSync()
    try {
      mkdirSync(uploadsFolder);
      console.log('Folderul "uploads" a fost creat.');
    } catch (error) {
      console.error('Eroare la crearea folderului "uploads".', error);
    }
  }
};

export const uploadVideo = async (req, res) => {
  const { video } = req.files;
  const { slug, moduleId, title } = req.fields;
  
 
  try {
    const videoPath = await saveVideo(video, slug, moduleId);
    console.log(videoPath, "Video Path, ")

    if(!videoPath ) {
      console.log("No Video Path")
      uploadVideo(req);
  }
    const uploadedVideo = await new Video({
      title,
      module: moduleId,
      path: videoPath,
    }).save();

      const extractedVideoData = {
        title: uploadedVideo.title,
        module: uploadedVideo.lesson,
        path: uploadedVideo.path,
        _id: uploadedVideo._id,
        createdAt: uploadedVideo.createdAt,
        updatedAt: uploadedVideo.updatedAt,
      };
    return extractedVideoData;
  } catch (err) {
    console.error(err);
   return  {...err}
  }
};

const saveVideo = async (videoFile, slug, moduleId) => {
  if (!videoFile) {
    throw new Error('No video file');
  }

  const uploadsFolder = path.join(__dirname, '../uploads');
  const slugFolder = path.join(uploadsFolder, slug);
  const moduleFolder = path.join(slugFolder, moduleId);

  // Verifică dacă folderele există, altfel le creează
  if (!existsSync(uploadsFolder)) {
    mkdirSync(uploadsFolder);
  }

  if (!existsSync(slugFolder)) {
    mkdirSync(slugFolder);
  }

  if (!existsSync(moduleFolder)) {
    mkdirSync(moduleFolder);
  }

  const originalFileName = videoFile.name;
  const fileNameWithoutExtension = path.parse(originalFileName).name;
  const extension = path.parse(originalFileName).ext;

  
 const newFileName = `${slugify(fileNameWithoutExtension, {
   lower: true,
   strict: true,
 })}${extension}`;

  const videoPath = path.join(moduleFolder, newFileName);
  const readStream = createReadStream(videoFile.path);
  const writeStream = createWriteStream(videoPath);

  // Transmită videoclipul în bucăți către fișierul de ieșire
  readStream.pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on('error', (error) => {
      console.error('Error while writing video stream:', error);
      reject(error);
    });

    writeStream.on('finish', () => {
      const relativePath = path.relative(uploadsFolder, videoPath);

      resolve(relativePath);
      console.log('RELATIVE PATH ======>>>> ', relativePath) 
      return relativePath
    });
  });
};

export const deleteVideo = async (id) => {
  const video = await Video.findById({ _id: id }).exec();
  console.log("VIDEO IN DELETEVIDEO ===>>>> ... >>> .>>",video)
  // Definirea caii către fișierul video pe baza cheii
  const videoPath = path.join(__dirname, '../uploads', video.path);

  // Verifică existența fișierului video
  if (existsSync(videoPath)) {
    // Șterge fișierul video
    unlinkSync(videoPath);
    console.log(`Video ${id} deleted successfully.`);
    await video.remove()
  } else {
    console.log(`Video ${id} does not exist.`);
  }
};

export const deleteImage = async (key, next) => {
  console.log("THIS IS DELETE IMAGE, \n KEY = ", key);
  const imagePath = path.join(__dirname, '../uploads', key);
   if (existsSync(imagePath)) {
    // Șterge fișierul video
    await unlinkSync(imagePath);
    console.log(`Image  ${imagePath} deleted successfully.`);
    next()

}
}
// verifica un path daca nu exista il creeaza
export function CheckOrCreateFolder(path) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

