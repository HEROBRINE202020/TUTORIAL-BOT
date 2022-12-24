const token = "il tuo token";
const { GatewayIntentBits, Partials, Client } = require("discord.js");

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

client.login(token).then(() => {
    console.log("IL BOT E' ONLINE!");
});
