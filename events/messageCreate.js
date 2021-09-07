const Client = require("../index.js").Client;
const {prefix} = require('../config.json');

Client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return;

    let prefixx = prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    // it will make the cmd work with him orginal name and his aliases
    let commands = Client.commands.get(cmd.slice(prefixx.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefixx.length)));

    if(commands) commands.run(Client, message, args);


});