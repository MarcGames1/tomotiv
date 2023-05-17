import express from 'express';
const router = express.Router();

import { requireSignin, isAdmin } from '../middlewares';

import { currentAdmin, listUsers, updateRole, deleteUser } from '../controllers/admin';





router.get('/current-admin', requireSignin, currentAdmin);
router.get('/admin/users', requireSignin, isAdmin, listUsers);
router.put('/admin/users/:userId', requireSignin, isAdmin, updateRole);
router.delete('/admin/users/:userId', requireSignin, isAdmin, deleteUser);

module.exports = router