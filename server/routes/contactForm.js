import express from 'express';
import {
  createForm,
  readAllForms,
  getFormById,
  updateForm,
  deleteForm,
  deleteAllForms,
} from '../controllers/contactForm';
import { isAdmin, requireSignin } from '../middlewares';

const router = express.Router();


router.post('/form-create', createForm);

// Rute pentru administratori
router.get('/contact-forms', requireSignin, isAdmin, readAllForms);
router.get('/admin/contact-forms/:id', requireSignin, isAdmin, getFormById);
router.put('/admin/contact-forms/:id', requireSignin, isAdmin, updateForm);
router.delete('/admin/contact-forms/:id', requireSignin, isAdmin, deleteForm);
router.delete(
  '/contact-forms/delete-all',
  requireSignin,
  isAdmin,
  deleteAllForms
);


module.exports = router;
