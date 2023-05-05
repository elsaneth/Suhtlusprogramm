const readline = require('readline');
const WebSocket = require('ws');

const connected = new Set();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter server IP address: ', (ip) => {
  rl.question('Enter your username: ', (username) => {
    const ws = new WebSocket(`ws://${ip}:12345`);

    ws.on('open', () => {
      const new_user_notice = `${username} connected to a server`;
      ws.send(new_user_notice);

      rl.on('line', (input) => {
        const message = `${username}: ${input.trim()}`;
        ws.send(message);
      });

      ws.on('message', (data) => {
        console.log(data.toString());
    });
    });

  });
});