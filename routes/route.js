const express = require('express');
const router = express.Router();
const getAllNotes = require('../controllers/getAllNotes');
const addNote = require('../controllers/addNotes');
const getLocation = require('../controllers/getLocation');
const addNoteValidation = require('../middleware/addNoteValidation');

router.get('/getAllNotes', getAllNotes);
router.post('/addNote', addNoteValidation, addNote);
router.post('/post-location', getLocation);

module.exports = router;