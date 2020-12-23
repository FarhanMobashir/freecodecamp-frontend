// variables

const editorInput = document.querySelector('#editor');
const previewerOutput = document.querySelector('#preview');

// Event Listeners
editorInput.addEventListener('keyup', mdParser);



// functions

function initParser() {
    previewerOutput.innerHTML = marked(editorInput.value)
}

function mdParser(e) {
    // console.log(e.target.value);
    previewerOutput.innerHTML = marked(e.target.value);

}