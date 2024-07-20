const express = require('express');
const { createProject, deleteProject, updateProject, getProject } = require('../controllers/projectController');

const router = express.Router();

router.post('/', createProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);
router.get('/:id', getProject);

module.exports = router;
