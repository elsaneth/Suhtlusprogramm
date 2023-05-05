const ipInput = document.getElementById('ip-input');
const usernameInput = document.getElementById('username-input');
const messagesContainer = document.getElementById('messages-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.querySelector('button[type="button"]');

let ws;

function connect() {
  const ip = ipInput.value.trim();
  const username = usernameInput.value.trim();

  if (ip && username) {
    ws = new WebSocket(`ws://${ip}:12345`);

    ws.onopen = () => {
      console.log(`Connected to server at ws://${ip}:12345`);

      const new_user_notice = `${username} connected to a server`;
      ws.send(new_user_notice);

      messageInput.disabled = false;
      sendButton.disabled = false;

      messageInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          sendMessage();
        }
      });
    };

    ws.onclose = () => {
      console.log('Disconnected from server');
      messageInput.disabled = true;
      sendButton.disabled = true;
    };

    ws.onmessage = (event) => {
      const message = event.data.toString();
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      messagesContainer.appendChild(messageElement);
    };
  }
}

function sendMessage() {
  const message = `${usernameInput.value.trim()}: ${messageInput.value.trim()}`;
  ws.send(message);
  messageInput.value = '';
}