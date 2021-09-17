# DISCORD.JS V13 BOT

> Command handler

> Event handler

> Interaction handler (slash commands)


### Adding a new slash command

First step create a file in `interaction/command_category`

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

Options table

Field | Type | Description
------|------|------------
type | one of [application command option type](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type) | 	the type of option
name | string | 1-32 character name
description | string | 1-100 character description
required? | boolean | if the parameter is required or optional--default false
choices? | array of [application command option choice](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure) | choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25
options? | array of [application command option](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure) | 	if the option is a subcommand or subcommand group type, this nested options will be the parameters

Third step add your test guild id on `events/ready.js`

> Optional set release to true to release the slash commands for every discord server

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


