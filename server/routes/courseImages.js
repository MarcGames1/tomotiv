import express from 'express';

import { checkAllowedHostNames, requireSignin } from '../middlewares';


import { getImage, removeImage } from '../controllers/courseImages';

const router = express.Router();


router.get('/image/:key',checkAllowedHostNames,  getImage )
router.delete('/image/:key', checkAllowedHostNames, removeImage);


module.exports = router;