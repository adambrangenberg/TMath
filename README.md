<div align="center">
  <p>
    <a href="https://nodei.co/npm/tmath
/"><img src="https://nodei.co/npm/tmath.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

# Installation

You need for this one discord-buttons 3.1.1 and Discord.JS latest =)

```
$ npm i tmath
$ npm i discord-buttons@3.1.1
$ npm i discord.js@latest
```

# Use

```js
// If you have an commandhandler this shoud be in your mainfile ^^
const { Client } = require("discord.js"); //get Discord.JS

const client = new Client(); //define your Discord client
require("discord-buttons")(client); //get discord-buttons

client.login("TOKEN"); //login with your bot

// If you have an commandhander this is then in your commandfile ^^
const TMath = require("tmath");

const calculator = new TMath({
  //Setup
  destroy: "Oh no, you locked me! :O", // Optional, default is "Calculator Locked"
  invalid: "Next time just put in a valid calculation!", // Optional, default is "Invalid Calculation"
  message: message, // Required, the message that triggered the Messageevent/Command
});

await calculator.start(); // Reply
```
### For support DM me on Discord (Adam ^^#7729), Supportserver: Cooming Soon
