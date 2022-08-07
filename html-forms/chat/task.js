const widget = document.querySelector(".chat-widget");
const input = document.querySelector(".chat-widget__input")
const messages = document.querySelector(".chat-widget__messages")
const date = new Date();
widget.addEventListener("click", () => { widget.classList.add("chat-widget_active") })

const answersArray =
  ['Не пишите сюда',
    'Научитесь правильно задавать вопросы!',
    'До свидания, хотя лучше прощайте.',
    'Доброе утро(нет)',
    'Вы все еще здесь?',
    'Сейчас все специалисты не хотят с вами общаться. Но когда-нибудь мы вам ответим',
    'С такими как вы, мы работать не будем',
    'Что я могу сделать чтобы закончить наше общение?',
  ];

input.addEventListener("keydown", sendMessage);

function randomAnswer() {
  let answerIndex = Math.floor(Math.random() * answersArray.length);
  let currentAnswer = answersArray[answerIndex];
  console.log(currentAnswer)
  sendRobotMessage(currentAnswer);
}

function sendRobotMessage (currentAnswer) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${date.toLocaleTimeString()}</div>
    <div class="message__text">
      ${currentAnswer}
    </div>
  </div>
`;
}

function sendMessage(e) {
  if (e.key === 'Enter' && input.value) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${date.toLocaleTimeString()}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>
`;
    input.value = null;
    setTimeout(randomAnswer(), 2000);
  }
}