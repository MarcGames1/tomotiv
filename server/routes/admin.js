import express from 'express';
const router = express.Router();

import { requireSignin } from '../middlewares';

import { currentAdmin } from '../controllers/admin';





router.get('/current-admin', requireSignin, currentAdmin);



module.exports = router