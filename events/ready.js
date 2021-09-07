const Client = require("../index.js").Client;
const chalk = require("chalk");
const { createCmd, globalCmd } = require("../dataHandler")
const release = false;

Client.on('ready', async () => {
    let table = [
        { name: "Fazendo merda", type: "PLAYING" },
        { name: "Prefix s!", type: "WATCHING"},
        { name: 'Animes', type: "WATCHING"}
    ]

    function setStatus() {
        var altstatus = table[Math.floor(Math.random() * table.length)];
        Client.user.setActivity(altstatus);
    }

    setStatus();
    setInterval(() => setStatus(), 5000);

    createCmd(Client, '868570758375411802');

    if (release == true){
        globalCmd(Client);
        console.log(chalk.cyanBright("[RELEASED]"));
    }
    else{
        console.log(chalk.redBright("[UNRELEASED]"));
    }
    console.log(chalk.magentaBright(Client.user.tag), `Status Online!`);
});