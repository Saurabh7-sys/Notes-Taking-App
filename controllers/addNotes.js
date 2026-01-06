const db = require("../data/db");

const addNote = async (req, res) => {
    try {
        const cleanInput = req.cleanInput;

        const result = await db.query(
            "INSERT INTO notes (note) VALUES ($1) RETURNING *",
            [cleanInput]
        );

        res.status(201).json({
            message: "success",
            note: result.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "DB error" });
    }
};

module.exports = addNote;
