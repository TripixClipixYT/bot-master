const { RichEmbed } = require("discord.js")
const { red_dark } = require("../../colours.json");
const { botconfig } = require ("../../botconfig.json");

module.exports = {
    config: {
        name: "bcode",
        description: "Pulls the info of the bot!",
        usage: "!bcode",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["bc", "botc"]
    },
    run: async (bot, message, args) => {
    let bwEmbed = new RichEmbed()
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL)
        .setTitle("Bot's Website")
        .addField("**Bot's Website**", "https://lucifers-coding.site123.me")
        .setColor(red_dark)
        .setFooter(`Gamerz`, bot.user.displayAvatarURL);
    message.channel.send(bwEmbed);
    }
}