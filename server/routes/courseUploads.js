import express from 'express';

import { checkAllowedHostNames, isAdmin, isInstructor, requireSignin } from '../middlewares';
import path from 'path';

import { getImage, getVideo, removeObject } from '../controllers/courseUploads';

import { createFolder } from '../utils/fileManager';
const router = express.Router();


router.get(
  '/image/',
  checkAllowedHostNames,
  getImage
);
router.delete('/image/', checkAllowedHostNames, requireSignin, isInstructor, removeObject);
router.delete('/video-delete/', checkAllowedHostNames, requireSignin, isInstructor, removeObject);

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