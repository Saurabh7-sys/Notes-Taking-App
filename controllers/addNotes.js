const db = require("../data/db");
const addNote = async (req, res) => {
    try {
        const cleanInput = req.cleanInput;

        const newNote = {
            note: cleanInput
        };

        await db.query(
            "INSERT INTO notes (id, note) VALUES (?, ?)",
            [newNote.id, newNote.note]
        );

        res.status(201).json({
            message: "success",
            note: newNote
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "DB error" });
    }
}

module.exports = addNote;