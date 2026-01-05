const addNoteValidation = (req, res, next) => {
    const { note } = req.body;
    if (!note) return res.status(400).json({ error: "note is required" })


    const cleanInput = note.trim();

    if (cleanInput === "") return res.status(400).json({ error: "note can't be empty" })
    req.cleanInput = cleanInput;
    next();
}

module.exports = addNoteValidation;