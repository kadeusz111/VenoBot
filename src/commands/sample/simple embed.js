const { EmbedBuilder, MessageEmbed } = require('discord.js');
    module.exports = {
        name: ["help", "helplist", "Help", "Helplist"],
        async execute(client, msg, args) {
            const Embed = new MessageEmbed()
            .setColor(0x4E0082)
            .setAuthor({ name: 'HelP page'})
            .setTimestamp()
            .setFooter({ text: ''});
            
            msg.channel.send({ embeds: [Embed] });
            

        }
    }