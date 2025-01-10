
const { Collection } = require("discord.js");
const ready = require("./src/events/ready");
const { getRucursivelyDirectoryFiles } = require("./src/utils/filesUtil");


module.exports = {
    loadEvents,
    loadCommands
}

function loadEvents(client) {
    const events = getRucursivelyDirectoryFiles("./src/events", ".js")

    for(const event of events) {
        const object = require(`./${event}`);

        if(!object.name) { continue; }

        client.on(object.name, (...args) => { object.execute(client, ...args); })
    }

    console.log(`✅ Loaded ${events.length} events`)
}

function loadCommands(client) {
    client.commands = new Collection();

    const commands = getRucursivelyDirectoryFiles("./src/commands", ".js")

    for(const command of commands) {
        const object = require (`./${command}`);

        const commandsArry = [];

        if(!object.name) { continue; }

        commandsArry.push(command)

        for(const alias of object.name) {
            client.commands.set(alias, object);

            //client.on("ready", () => {
                //client.guilds.chache.commands.set(commandsArry)
            //})
        }
    }
    //const CLIENT_ID = client.user.id;


    console.log(`✅ Loaded ${commands.length} commands `)
}   
