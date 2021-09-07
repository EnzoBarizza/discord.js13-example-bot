async function createCmd(Client, guildId) {
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

    await Client.guilds.cache.get(guildId)?.commands.set(data);
}

async function globalCmd(Client) {
    const data = [
        {
            name: 'echo',
            description: 'Replies with sent message',
            options: [{
                name: "echo",
                type: 'STRING',
                description: 'echo message',
                require: true
            }]
        },
        {
            name: 'ping',
            description: 'Replies with Pong!'
        }
    ]


    await client.application?.commands.create(data);
}

module.exports = { createCmd, globalCmd }