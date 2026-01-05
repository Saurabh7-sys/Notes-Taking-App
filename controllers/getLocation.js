const { readNotes, writeNote } = require('../utils/storeNotes');

const getLocation = async (req, res) => {
    try {
        const { lat, lng } = req.body;

        if (!lat || !lng) {
            return res.status(400).json({ message: "lat and lng are required" });
        }

        const locations = await readNotes();

        const newLocation = {
            id: Date.now(),
            lat,
            lng,
            time: new Date().toISOString()
        };

        locations.push(newLocation);

        await writeNote(locations);

        res.status(201).json({
            message: "saved",
            data: newLocation
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "server error" });
    }
};

module.exports = getLocation;
