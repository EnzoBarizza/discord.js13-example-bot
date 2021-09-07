const discord = require('discord.js');

module.exports.run = async (interaction) => {
    
    interaction.reply({ content: "Pong!", ephemeral: true })

}

module.exports.help = {
    name: 'ping'
}