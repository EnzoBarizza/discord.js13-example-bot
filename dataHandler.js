    const data = [
        {
            name: 'echo',
            description: 'Replies with sent message',
            options: [{
                name: "echo",
                type: 'STRING',
                description: 'echo message',
                required: true
            }]
        },
        {
            name: 'ping',
            description: 'Replies with Pong!'
        }
    ]

async function createCmd(Client, guildId) {

    await Client.guilds.cache.get(guildId)?.commands.set(data);
}

async function globalCmd(Client) {

    await client.application?.commands.create(data);
}

module.exports = { createCmd, globalCmd }
