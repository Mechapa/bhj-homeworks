const form = document.getElementById('signin__form');
const singButton =document.getElementById('signin__btn');
const welcome = document.querySelector('.welcome');

singButton.addEventListener('click',function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () =>{
        
        if(xhr.readyState === xhr.DONE){
            response = JSON.parse(xhr.responseText);
            if(response.success){
                localStorage.setItem('user_id', response.user_id);
                welcome.textContent = welcome.textContent + localStorage.getItem('user_id');
                welcome.classList.add('welcome_active');
            }
            else{
                alert("Неверный логин/пароль"); 
            }
        }
        else {
            alert("Ошибка " + xhr.status);
        }
        })
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
    });
})