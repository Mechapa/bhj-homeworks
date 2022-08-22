const textArea = document.querySelector('#editor');

textArea.addEventListener('keydown', () => {
    localStorage.setItem('text', textArea.value)
})
textArea.value = localStorage.getItem("text")