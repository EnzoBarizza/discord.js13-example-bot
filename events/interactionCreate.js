const Client = require("../index.js").Client;

Client.on('interactionCreate', async interact => {

    if(interact.isCommand()) {
        let slashCmds = Client.SlashCmds.get(interact.commandName);
        if(slashCmds) slashCmds.run(interact);
    }

});
