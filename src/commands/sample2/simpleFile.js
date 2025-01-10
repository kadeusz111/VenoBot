const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require('discord.js');


module.exports = {
    name: ["meow", "miał", "nya"],
    async execute(client, msg, args) {
        const attachment = new MessageAttachment('../../images/yt1s.com - ﾉ.mp4');
        await msg.reply({ content: 'meow', files: ['file',], allowedMentions: { repliedUser: false } });
    }
}