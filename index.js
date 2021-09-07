const discord = require("discord.js");
const { token } = require("./config.json");
const chalk = require("chalk")

const fs = require('fs');
const { monitorEventLoopDelay } = require("perf_hooks");

//Agora essa merda precisa de intents definidos /:

const Client =  new discord.Client({

    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, 
        discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true}

});

Client.commands = new discord.Collection();
Client.aliases = new discord.Collection();
Client.events = new discord.Collection();
Client.SlashCmds = new discord.Collection();
module.exports.Client = Client;

//Command Handler com aliases
fs.readdirSync('./commands/').forEach(dir => {
    fs.readdir(`./commands/${dir}`, (err, files) => {
        if (err) throw err;
        let loadedCmds = 0;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) {
          console.log(chalk.red("[COMMAND HANDLER]"), `Can't find any commands in ${dir}`);
          return;
        }
        
        jsFiles.forEach(file => {

            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(chalk.red("[COMMAND HANDLER]"), `File ${file} was loaded`);
            try {
                Client.commands.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                });

            } catch (err) {
                return console.log(err);
            }
        });
    });
});
//Command Handler com aliases

//Event Handler
fs.readdirSync('./events/').forEach(file => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(chalk.blueBright("[EVENT HANDLER]"), `Can't find any events in`);
        return;
    }
    let check = false;

    jsFiles.forEach(event => {
        const eventGet = require(`./events/${event}`);

        try {
            Client.events.set(eventGet.name, eventGet)
            if (check == false) {
                console.log(chalk.blueBright("[EVENT HANDLER]"), `File was loaded`);
                check = true;
            }
        } catch(error) {
            return console.log(error);

        };
    });
});
//Event Handler

//Interaction Handler (Slash)
fs.readdirSync('./interactions/').forEach(dir => {
    fs.readdir(`./interactions/${dir}`, (err, files) => {
        if (err) throw err;
        let loadedCmds = 0;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) {
          console.log(chalk.greenBright("[INTERACTION HANDLER]"), `Can't find any commands in ${dir}`);
          return;
        }
        
        jsFiles.forEach(file => {

            var fileGet = require(`./interactions/${dir}/${file}`);
            console.log(chalk.greenBright("[INTERACTION HANDLER]"), `File ${file} was loaded`);
            try {
                Client.SlashCmds.set(fileGet.help.name, fileGet);
            } catch (err) {
                return console.log(err);
            }
        });
    });
});
//Interaction Handler (Slash)



Client.login(token);