// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/api', studentController.getStudentsByCourseName);  // http://localhost:3000/students/api/?name=WAP
router.get('/', studentController.getStudents); //  http://localhost:3000/students
router.delete('/:id', studentController.deleteStudentById); // http://localhost:3000/students/616457
router.post('/', studentController.insertStudent);  // http://localhost:3000/students
router.get('/:id', studentController.getStudentCoursesById);  // http://localhost:3000/students/616457


module.exports = router;