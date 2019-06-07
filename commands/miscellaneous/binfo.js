const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { botconfig } = require ("../../botconfig.json");

var version = "1.0.3[Alpha]";
var bdeveloper= "LuciferBG#6035";

module.exports = {
    config: {
        name: "binfo",
        description: "Pulls the info of the bot!",
        usage: "!binfo",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["bi", "botdesc"]
    },
    run: async (bot, message, args) => {
    let biEmbed = new RichEmbed()
        .setColor(cyan)
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTitle("**Bot Info**")
        .addField("**Bot Name**", bot.user.username)
        .addField("**Bot's Website**", "https://lucifers-coding.site123.me")
        .addField("**Bot Owner:**", bdeveloper)
        .addField("**Bot Version:**", version)
        .setDescription("Tripix's Bot Information")
        .addField("**The bot was created on:**", bot.user.createdAt)
        .addField("**Bot Type:**", "_Chat Bot_")
        .addField("**Total Servers:**", bot.guilds.size)
        .addField("**More Info:**", "When the bot is in **Beta** mode **admins** and **mods** can use the bot code and help for finishig him!")
        .setFooter(`Gamerz`, bot.user.displayAvatarURL);
    message.channel.send(biEmbed);
    }
}