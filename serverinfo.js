const Discord = require('discord.js');

module.exports = {
  run: (client, message, args) => {
    let g = { name:`${message.guild.name}`, owner:`${message.guild.owner}`, owid:`${message.guild.ownerID}` , id:`${message.guild.id}`, mc:`${message.guild.memberCount}`, iurl:message.guild.iconURL };
    if (g.iurl === "." || g.iurl === "null" || g.iurl === "undefined" || g.iurl === "") { let e = new Discord.RichEmbed()
      .setTitle("Informações do Servidor\n")
      .setTitle("Infelizmente, o servidor não tem imagem.")
      .addField("Nome do servidor", `**${g.name}**`)
      .addField("Atual dono do servidor", `**${g.owner}**`)
      .addField("Número de membros", `**${g.mc}**`)
      .addField("ID do servidor", `**${g.id}**`)
      .addField("ID do dono do servidor", `**${g.owid}**`);
     message.channel.send(e); } else {
      let e = new Discord.RichEmbed()
        .setTitle("Informações do Servidor\n")
        .setThumbnail(g.iurl)
        .addField("Nome do servidor", `**${g.name}**`)
        .addField("Atual dono do servidor", `**${g.owner}**`)
        .addField("Número de membros", `**${g.mc}**`)
        .addField("ID do servidor", `**${g.id}**`)
        .addField("ID do dono do servidor", `**${g.owid}**`)
      let t = message.channel;
      t.send(e);
    }
  }
}
