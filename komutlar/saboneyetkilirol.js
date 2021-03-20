let database = require("quick.db")
let ayarlar = require("../ayarlar.json")

//süleyman.json#0123

exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
//süleyman.json#0123
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}

exports.config = {
  name: 'abone-yetkili-rol',
  aliases: ['abone-yetkili-rol','aboneyetkilirol'] 
};

