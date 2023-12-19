let students = [
    {
        studentId: 616457,
        fullname: "Anna Dove",
        courses: [
            { courseId: "CS390", name: "FPP", credit: 4 },
            { courseId: "CS401", name: "MPP", credit: 4 },
            { courseId: "CS472", name: "WAP", credit: 4 }
        ]
    },
    {
        studentId: 616418,
        fullname: "John Smith",
        courses: [
            { courseId: "CS401", name: "MPP", credit: 4 },
            { courseId: "CS472", name: "WAP", credit: 4 }
        ]
    },
    {
        studentId: 616423,
        fullname: "Jim Karry",
        courses: [
            // Courses would be listed here, similar to the others.
        ]
    }
];



// models/Student.js
class Student {
    constructor(studentId, fullname) {
        this.studentId = studentId;
        this.fullname = fullname;
        this.courses = [];
    }

    static getStudents() {
        return students;
    }

    static deleteStudentById(id) {
        let index = students.findIndex(s => s.studentId == id);
        if (index !== -1)
            return students.splice(index, 1);
    }

    insertStudent() {
        if (!students.find(s => s.studentId == this.id)) {
            students.push(this);
            return this;
        }
    }

    static getStudentCoursesById(id) {
        let student = students.find(s => s.studentId == id);
        if (student) {
            return student.courses;
        }
    }

    static getStudentsByCourseName(courseName) {
        let filteredStudents = students.filter(student => {
            if (student.courses) {
                return student.courses.some(course => course.name === courseName);
            }
            return false;
        });
        return filteredStudents;
    }
}

module.exports = Student;