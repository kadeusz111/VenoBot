const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10")

module.exports = {
    name: "ready",
    async execute(client) {
        //client.user.setActivity("=help", { type: "WATCHING"},)
        client.user.setPresence({ activities: [{ name: `Type: nya help`, type: `WATCHING`}], status: "idle"});

        const CLIENT_ID = client.user.id;

        console.log(`✅ logged as ${client.user.id}`);
    }
}