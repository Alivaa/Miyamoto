//PRIMARY
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

//SECRET
const token = config.token;
const prefix = config.prefix;

//OWNER USER
const owner = "";

//DATABASE ADDED
const databaseadded = "";

//PATREON USER
const userpatreon = "";

//DISCORD LOGIN
client.login(token);

//BOT SET STATUS
client.on("ready", () => {
  console.log("Login  : " + client.user.tag);
  console.log("UserID : " + client.user.id);
  console.log("");
  console.log("Bot Status Active");
  function statustext() {
    let statusbot = [
      prefix + "help | With friends",
      prefix + "help | Broken laptop",
      prefix + "help | Need friend",
      prefix + "help | Nothing more",
      prefix + "help | Paradox",
      prefix + "help | Future",
      prefix + "help | Walk away",
      prefix + "help | Sleep",
      prefix + "help | Last resort",
      prefix + "help | Sad Boy",
      prefix + "help | Sad Gurl",
      prefix + "help | Sad Girl",
      prefix + "help | Rise up",
      prefix + "help | Patreon : https://www.patreon.com/discordanime"
    ];

    let statusrandom = Math.floor(Math.random() * statusbot.length);
    client.user.setActivity(statusbot[statusrandom]);
  }
  setInterval(statustext, 200000);
});

