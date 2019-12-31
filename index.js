const Discord = require('discord.js'); 

const client = new Discord.Client(); 
const { Client, Attachment } = require('discord.js');

let prefix = "_"; 

client.login("NjM1MTcwNzA4NTkwNDI4MTcw.XatORg.WEp1A_i9RxXnTw8TBvth0w1Y2Kw"); 

client.on("ready", () => { 
    console.log("Je suis prêt ! check"); 
    client.user.setGame("⭐YourLifeRP⭐");
});
  

/*On*/
client.on('message', function (message) {
    if (message.content === "_on") {
        message.delete()
        message.channel.sendMessage("【:mega:】Status Serveur #1 :【✔️】ON ! 【⚠️】Si vous ne trouver pas le serveur merci de faire F8 : connect 51.89.173.104:32180 Ou le Direct Connect : 51.89.173.104:32180 【⚠️】 Allez lire le Règlement sous peine de sanction :wink:  Bon jeux à vous sur YourLifeRP @everyone")
        console.log('répond à Serveur on')
    }
})


/*On*/
client.on('message', function (message) {
    if (message.content === "_off") {
        message.delete()
        message.channel.sendMessage("【:mega:】Status Serveur #1 :【❌】OFF ! 【⚠️】Merci D'attendre une deuxieme annonce qui indiquera que le serveur est ON【⚠️】 Allez lire le Règlement sous peine de sanction :wink:  Merci de patienter.... @everyone")
        console.log('répond à Serveur off')
    }
})

 

