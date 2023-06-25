import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { awsConfig } from '../awsConfig/awsConfig';
import { nanoid } from 'nanoid';
import { readFileSync } from 'fs';



const client = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});


export const getImage = async (req, res) => {
  try {
    
    const { key } = req.params;
    const command = new GetObjectCommand({
      Bucket: 'marwebelearning',
      Key: key,
    });
    const response = await client.send(command);
    const imageStream = response.Body;

    // Setează tipul de conținut și furnizează stream-ul imaginii către frontend
    res.set('Content-Type', 'image/jpeg');
    imageStream.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    console.log(req.body);
    if (!image) {
      return res.status(400).send('No Image');
    }
    const base64Data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    const type = image.split(';')[0].split('/')[1];

    // image params
    const params = {
      Bucket: 'marwebelearning',
      Key: `${nanoid()}.${type}`,
      Body: base64Data,
      ACL: 'private',
      ContentEncoding: 'base64',
      ContentType: `image/${type}`,
    };

    
    const putComand = new PutObjectCommand({ ...params });

    try {
      const response = await client.send(putComand, (err, data) => {
        if (err) {
          console.log(err);
          return res.sendStatus(400);
        }
        console.log(response)

        if (data.$metadata.httpStatusCode == 200) {
          res.send({ Bucket: params.Bucket, Key: params.Key });
        }
      });
    } catch (err) {
      console.error(err);
    }
  } catch (error) {
    res.send(error.message);
  }
};


export const removeObject = async (req, res) => {
  try {
    const { key } = req.params;
   
    const command = new DeleteObjectCommand({
            Bucket: 'marwebelearning',
            Key: key,
    });
    await client.send(command);

    res.status(204).end();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

//functie ajutatoare pentru a sterge video daca stergem lectia
export const removeFromBucket = async (key) =>{
   const command = new DeleteObjectCommand({
     Bucket: 'marwebelearning',
     Key: key,
   });
   await client.send(command);
}

export const uploadVideo = async (req, res) => {
  try {
    // console.log("req.auth._id", req.auth._id);
    // console.log("req.params.instructorId", req.params.instructorId);
    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send('Unauthorized');
    }

    const { video } = req.files;
    // console.log(video);
    if (!video) return res.status(400).send('No video');

    // video params
    const params = {
      Bucket: 'marwebelearning',
      Key: `${nanoid()}.${video.type.split('/')[1]}`,
      Body: readFileSync(video.path),
      ACL: 'private',
      ContentType: video.type,
    };

    const putComand = new PutObjectCommand({ ...params });
    // upload to s3
  try {
    const response = await client.send(putComand, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log(response);

      if (data.$metadata.httpStatusCode == 200) {
        res.send({ Bucket: params.Bucket, Key: params.Key });
      }
    });
  } catch (err) {
    console.error(err);
  }
  } catch (err) {
    console.log(err);
  }
};

export const removeVideo = async (req, res) => {
  try {
    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send('Unauthorized');
    }

    const { Bucket, Key } = req.body;
    // console.log("VIDEO REMOVE =====> ", req.body);

    deleteVideo(Bucket, Key);
    res.send({ ok: true });
    // video params
    // const params = {
    //   Bucket,
    //   Key,
    // };

    // // upload to s3
    // S3.deleteObject(params, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.sendStatus(400);
    //   }
    //   console.log(data);
    //   res.send({ ok: true });
    // });
  } catch (err) {
    console.log(err);
  }
};



export const getVideo = async (req, res) => {
  try {
    const { key } = req.params;

    const command = new GetObjectCommand({
      Bucket: 'marwebelearning',
      Key: key,
    });

    const response = await client.send(command);
    const videoStream = response.Body;

    // Setează tipul de conținut și furnizează stream-ul videoclipului către frontend
    res.set('Content-Type', 'video/mp4');
    videoStream.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};
