const { Client } = require("discord.js");

const client = new Client({  });

client.on("ready", () => {
    console.log("Logged In");
});

client.login();