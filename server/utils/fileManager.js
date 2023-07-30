import express from 'express';
import slugify from 'slugify';

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
  const { slug, moduleId } = req.fields;

  console.log('Incoming VIdeo =>> ', video);
  try {
    const videoPath = await saveVideo(video, slug, moduleId);

    res.send({ Key: videoPath });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
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
  const fileName = slugify(videoFile.name, { lower: true, strict: true });

  const fileExt = path.extname(videoFile.name);
  const newFileName = `${fileName}${fileExt}`;
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
    });
  });
};

export const deleteVideo = (key) => {
  // Definirea caii către fișierul video pe baza cheii
  const videoPath = path.join(__dirname, '../uploads', key);

  // Verifică existența fișierului video
  if (existsSync(videoPath)) {
    // Șterge fișierul video
    unlinkSync(videoPath);
    console.log(`Video ${key} deleted successfully.`);
  } else {
    console.log(`Video ${key} does not exist.`);
  }
};

export const deleteImage = (key) => {
  console.log('TODO ')
}

// verifica un path daca nu exista il creeaza
export function CheckOrCreateFolder(path) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

