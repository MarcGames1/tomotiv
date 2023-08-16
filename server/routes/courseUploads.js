import express from 'express';

import { checkAllowedHostNames, isAdmin, isInstructor, requireSignin } from '../middlewares';
import path from 'path';

import {
  getImage,
  getVideo,
  removeVideoController,
} from '../controllers/fileManager';
  

import { createFolder, deleteImage } from '../utils/fileManager';
const router = express.Router();


router.get(
  '/image/',
  checkAllowedHostNames,
  getImage
);
router.delete(
  '/image/',
  checkAllowedHostNames,
  requireSignin,
  isInstructor,
  deleteImage
);
router.delete('/video-delete/', checkAllowedHostNames, requireSignin, isInstructor, removeVideoController);

router.get(
  '/video/',
  checkAllowedHostNames,
  requireSignin,
  getVideo
);
const uploadsFolder = path.resolve(__dirname, '../uploads')

// Verifică dacă folderul "uploads" există

createFolder(uploadsFolder, router)

module.exports = router;