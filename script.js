function addChar(val) {
    document.getElementById("result").value += val
}
function clr() {
    document.getElementById("result").value = ""
}
function showResult() {
    let ex = document.getElementById("result").value
    let res = eval(ex)
    document.getElementById("result").value = res
}


// notebook
document.addEventListener("DOMContentLoaded", () => {
    const notes = document.getElementById('notes');

    // Load saved notes from local storage
    notes.value = localStorage.getItem('userNotes') || '';

    // Save notes to local storage on input
    notes.addEventListener('input', () => {
        localStorage.setItem('userNotes', notes.value);
    });
});
