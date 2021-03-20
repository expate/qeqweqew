let database = require("quick.db")
let ayarlar = require("../ayarlar.json")

//süleyman.json#0123

exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  //süleyman.json#0123
  database.set(`abonerol.${message.guild.id}`, rol.id)//süleyman.json#0123
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)//süleyman.json#0123
}//süleyman.json#0123
exports.config = {
  name: 'abone-rol',
  aliases: ['abone-rol','a-rol'] 
};

