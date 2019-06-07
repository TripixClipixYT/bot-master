const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "actors",
        description: "Pulls the serverinfo of the guild!",
        usage: "tr!actors",
        category: "Follow_me",
        accessableby: "Bot Owner",
        aliases: ["ac", "act"]
    },
    run: async (bot, message, args) => {
    let actEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("Follow Me Actors")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Coming Soon...")
    message.channel.send(actEmbed);
    }
}