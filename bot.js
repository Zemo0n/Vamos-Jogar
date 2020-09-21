const Discord = require('discord.js');
const config = require('./config.json');
const hook = new Discord.WebhookClient('663007389057810442', '0EXIR5z2fJJsd7Lfu_nxerRcMwriSNaKNLJIMcrEYUyeZlhgytk-0-nLgO5-J8BqiXMN');

const client = new Discord.Client()
client.prefix = config.prefix;
const express = require('express');
const app = express();

//keep bot alive, and still working while i'm offline.
app.use(express.static('public'));
const http = require('http');
app.get("/", (request, response) => { response.sendStatus(200); });
app.listen(process.env.PORT); setInterval(function(){ http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); }, 20000);

client.on("message", async message => {
  
  
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply(`Meu prefixo é *${config.prefix}*, use _help`)}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./${command}.js`);
      delete require.cache[require.resolve(`./${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on('ready', () => {
    console.log(`O ${client.user.username} foi iniciado com sucesso! Com ${client.users.size} usuários, ${client.channels.size} canais e ${client.guilds.size} servidores.`);
    let status = [
        {name:`By: EdHz`, type: 'PLAYING'},
        {name:`Melhores Artes Aqui!`, type: 'WATCHING'},
        {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
        {name:`Ted Lindo :)`, type: 'STREAMING', url:'https://twitch.tv/vamojogar123'}
    ]
    function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({game: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(),5000)
  

client.on("guildMemberAdd", member => {
    let embed = new Discord.RichEmbed()
    
    .setTitle('Um novo membro entrou no servidor!')
    .setColor('RANDOM')
    .setThumbnail(member.user.avatarURL)
    .setDescription(`👋 Seja bem-vindo(a) ${member} ao VamoJogar`)
    .addField("Esperamos que goste daqui!", `Fique de olho nas <#661722321752686642>`)
    .setFooter(`Entrou As:`)
    .setTimestamp()
    member.guild.channels.get('661722310889439242').send(embed)    

    });

})

client.login(config.token)
