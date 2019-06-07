const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { botconfig } = require ("../../botconfig.json");

module.exports = {
    config: {
        name: "bcode",
        description: "",
        usage: "!bcode",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["bc", "botc"]
    },
    run: async (bot, message, args) => {
    let bcEmbed = new RichEmbed()
        .setColor(cyan)
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL)
        .setTitle("Bot Code Example")
        .addField("const Discord = require('discord.js');","const client = new Discord.Client();")
        .addField("bot.on('ready', () => { \n console.log(`Logged in as ${client.user.tag}!`);: \n }); "," bot.on('message', msg => {")
        .addField("if (msg.content === 'ping') { \n message.reply('pong'); \n } \n });" , "bot.login('token');")
        .setTimestamp()
        .setColor(cyan)
        .setFooter(`Gamerz`, bot.user.displayAvatarURL);
    message.channel.send(bcEmbed);
    }
}