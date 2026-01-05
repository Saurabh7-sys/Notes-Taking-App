const express = require('express');
const router = require('./routes/route')
const cors = require('cors');
const app = express();
const db = require('./data/db');
app.use(cors());
app.use(express.json());



app.use('/api', router);
app.use('/db-connection', async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.json({ status: "DB Connected" });
    } catch (error) {
        console.error("DB ERROR", error);
        res.status(500).json({ error: "DB not connected" });
    }
});
app.listen(3000);