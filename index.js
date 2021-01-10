const Discord = require("discord.js")
const token = require("./token.json") 


bot.on("ready", async () =>{
    console.log("le bot est allumé"),
    bot.user.setStatus("dnd"),
    bot.user.setActivity("visual studio code");
});



bot.login(token.token);