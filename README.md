<div align="center">
  <p>
    <a href="https://nodei.co/npm/tmath
/"><img src="https://nodei.co/npm/tmath.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

# Installation
### Requirements to use this package:
- discord-buttons@3.1.1 
- Discord.JS@latest

```
$ npm i tmath
$ npm i discord-buttons@3.1.1
$ npm i discord.js@latest
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
  message: message, // Required, the message that triggered the Messageevent/Command
});

await calculator.start(); // Reply
```
### I've created this package because it was annoying to always make a pull request for the [weky](https://www.npmjs.com/package/weky) one
<hr/>

### v2: Fixed some Bugs with Calculationreset and added Pi and x10

<hr/>

### For support DM me on Discord (Adam ^^#7729), Supportserver: Comming Soon
