const discord = require('discord.js');

module.exports.run = async (Client, message, args) => {

    message.reply('Pong!')

}

module.exports.help = {
    name: 'ping',
    aliases: []
}