
const input = $("#input");
const addBtn = $("#add-btn");
const notesArea = $("#notes-area");
const ul = $("#ul");


const displayTasks = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/getAllNotes");
        const data = await response.json();

        console.log(data);

        ul.empty();
        data.forEach(note => {
            ul.append(`<li>${note.note}</li>`);
        });
    } catch (error) {
        console.error(error);
    }
};



displayTasks()