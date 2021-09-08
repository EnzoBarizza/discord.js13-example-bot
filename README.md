# DISCORD.JS V13 BOT

> Command handler

> Event handler

> Interaction handler (slash commands)


### Adding a new slash command

First step file in `interaction/category`

```js
const discord = require("discord.js");

module.exports.run = async (interaction) => {

    //Command here

    }

module.exports.help = {
   name: "your-command-name"
}
```

Second step add on `dataHandler.js`

```js
const data = [ 
    {
        name: 'your-command-name',
        description: 'your command description',
    }
  ] 
]
```

Third step add your test guild id on `events/ready.js`

> Optinal set release to true to release the slash commands for every discord server

```js
const Client = require("../index.js").Client;
const chalk = require("chalk");
const { createCmd, globalCmd } = require("../dataHandler")
const release = false;
const guildId = "YOUR_TEST_GUILD_ID";
```

### Adding new normal command

```js
const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
   
   //Command here

}

module.exports.help = {
    name: "your-command-name"
}
```

### config.json

```json
{
    "token": "TOKEN",
    "prefix": "PREFIX"
}
```


