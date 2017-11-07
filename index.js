const Discord = require('discord.js')
const client = new Discord.Client()
const espetaculo = './sounds/espetaculo.mp3'

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  console.log(message.content)
  switch (message.content) {
    case 'ping':
      message.reply('pong')
      break
    case 'Qual':
      message.reply(' o preço desta montra final EEEEEEEEE')
      break
  }

  if(message.content.includes(':mendes:')){
    message.member.voiceChannel.join().then( connection =>{
      connection.playFile(espetaculo)
    });
  }
});

client.login(process.env.BOT_TOKEN)