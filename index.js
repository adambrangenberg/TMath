module.exports = class Calculator {
  constructor(options) {
    if (!options.request)
      throw new TypeError("[TMath] Error: Missing argument request");
    this.request = options.request;
    this.user = options.user
    
    let destroy = options.destroy;
    let invalid = options.invalid;
    let notauthor = options.notauthor;
    let deactivatemessage = options.deactivatemessage;
    let deactivatetime = options.deactivatetime;

    if (!options.destroy) destroy = "Calculator Locked";
    if (!options.invalid) invalid = "Invalid Calculation";
    if (!options.notauthor) notauthor = "Only the author can use the calculator! Run the command to create you're own.";
    if (!options.deactivatemessage) deactivatemessage = "The Calculator got deactivated";

    const tenmin = 600000
    if (!options.deactivatetime) deactivatetime = tenmin;


    if (typeof destroy !== "string")
      throw new TypeError("[TMath] Error: destroy must be a string");

    if (typeof invalid !== "string")
      throw new TypeError("[TMath] Error: invalid must be a string");

    if (typeof notauthor !== "string")
      throw new TypeError("[TMath] Error: notauthor must be a string");

    if (typeof deactivatemessage !== "string")
      throw new TypeError("[TMath] Error: deactivatemessage must be a string");

    if (typeof deactivatetime !== "number")
      throw new TypeError("[TMath] Error: deactivatetime must be a number");

    this.invalid = invalid;
    this.destroy = destroy;
    this.notauthor = notauthor;
    this.deactivatemessage = deactivatemessage;
    this.deactivatetime = deactivatetime;
  }

  async start() {
    const {
      MessageButton
    } = require("discord.js");
    const wait = require("util").promisify(setTimeout);
    //Get I
    function i(length) {
      var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      return result;
    }

    //Define Numbers
    let str = " ";
    let math = " ";
    let stringify = "```\n" + str + "\n```";
    const calculator_c = i(20);
    const calculator_e1 = i(20);
    const calculator_e2 = i(20);
    const calculator_uppercase = i(20);
    const calculator_7 = i(20);
    const calculator_8 = i(20);
    const calculator_9 = i(20);
    const calculator_plus = i(20);
    const calculator_minus = i(20);
    const calculator_star = i(20);
    const calculator_devide = i(20);
    const calculator_proz = i(20);
    const calculator_1 = i(20);
    const calculator_2 = i(20);
    const calculator_3 = i(20);
    const calculator_4 = i(20);
    const calculator_5 = i(20);
    const calculator_0 = i(20);
    const calculator_6 = i(20);
    const calculator_dot = i(20);
    const calculator_equal = i(20);
    const calculator_backspace = i(20);
    const calc_irrc = i(20);
    const calculator_pi = i(20);
    const calculator_starten = i(20);

    //Setup Buttonstyle
    const c = new MessageButton()
      .setLabel("C")
      .setCustomId(calculator_c)
      .setStyle("DANGER");
    const e1 = new MessageButton()
      .setLabel("(")
      .setCustomId(calculator_e1)
      .setStyle("PRIMARY");
    const e2 = new MessageButton()
      .setLabel(")")
      .setCustomId(calculator_e2)
      .setStyle("PRIMARY");
    const uppercase = new MessageButton()
      .setLabel("^")
      .setCustomId(calculator_uppercase)
      .setStyle("PRIMARY");
    const seven = new MessageButton()
      .setLabel("7️")
      .setCustomId(calculator_7)
      .setStyle("SECONDARY");
    const eight = new MessageButton()
      .setLabel("8️")
      .setCustomId(calculator_8)
      .setStyle("SECONDARY");
    const nine = new MessageButton()
      .setLabel("9️")
      .setCustomId(calculator_9)
      .setStyle("SECONDARY");
    const devide = new MessageButton()
      .setLabel("÷")
      .setCustomId(calculator_devide)
      .setStyle("PRIMARY");
    const four = new MessageButton()
      .setLabel("4️")
      .setCustomId(calculator_4)
      .setStyle("SECONDARY");
    const five = new MessageButton()
      .setLabel("5️")
      .setCustomId(calculator_5)
      .setStyle("SECONDARY");
    const six = new MessageButton()
      .setLabel("6️")
      .setCustomId(calculator_6)
      .setStyle("SECONDARY");
    const star = new MessageButton()
      .setLabel("×")
      .setCustomId(calculator_star)
      .setStyle("PRIMARY");
    const one = new MessageButton()
      .setLabel("1️")
      .setCustomId(calculator_1)
      .setStyle("SECONDARY");
    const two = new MessageButton()
      .setLabel("2️")
      .setCustomId(calculator_2)
      .setStyle("SECONDARY");
    const three = new MessageButton()
      .setLabel("3️")
      .setCustomId(calculator_3)
      .setStyle("SECONDARY");
    const minus = new MessageButton()
      .setLabel("-")
      .setCustomId(calculator_minus)
      .setStyle("PRIMARY");
    const zero = new MessageButton()
      .setLabel("0️")
      .setCustomId(calculator_0)
      .setStyle("SECONDARY");
    const dot = new MessageButton()
      .setLabel(",")
      .setCustomId(calculator_dot)
      .setStyle("PRIMARY");
    const equal = new MessageButton()
      .setLabel("=")
      .setCustomId(calculator_equal)
      .setStyle("SUCCESS");
    const plus = new MessageButton()
      .setLabel("+")
      .setCustomId(calculator_plus)
      .setStyle("PRIMARY");
    const proz = new MessageButton()
      .setLabel("%")
      .setCustomId(calculator_proz)
      .setStyle("PRIMARY");
    const backspace = new MessageButton()
      .setLabel("Del")
      .setCustomId(calculator_backspace)
      .setStyle("DANGER");
    const destroy = new MessageButton()
      .setLabel("DC")
      .setCustomId(calc_irrc)
      .setStyle("DANGER");
    const pi = new MessageButton()
      .setLabel("π")
      .setCustomId(calculator_pi)
      .setStyle("PRIMARY");
    const starten = new MessageButton()
      .setLabel("×10")
      .setCustomId(calculator_starten)
      .setStyle("PRIMARY");

    //Setup Disasabled Buttons
    const qc = new MessageButton()
      .setLabel("C")
      .setCustomId(calculator_c)
      .setStyle("DANGER")
      .setDisabled(true);
    const qe1 = new MessageButton()
      .setLabel("(")
      .setCustomId(calculator_e1)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qe2 = new MessageButton()
      .setLabel(")")
      .setCustomId(calculator_e2)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const quppercase = new MessageButton()
      .setLabel("^")
      .setCustomId(calculator_uppercase)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qseven = new MessageButton()
      .setLabel("7️")
      .setCustomId(calculator_7)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qeight = new MessageButton()
      .setLabel("8️")
      .setCustomId(calculator_8)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qnine = new MessageButton()
      .setLabel("9️")
      .setCustomId(calculator_9)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qdevide = new MessageButton()
      .setLabel("÷")
      .setCustomId(calculator_devide)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qfour = new MessageButton()
      .setLabel("4️")
      .setCustomId(calculator_4)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qfive = new MessageButton()
      .setLabel("5️")
      .setCustomId(calculator_5)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qsix = new MessageButton()
      .setLabel("6️")
      .setCustomId(calculator_6)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qstar = new MessageButton()
      .setLabel("×")
      .setCustomId(calculator_star)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qone = new MessageButton()
      .setLabel("1️")
      .setCustomId(calculator_1)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qtwo = new MessageButton()
      .setLabel("2️")
      .setCustomId(calculator_2)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qthree = new MessageButton()
      .setLabel("3️")
      .setCustomId(calculator_3)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qminus = new MessageButton()
      .setLabel("-")
      .setCustomId(calculator_minus)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qzero = new MessageButton()
      .setLabel("0️")
      .setCustomId(calculator_0)
      .setStyle("SECONDARY")
      .setDisabled(true);
    const qdot = new MessageButton()
      .setLabel(",")
      .setCustomId(calculator_dot)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qequal = new MessageButton()
      .setLabel("=")
      .setCustomId(calculator_equal)
      .setStyle("SUCCESS")
      .setDisabled(true);
    const qplus = new MessageButton()
      .setLabel("+")
      .setCustomId(calculator_plus)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qproz = new MessageButton()
      .setLabel("%")
      .setCustomId(calculator_proz)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qbackspace = new MessageButton()
      .setLabel("Del")
      .setCustomId(calculator_backspace)
      .setStyle("DANGER")
      .setDisabled(true);
    const qdestroy = new MessageButton()
      .setLabel("DC")
      .setCustomId(calc_irrc)
      .setStyle("DANGER")
      .setDisabled(true);
    const qpi = new MessageButton()
      .setLabel("π")
      .setCustomId(calculator_pi)
      .setStyle("PRIMARY")
      .setDisabled(true);
    const qstarten = new MessageButton()
      .setLabel("×10")
      .setCustomId(calculator_starten)
      .setStyle("PRIMARY")
      .setDisabled(true);

    //Startmessage
    const filter = (m) => m.user.id == this.user.id;
    this.message.channel
      .send({
        content: stringify,
        components: [{
            type: 1,
            components: [star, starten, seven, four, one]
          },
          {
            type: 1,
            components: [minus, zero, eight, five, two]
          },
          {
            type: 1,
            components: [plus, dot, nine, six, three]
          },
          {
            type: 1,
            components: [devide, equal, c, backspace, destroy]
          },
          {
            type: 1,
            components: [e1, e2, uppercase, pi, proz]
          },
        ],
      })
      .then(async (msg) => {
        async function edit() {
          msg.edit(stringify, {
            components: [{
                type: 1,
                components: [star, starten, seven, four, one]
              },
              {
                type: 1,
                components: [minus, zero, eight, five, two]
              },
              {
                type: 1,
                components: [plus, dot, nine, six, three]
              },
              {
                type: 1,
                components: [devide, equal, c, backspace, destroy]
              },
              {
                type: 1,
                components: [e1, e2, uppercase, pi, proz]
              },
            ],
          });
        }
        async function lock() {
          msg.edit({
            content: stringify,
            components: [{
                type: 1,
                components: [qstar, qstarten, qseven, qfour, qone]
              },
              {
                type: 1,
                components: [qminus, qzero, qeight, qfive, qtwo]
              },
              {
                type: 1,
                components: [qplus, qdot, qnine, qsix, qthree]
              },
              {
                type: 1,
                components: [qdevide, qequal, qc, qbackspace, qdestroy]
              },
              {
                type: 1,
                components: [qe1, qe2, quppercase, qpi, qproz]
              },
            ],
          });
        }

        //Start listener
        const calc = msg.createButtonCollector(filter);

        //If Button presser --> run validation
        calc.on("collect", async (btn) => {
          if (btn.user.id !== this.user.id) return btn.reply({ 
            content: this.notauthor, 
            ephemeral: true
          })
          btn.deferUpdate();

          if (btn.customId === calculator_equal) {
            try {
              str += " = " + require("mathjs").evaluate(math) + "";
              stringify = "```\n" + str + "\n```";
              edit();
              str = "";
              math = "";
              stringify = "```\n" + str + "\n```";
              return;
            } catch (e) {
              str = this.invalid;
              stringify = "```\n" + str + "\n```";
              edit();
              console.log(e);
              str = " ";
              stringify = "```\n" + str + "\n```";
              math = " ";
              return;
            }
          }

          if (btn.customId === calc_irrc) {
            str = this.destroy;
            stringify = "```\n" + str + "\n```";
            edit();
            calc.stop();
            lock();
            return;
          }

          switch (btn.customId) {
            case calculator_0:
              str += "0";
              math += "0";
              break;
            case calculator_1:
              str += "1";
              math += "1";
              break;
            case calculator_2:
              str += "2";
              math += "2";
              break;
            case calculator_3:
              str += "3";
              math += "3";
              break;
            case calculator_4:
              str += "4";
              math += "4";
              break;
            case calculator_5:
              str += "5";
              math += "5";
              break;
            case calculator_6:
              str += "6";
              math += "6";
              break;
            case calculator_7:
              str += "7";
              math += "7";
              break;
            case calculator_8:
              str += "8";
              math += "8";
              break;
            case calculator_9:
              str += "9";
              math += "9";
              break;
            case calculator_plus:
              str += "+";
              math += "+";
              break;
            case calculator_minus:
              str += "-";
              math += "-";
              break;
            case calculator_devide:
              str += "÷";
              math += "/";
              break;
            case calculator_star:
              str += "×";
              math += "*";
              break;
            case calculator_uppercase:
              str += "^";
              math += "^";
              break;
            case calculator_proz:
              str += "%";
              math += "/100";
              break;
            case calculator_dot:
              str += ",";
              math += ".";
              break;
            case calculator_c:
              str = " ";
              math += " ";
              break;
            case calculator_e1:
              str += "(";
              math += "(";
              break;
            case calculator_e2:
              str += ")";
              math += ")";
              break;
            case calculator_pi:
              str += "π";
              math += "pi";
              break;
            case calculator_starten:
              str += "×10";
              math += "*10";
              break;
            case calculator_backspace:
              if (str === " ") break;
              str = str.split("");
              str.pop();
              str = str.join("");

              math = math.split("");
              math.pop();
              math = math.join("");
              break;
          }

          stringify = "```\n" + str + "\n```";
          edit();
        });

        // If time over, deactivate
        await wait(this.deactivatetime);
        this.message.channel.send(this.deactivatemessage);
        msg.delete();
      })
  }
};
