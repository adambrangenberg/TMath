<div align="center">
  <p>
    <a href="https://nodei.co/npm/tmath
/"><img src="https://nodei.co/npm/tmath.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

# Installation
### Requirements to use this package:
- discord-buttons v4
- Discord.JS v12

```
$ npm i tmath
$ npm i discord-buttons
$ npm i discord.js
```

# Use
This is an customizable calculator for discordbots

```js
// If you have an commandhandler this should be in your mainfile 
const { Client } = require("discord.js"); //get Discord.JS

const client = new Client(); //define your Discord client
require("discord-buttons")(client); //get discord-buttons

client.login("TOKEN"); //login with your bot

// If you have an commandhander this is then in your commandfile 
const TMath = require("tmath");

const calculator = new TMath({
  //Setup
  destroy: "Oh no, you locked me! :O", // Optional, default is "Calculator Locked"
  invalid: "Next time just put in a valid calculation!", // Optional, default is "Invalid Calculation"
  notauthor: "You aren't the calculatorowner c.c", // Optional, default is "Only the author can use the calculator! Run the command to create you're own."
  message: message, // Required, the message that triggered the Messageevent/Command
});

await calculator.start(); // Reply
```

### v2.1.0: Fixed button defer and only usable by message.author, support for discord-buttons v4
### v2.1.1: Fixed bug with math string weren't cleared after an invalid calculation

<hr/>

### For support DM me on Discord (Adam ^^#7729), Supportserver: Comming Soon
