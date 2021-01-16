const button = document.getElementById('button');
const toats = document.getElementById('toasts');

const messages = [
  'message one',
  'message two',
  'message three',
  'message four',
];

button.addEventListener('click', () => {
  createNotification('this is a invalid message', 'success');
});

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : 'info');
  notif.innerText = message ? message : getRandomMessage();
  toats.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
