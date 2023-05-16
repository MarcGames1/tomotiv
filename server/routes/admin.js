import express from 'express';
const router = express.Router();

import { requireSignin } from '../middlewares';

import { currentAdmin, listUsers, updateRole, deleteUser } from '../controllers/admin';





router.get('/current-admin', requireSignin, currentAdmin);
router.get('/admin/users', requireSignin, currentAdmin, listUsers);
router.put('/admin/users/:userId', requireSignin, currentAdmin, updateRole);
router.delete('/admin/users/:userId', requireSignin, currentAdmin, deleteUser);

module.exports = router