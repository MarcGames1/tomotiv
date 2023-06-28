import express from 'express';

import { checkAllowedHostNames, isAdmin, isInstructor, requireSignin } from '../middlewares';


import { getImage, getVideo, removeObject } from '../controllers/courseUploads';

const router = express.Router();


router.get(
  '/image/:key',
  checkAllowedHostNames,
  getImage
);
router.delete('/image/:key', checkAllowedHostNames, requireSignin, isInstructor, removeObject);
router.delete('/video/:key', checkAllowedHostNames, requireSignin, isInstructor, removeObject);

router.get(
  '/video/:key',
  checkAllowedHostNames,
  requireSignin,
  getVideo
);
module.exports = router;