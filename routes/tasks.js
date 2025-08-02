// routes/tasks.js

const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');


router.post('/createTask', taskController.createTask);
router.get('/listTask', taskController.listAllTasks);
router.put('/updateTask/:id', taskController.updateTask);
router.delete('/deleteTask', taskController.deleteTask);


module.exports = router;
