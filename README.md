<div align="center">
  <p>
    <a href="https://nodei.co/npm/tmath
/"><img src="https://nodei.co/npm/tmath.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

# Installation
### Requirements to use this package:
- Discord.JS v13

```
$ npm i tmath
$ npm i discord.js
```

# Usage
This is an customizable calculator for discordbots

```js
// If you have an commandhandler this should be in your mainfile 
const { Client } = require("discord.js"); //get Discord.JS

const client = new Client(); //define your Discord client

client.login("TOKEN"); //login with your bot

// If you have an commandhander this is then in your commandfile 
const TMath = require("tmath");

const calculator = new TMath({
  //Setup
  destroy: "Oh no, you locked me! :O", // Optional, default is "Calculator Locked"
  invalid: "Next time just put in a valid calculation!", // Optional, default is "Invalid Calculation"
  notauthor: "You aren't the calculatorowner c.c", // Optional, default is "Only the author can use the calculator! Run the command to create you're own."
  deactivatemessasge: "I deactivated me :x", // Optional, default is "The Calculator got deactivated"
  deactivatetime: 1000000, // Optional, default are 10 minutes
  request: message, // Required, the message or interaction that triggered the Messageevent/Command
  user: message.author // The user who called the request
});

await calculator.start(); // Reply
```

### v3.0.0 v13 Support 

<hr/>

### For support DM me on Discord (Adam ^^#7729), Supportserver: Comming Soon
