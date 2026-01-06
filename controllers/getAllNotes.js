const db = require('../data/db');

const getAllNotes = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM notes;"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "DB error" });
    }
};

module.exports = getAllNotes;
