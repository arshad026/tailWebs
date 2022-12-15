const express = require('express')
const router = express.Router()
const { createTeachers, teacherLogin } = require('../Controllers/teacherController')
const { createStudents, getStudent, updateStudent, deleteStudent } = require('../Controllers/studentController')
const { authentication, authorisation } = require('../MiddleWares/auth')



router.post('/register', createTeachers)
router.post('/login', teacherLogin)


router.post('/students', authentication, createStudents)
router.get('/students', authentication, authorisation, getStudent)
router.put('/students/:studentId', authentication, authorisation, updateStudent)
router.delete('/students/:studentId', authentication, authorisation, deleteStudent)


module.exports = router