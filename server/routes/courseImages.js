import express from 'express';

import { checkAllowedHostNames, requireSignin } from '../middlewares';


import { getImage, deleteImage } from '../controllers/courseImages';

const router = express.Router();


router.get('/image/:key',checkAllowedHostNames,  getImage )
router.delete('/image/:key', checkAllowedHostNames, deleteImage)


module.exports = router;