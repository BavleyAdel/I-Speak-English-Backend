import { Router } from 'express';
import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/student.controller.js';

const router = Router();

router.post('/createStudent', createStudent);      // POST /api/students
router.get('/', getStudents);         // GET  /api/students
router.get('/getStudent/:id', getStudent);       // GET  /api/students/:id
router.put('/updateStudent/:id', updateStudent);    // PUT  /api/students/:id
router.delete('/deleteStudent/:id', deleteStudent); // DELETE /api/students/:id

export default router;