//MESSAGE BOT
client.on("message", async msg => {

  //COMMANDS : HELP
  if (
    msg.content.toLowerCase() === prefix + "help"
  ) {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setAuthor("Miyamoto Help\n", client.user.avatarURL)
      .addField(
        "Commands List\n",
        "**Special Commands**\n" +
          "`" +
          prefix +
          "setup cute` : Autopost cute anime in the channel.\n" +
          "`" +
          prefix +
          "setup lewd` : Autopost lewd anime in the channel [Patreon].\n" +
          "`" +
          prefix +
          "setup meme` : Autopost memes and shitposting in the channel [Patreon].\n" +
          "`" +
          prefix +
          "setup kpop` : Autopost Korean Idol in the channel [Patreon].\n" +
          "`" +
          prefix +
          "setup jpop` : Autopost Japan Idol in the channel [Patreon].\n\n" +
          "**Info**\n" +
          "`" +
          prefix +
          "ping` : Checks the bot's ping to the Discord server.\n" +
          "`" +
          prefix +
          "info` : Shows info about a user.\n" +
          "`" +
          prefix +
          "avatar` : Get a user's avatar.\n\n" +
          "**Information**\n" +
          "`" +
          prefix +
          "invite` : Get a link to invite Miyamoto to your server.\n" +
          "`" +
          prefix +
          "support` : Get a link to Miyamoto server.\n" +
          "`" +
          prefix +
          "patreon` : Get a link patreon.\n" +
          "`" +
          prefix +
          "help`: Shows all commands.\n\n" +
          "**Utility**\n" +
          "`thanks` : Special thanks for helping this bot.\n"
      );
    await msg.channel.send(embed);
    msg.channel.send("**Join Discord Server :**\nhttps://discord.gg/zGmNyk7");

    //COMMANDS : PING
  } else if (msg.content.toLocaleLowerCase() === prefix + "ping") {
    const ping = await msg.channel.send(`:hourglass: Poooong`);
    ping.edit(
      `Pong, You alive dude.\n**Time taken : ${Math.floor(
        ping.createdAt - msg.createdAt
      )} ms** **|** **Websocket : ${Math.round(client.ping)} ms**`
    );

    //COMMANDS : INFO USER
  } else if (msg.content.toLocaleLowerCase() === prefix + "info") {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setAuthor("Info User : " + msg.author.tag, msg.author.avatarURL)
      .addField("User ID", msg.author.id, true)
      .addField("Channel ID", msg.channel.id, true)
      .addField("Server ID", msg.guild.id, true)
      .addField("Last Message", msg.author.lastMessage, true)
      .addField("Channel Name", msg.channel.name, true)
      .addField("Server Name", msg.guild.name, true);
    msg.channel.send(embed);

    //COMMANDS : AVATAR
  } else if (msg.content.toLocaleLowerCase() === prefix + "avatar") {
    const embed = new Discord.RichEmbed();
    embed.setColor("#e047ff").setImage(msg.author.avatarURL);
    msg.channel.send(embed);

    //COMMANDS : THANKS
  } else if (msg.content.toLocaleLowerCase() === prefix + "thanks") {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setAuthor("Special Thanks", client.user.avatarURL)
      .addField(
        "Support Thanks",
        "`1.` hanahaneull\n" +
          "`2.` Discord JS\n" +
          "`3.` synzen\n" +
          "`4.` JSIndo\n" +
          "`5.` All Patreon Donations"
      )
      .addField("Patreon Big Thanks", "`1.` Liva");
    msg.channel.send(embed);

    //COMMANDS : INVITE
  } else if (msg.content.toLocaleLowerCase() === prefix + "invite") {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setDescription(
        "Click here to invite me"
      );
    await msg.channel.send(embed);

    //COMMANDS : SUPPORT SERVER
  } else if (msg.content.toLocaleLowerCase() === prefix + "support") {
    msg.channel.send(
      "**My support server is here : **\n**https://discord.gg/zGmNyk7 **"
    );

    //COMMANDS : PATREON
  } else if (msg.content.toLocaleLowerCase() === prefix + "patreon") {
    msg.channel.send(
      "<:patreon:638651812496408576>  **Patreon Link :**\n**<https://www.patreon.com/discordanime> **"
    );

    //COMANDS : SETUP CUTE
  } else if (
    msg.member.hasPermission("MANAGE_GUILD") &&
    msg.content.toLocaleLowerCase() === prefix + "setup cute"
     msg.channel.send(
      "<a:done:638659856080830465> **Autopost Cute Anime**\nAutopost Cute Anime success created in " +
        "<#" +
        msg.channel.id +
        ">"
    );
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setTitle("Database Added")
      .addField("User ID", msg.author.id, true)
      .addField("Channel ID", msg.channel.id, true)
      .addField("Server ID", msg.guild.id, true)
      .addField("Username", msg.author.tag, true)
      .addField("Channel Name", msg.channel.name, true)
      .addField("Server Name", msg.guild.name, true)
      .addField("Owner Name", msg.guild.owner, true)
      .addField("Owner ID", msg.guild.ownerID, true)
      .addField("All Member", msg.guild.memberCount, true);
    databaseadded.send(embed);

    //COMMANDS : NOT HAVE PERMISSION
  } else if (
    !msg.member.hasPermission("MANAGE_GUILD") &&
    msg.content.toLocaleLowerCase() === prefix + "setup cute"
  ) {
    msg.channel.send(
      "<a:wrong:638659862498377728> **Autopost Cute Anime**\nYou must have `MANAGE SERVER` permission !"
    );

    //COMANDS : SETUP LEWD
  } else if (msg.content.toLocaleLowerCase() === prefix + "setup lewd") {
    msg.channel.send(
      "<a:wrong:638659862498377728> **Autopost Lewd Anime**\nYou must join patreon to access lewd anime! Type `" +
        prefix +
        "patreon`"
    );

    //COMANDS : SETUP MEMES
  } else if (
    msg.content.toLocaleLowerCase() === prefix + "setup meme" ||
    msg.content.toLocaleLowerCase() === prefix + "setup memes" ||
    msg.content.toLocaleLowerCase() === prefix + "setup shitposting" ||
    msg.content.toLocaleLowerCase() === prefix + "setup shitpost"
  ) {
    msg.channel.send(
      "<a:wrong:638659862498377728> **Autopost Memes and Shitposting**\nYou must join patreon to access memes and shitposting! Type `" +
        prefix +
        "patreon`"
    );
    //COMANDS : SETUP KPOP
  } else if (
    msg.content.toLocaleLowerCase() === prefix + "setup kpop" ||
    msg.content.toLocaleLowerCase() === prefix + "setup korean" ||
    msg.content.toLocaleLowerCase() === prefix + "setup korea"
  ) {
    msg.channel.send(
      "<a:wrong:638659862498377728> **Autopost Korean Idol**\nYou must join patreon to access korean idol! Type `" +
        prefix +
        "patreon`"
    );
    //COMANDS : SETUP JPOP
  } else if (
    msg.content.toLocaleLowerCase() === prefix + "setup jpop" ||
    msg.content.toLocaleLowerCase() === prefix + "setup japan"
  ) {
    msg.channel.send(
      "<a:wrong:638659862498377728> **Autopost Japan Idol**\nYou must join patreon to access japan idol! Type `" +
        prefix +
        "patreon`"
    );

  } 
});
