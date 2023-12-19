// controllers/studentController.js
const Student = require('../model/student');

const students = [];

const controller = {
    getStudents: function (req, res, next) {
        let allStudents = Student.getStudents();
        res.status(200).json(allStudents);
    },

    deleteStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.deleteStudentById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Cannot be deleted" });
        }
    },

    insertStudent: function (req, res, next) {
        let { studentId, fullname } = req.body;
        let student = new Student(studentId, fullname);
        let newCreatedStudent = student.insertStudent();
        if (newCreatedStudent) {
            res.status(200).json(newCreatedStudent);
        } else {
            res.status(404).json({ message: "Already registered.." });
        }
    },

    getStudentCoursesById: function (req, res, next) {
        let id = req.params.id;
        let courses = Student.getStudentCoursesById(id);
        if (courses) {
            res.status(200).json(courses);
        } else {
            res.status(404).json({ message: "Course cannot be found" });
        }
    },

    getStudentsByCourseName: function (req, res, next) {
        let courseName = req.query.name;
        let students = Student.getStudentsByCourseName(courseName);
        if (students) {
            res.status(200).json(students);
        } else {
            res.status(404).json({ message: "Student cannot be found" });
        }
    }
};

module.exports = controller;