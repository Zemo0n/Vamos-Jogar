const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Sobre o Bot VamoJogar!")
        .addField(":crown: **> Criador**", `<@653531776521863169>`)
        .addField(":computer: **> Criado Com**", `Visual Studio Code - Discord.js`)
        .addField(":calendar_spiral: **> Criado Dia:**", `24/01/2020`)        
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("GREEN")

        message.channel.send(pEmbed)
}

module.exports.help = {
    name: "infobot"
}
