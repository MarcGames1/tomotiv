import express from 'express';
import {update,} from '../controllers/courseStatus'



const router = express.Router()



router.put('/:courseId/:userId/update', update)



module.exports = router;
