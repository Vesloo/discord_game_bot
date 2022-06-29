const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require("dotenv").config();

bot.login(process.env.TOKEN);

// bot.on("ready", function () {
//     bot.user.setAvatar("./owl.png")
// })

bot.on("messageCreate", function (msg) {
    if (msg.content === "!ping") {
        msg.reply("pong");
    }
    if (msg.content === "!number") {
        playerOne = Math.floor(Math.random() * 101);
        playerTwo = Math.floor(Math.random() * 101);

        msg.reply("Your number is " + playerOne);
        msg.reply("Opponent number is " + playerTwo);
        if (playerOne === playerTwo) msg.reply("Draw");
        playerOne > playerTwo ? msg.reply("You won") : msg.reply("You lose");
    }
    if (msg.content === "!dice") {
        playerOneFirst = Math.floor(Math.random() * 6);
        playerOneSecond = Math.floor(Math.random() * 6);
        playerTwoFirst = Math.floor(Math.random() * 6);
        playerTwoSecond = Math.floor(Math.random() * 6);
        totalOne = playerOneFirst + playerOneSecond;
        totalTwo = playerTwoFirst + playerTwoSecond;

        msg.reply(
            "Your dices are " + playerOneFirst + " and " + playerOneSecond
        );
        msg.reply(
            "Opponent dices are " + playerTwoFirst + " and " + playerTwoSecond
        );

        if (totalOne === totalTwo) msg.reply("Draw");
        else
            totalOne > totalTwo
                ? msg.reply("<@" + msg.author + "> won")
                : msg.reply("<@" + msg.author + "> lose");
    }
    if (msg.content === "!help") {
        msg.reply(
            "\
            Commands list:\n\
            !ping\n\
            !number\n\
            !dice\n\
            !roulette type '!help roulette' for more informations\
        "
        );
    }
    if (msg.content === "!help roulette") {
        msg.reply(
            "\
            Commands for playing roulette\n\
            !roulette red\n\
            !roulette black\n\
            !roulette\
        "
        );
    }
    // if (msg.content === "!guess")
    // {
    //     number = Math.floor(Math.random() * 101)

    // }
    if (msg.content === "!roulette red") {
        rouletteNb = Math.floor(Math.random() * 36);

        msg.reply("<@" + msg.author + "> your color is red");

        if (rouletteNb % 2 === 0) {
            msg.channel.send("<@" + msg.author + "> won on red");
        } else {
            msg.channel.send("<@" + msg.author + "> lost");
        }
    }
    if (msg.content === "!roulette black") {
        rouletteNb = Math.floor(Math.random() * 36);

        msg.reply("<@" + msg.author + "> your color is black");

        if (rouletteNb % 2 === 1) {
            msg.channel.send("<@" + msg.author + "> won on black");
        } else {
            msg.channel.send("<@" + msg.author + "> lost");
        }
    }
    if (msg.content === "!roulette") {
        playerNb = Math.floor(Math.random() * 36);
        rouletteNb = Math.floor(Math.random() * 36);

        msg.reply("Your number is " + playerNb);
        msg.channel.send(
            "Roulette number is " + rouletteNb + " <@" + msg.author + ">"
        );

        playerNb === rouletteNb
            ? msg.channel.send(
                  "<@" + msg.author + "> won on number " + playerNb
              )
            : msg.channel.send("<@" + msg.author + "> lost");
    }
});
console.log("hello world!");
