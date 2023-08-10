import express from 'express';

import { sendForm } from '../controllers/form';

const router = express.Router();

router.post('/form-send', sendForm);
module.exports = router;