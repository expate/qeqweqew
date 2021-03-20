const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.addField("__**Bot Verileri**__", `<a:hypesquad1:750076071721828452> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:750076071721828452> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:750076071721828452> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:hypesquad1:750076071721828452> **Bot Sahibi**  <@31> \n **wisky** \n\n <a:hypesquad1:750076071721828452>\ **Bot Geliştiricisi**  <@31> \n **wisky** \n\n <a:hypesquad1:750076071721828452> **Bot Sahibi**  <@31> \n **wisky** \n`)
.addField("__**Sürümler**__", `<a:hypesquad1:750076071721828452> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:750076071721828452> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad1:750076071721828452> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:hypesquad1:750076071721828452> " +client.voice.connections.size + " Sunucu", true)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}