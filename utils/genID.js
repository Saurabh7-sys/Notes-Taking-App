const { readNotes } = require('./storeNotes')
exports.genID = () => {
    const notes = readNotes();

    if (notes.length === 0) return 1

    const lastId = notes[notes.length - 1].id;

    return lastId + 1
}
