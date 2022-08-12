const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    xhr.upload.onprogress = function (e) {
        progress.value = (e.loaded / e.total).toFixed(2);
    };

    xhr.send(formData);
});