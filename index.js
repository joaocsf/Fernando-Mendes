var Discord = require('discord.js')

var client = new Discord.Client()

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  console.log(message.content)
  if (message.content === 'ping') {
    message.reply('pong');
  }

  if(message.content.includes(':mendes:')){

    var filePath = "./sounds/espetaculo.mp3"
    message.member.voiceChannel.join().then( connection =>{
      connection.playFile(filePath)
    });


  }

});

client.login(process.env.BOT_TOKEN)