const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let memberAvatar = message.mentions.members.first() || message.member
    let embed = new Discord.RichEmbed()
  .addField(`:frame_photo: Aqui está o avatar`,`**Clique [AQUI](${memberAvatar.user.avatarURL}) para baixar**`)
  .setImage(memberAvatar.user.displayAvatarURL)
  .setColor('RED')
  .setFooter(`Avatar solicitado por ${message.author.username}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}

module.exports.help = {
    name: "avatar"
}
