const discord = require('discord.js');

module.exports.run = async (interaction) => {

    let msg = interaction.options.getString('echo');

    interaction.reply({ content: '`Echo enviado!`', ephemeral: true});
    interaction.channel.send(msg)

}

module.exports.help = {
    name: 'echo'
}