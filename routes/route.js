const express = require('express');
const router = express.Router();
const getAllNotes = require('../controllers/getAllNotes');
const addNote = require('../controllers/addNotes');
const getLocation = require('../controllers/getLocation');
const addNoteValidation = require('../middleware/addNoteValidation');
const {checkUpdate} = require('../controllers/checkUpdate');

router.get('/getAllNotes', getAllNotes);
router.post('/addNote', addNoteValidation, addNote);
router.post('/post-location', getLocation);
router.post('/check-update', checkUpdate);

module.exports = router;