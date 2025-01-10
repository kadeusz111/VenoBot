const prefix = "nya ";
const { MessageEmbed } = require('discord.js');
const  commands  =  require('../../handler')
const  { getRucursivelyDirectoryFiles }  = require("../utils/filesUtil")




module.exports = {
    name: "messageCreate",
    async execute(client, msg) {
        //console.log(msg.content)


        if(msg.author.bot) return;
        
        const content = msg.content;


        let totalcommands = getRucursivelyDirectoryFiles('./src/commands', '.js').length
        const discordjsversion = require('discord.js').version;
        if(msg.content === `<@${client.user.id}>`) {
            const Embed = new MessageEmbed()
            .setColor(0x4E0082)
            .setAuthor('Hi 👋', client.user.avatarURL())
            //.setDescription(`**Discord.JS:** ${discordjsversion}\n**GitHub: **https://github.com/kadeusz111/VenoBot\n**Total commands:** ${totalcommands}`)
            .setDescription(`> **Discord.JS:** ${discordjsversion}\n> **Total commands:** ${totalcommands}`)
            .setTimestamp()
            .setFooter({ text: 'Veno 2023 by kadeusz'});
            msg.channel.send({ embeds: [Embed] });
            }

        if(!content.startsWith(prefix)) return;
        /* args[0] => command name */
        const args = content.slice(prefix.length).split(" ");

        //if(!client.commands.has(args[0])) {
        //    msg.channel.send("```❌ Invalid command```")
        //}

        const command = client.commands.get(args[0]);
       
        try {
            command.execute(client, msg, args,);
        } catch(e) { 
         }
    }
    
}