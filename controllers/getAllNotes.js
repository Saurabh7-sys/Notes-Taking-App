const db = require('../data/db');
const getAllNotes = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM notes;"
        );;
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "DB error" });
    }
}


module.exports = getAllNotes;