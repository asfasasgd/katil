const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`${client.user.tag} Adı İle Giriş Yapıldı`);
});

client.on('message', message => {
  if (message.content === prefix + 'ping') {
    message.channel.send(+ client.ping + 'ms');
  }
  
    if (message.content === 'sa') {
    message.reply('Aleyküm Selam');
  }
  
  if (message.content === prefix + 'avatarım') {  
	message.channel.send(message.author.avatarURL);
  }
  
  if (message.content === prefix + 'reboot') {
	  
	  if (message.author.id === "411226444870582272") {
		  message.channel.send('Bot Yenden Başlatılıyor...').then(msg => {
			  console.log('Bot Yeniden Başlatılıyor...')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }
  
  
});

client.login(ayarlar.token);