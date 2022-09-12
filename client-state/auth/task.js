const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const singButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userIdValue = document.getElementById('user_id');

LogInUser();

singButton.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', () =>{
    response = (xhr.response);
    if (response.success) {
      logInSucces(response.user_id);
      localStorage.setItem('userId', response.user_id);
      form.reset();
    } else {
      form.login.value = '';
      form.password.value = '';
      form.reset();
      alert('Неверный логин/пароль');
    };
  });
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(formData);
});

function logInSucces(userId) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdValue.innerText = userId;
};

function LogInUser() {
  if (localStorage.getItem('userId')) {
    logInSucces(localStorage.getItem('userId'))
  }
};
