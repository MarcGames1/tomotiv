import express from 'express';

import {
  createModule,
  updateModule,
  getModule,
  getAllModules,
  deleteModule,
} from '../controllers/modules';
import { isInstructor, requireSignin } from '../middlewares';

const router = express.Router();

// Create a module within a course
router.post(
  '/courses/:slug/modules',
  requireSignin,
  isInstructor,
  createModule
);

// Update a module within a course
router.put(
  '/courses/:slug/modules/:moduleId',
  requireSignin,
  isInstructor,
  updateModule
);
router.delete(
  '/courses/:slug/modules/:moduleId',
  requireSignin,
  isInstructor,
  deleteModule
);


// Read a single module within a course
router.get(
  '/courses/:slug/modules/:moduleId',
  requireSignin,
  isInstructor,
  getModule
);

// Read all modules within a course
router.get(
  '/courses/:slug/modules',
  requireSignin,
  isInstructor,
  getAllModules
);

module.exports = router;
