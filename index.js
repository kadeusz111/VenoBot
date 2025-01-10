onst { Client, Intents, Collection } = require("discord.js");
const { loadEvents, loadCommands } = require("./handler");
const { token } = require('./config.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
//const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { getMemberFromArg } = require("./src/utils/menitonUtil");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const superagent = require('superagent')
const db = require('./src/events/interactionCreate');
const fs = require('fs');
//const  client  = new Client({intents: new Intents(32767)});
const myIntents = new Intents();
myIntents.add(
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
)
const  client  = new Client({intents: myIntents});

console.log(`
▌ ▐·▄▄▄ . ▐ ▄       
▪█·█▌▀▄.▀·•█▌▐█ ▄█▀▄ 
▐█▐█•▐▀▀▪▄▐█▐▐▌▐█▌.▐▌
 ███ ▐█▄▄▌██▐█▌▐█▌.▐▌
. ▀   ▀▀▀ ▀▀ █▪ ▀█▄▀▪                          
`)
loadEvents(client);
loadCommands(client);

client.login(token);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1"; 
