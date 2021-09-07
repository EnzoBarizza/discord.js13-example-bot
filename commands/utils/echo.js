const discord = require('discord.js');

module.exports.run = async(Client, message, args) => {

    const args2 = message.content.split(' ').slice(1)
    const args3 = args.slice(0).join(' ');

    message.delete(1000);

    message.channel.send(args3);

}

module.exports.help = {
    name: 'echo',
    aliases: ['ec', 'eo']
}