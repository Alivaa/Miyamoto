//PRIMARY
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

//SECRET(CONFIG BOT)
const token = config.token;
const prefix = config.prefix;

//DISCORD LOGIN
client.login(token);

//BOT SET STATUS
client.on("ready", () => {
  console.log(`Login: ${client.user.tag}\nID: ${client.user.id}`);
  function statustext() {
    let statusbot = [
      `${prefix}help | With friends`,
      `${prefix}help | Broken laptop`,
      `${prefix}help | Need friend`,
      `${prefix}help | Nothing more`,
      `${prefix}help | Paradox`,
      `${prefix}help | Future`,
      `${prefix}help | Walk away`,
      `${prefix}help | Sleep`,
      `${prefix}help | Last resort`,
      `${prefix}help | Sad Boy`,
      `${prefix}help | Sad Gurl`,
      `${prefix}help | Sad Girl`,
      `${prefix}help | Rise up`,
      `${prefix}help | Patreon : https://www.patreon.com/discordanime`
    ];

    let statusrandom = Math.floor(Math.random() * statusbot.length);
    client.user.setActivity(statusbot[statusrandom]);
  }
  setInterval(statustext, 200000);
});

//MESSAGE BOT
client.on("message", async msg => {

  //COMMANDS : HELP
  if (msg.content.toLowerCase() === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setAuthor("Miyamoto Help", client.user.avatarURL)
      .addField(`Commands List\n\n**Special Commands**\n${prefix}setup cute : Autopost cute anime in the channel.\n${prefix}setup lewd : Autopost lewd anime in the channel [Patreon].\n${prefix}setup meme : Autopost memes and shitposting in the channel [Patreon].\n${prefix}setup kpop : Autopost Korean Idol in the channel [Patreon].\n${prefix}setup jpop : Autopost Japan Idol in the channel [Patreon].\n\n**Info**\n${prefix}ping : Checks the bot's ping to the Discord server.\n${prefix}info : Shows info about a user.\n${prefix}avatar : Get a user's avatar.\n\n**Information**\n${prefix}invite : Get a link to invite Miyamoto to your server.\n${prefix}support : Get a link to Miyamoto server.\n${prefix}patreon : Get a link patreon.\n${prefix}help: Shows all commands.\n\n**Utility**\n${prefix}thanks : Special thanks for helping this bot.\n\n\n__**Support**__: [Here](https://discord.gg/zGmNyk7)`);
    await msg.channel.send(embed);

    //COMMANDS : PING
  } else if (msg.content.toLowerCase() === `ping`) {
    await msg.channel.send(`:hourglass: Poooong`).then(e => e.edit(`Pong, You alive dude.\n**Time taken : ${Math.floor(ping.createdAt - msg.createdAt)} ms** **|** **Websocket : ${Math.round(client.ping)} ms**`));

    //COMMANDS : INFO USER
  } else if (msg.content.toLowerCase() === "info") {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setAuthor("Info User: msg.author.tag, msg.author.avatarURL")
      .addField(`User ID: ${msg.author.id} | Last Message: ${msg.author.lastMessage||"Nothing..."}\nChannel ID: ${msg.channel.id}\nServer ID: ${msg.guild.id}\nChannel Name: ${msg.channel.name}\nServer Name: ${msg.guild.name}`);
      msg.channel.send(embed);

    //COMMANDS : AVATAR
  } else if (msg.content.toLowerCase() === "avatar") {
    const embed = new Discord.RichEmbed();
    embed.setColor("#e047ff").setImage(msg.author.avatarURL).addField(`If you can't see the avatar`, `[Click here](${msg.author.avatarURL})`);
    msg.channel.send(embed);

    //COMMANDS : THANKS
  } else if (msg.content.toLowerCase() === "thanks") {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setAuthor("Special Thanks", client.user.avatarURL)
      .addField("Support Thanks","`1.` hanahaneull\n`2.` Ruri");
    msg.channel.send(embed);

    //COMMANDS : INVITE
  } else if (msg.content.toLowerCase() === "invite") {
    const embed = new Discord.RichEmbed()
      .setColor("#e047ff")
      .setDescription(`[Click here to invite me](https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=12659727)`);
    await msg.channel.send(embed);

    //COMMANDS : SUPPORT SERVER
  } else if (msg.content.toLowerCase() === "support") {
    msg.channel.send("**My support server**: https://discord.gg/zGmNyk7");

    //COMMANDS : PATREON
  } else if (msg.content.toLowerCase() === "patreon") {
    msg.channel.send("<:patreon:638651812496408576>  **Patreon Link :**\nhttps://www.patreon.com/discordanime");

    //COMANDS : SETUP CUTE
  } else if (msg.content.toLowerCase() === "setup cute"){
    if(!msg.member.hasPermission("MANAGE_GUILD")) return msg.reply("<a:wrong:638659862498377728> **Autopost Cute Anime**\nYou must have `MANAGE_SERVER` permission!");
    msg.channel.send(`<a:done:638659856080830465> **Autopost Cute Anime**\nAutopost Cute Anime success created in <#${msg.channel.id}>`);

    //COMMANDS : NOT HAVE PERMISSION
  } else if (msg.content.toLowerCase() === "setup lewd") {
    msg.channel.send(`<a:wrong:638659862498377728> **Autopost Lewd Anime**\nYou must join patreon to access lewd anime! Type ${prefix}patreon`);

    //COMANDS : SETUP MEMES
  } else if (msg.content.toLowerCase() === "setup meme" || msg.content.toLowerCase() === "setup memes" || msg.content.toLowerCase() === "setup shitposting" || msg.content.toLowerCase() === "setup shitpost") {
    msg.channel.send(`<a:wrong:638659862498377728> **Autopost Memes and Shitposting**\nYou must join patreon to access memes and shitposting! Type ${prefix}patreon`);
    //COMANDS : SETUP KPOP
  } else if (msg.content.toLowerCase() === "setup kpop" || msg.content.toLowerCase() === "setup korean" || msg.content.toLowerCase() === "setup korea") {
    msg.channel.send(`<a:wrong:638659862498377728> **Autopost Korean Idol**\nYou must join patreon to access korean idol! Type ${prefix}patreon`);
    
    //COMANDS : SETUP JPOP
  } else if (msg.content.toLowerCase() === "setup jpop" || msg.content.toLowerCase() === "setup japan") {
    msg.channel.send(`<a:wrong:638659862498377728> **Autopost Japan Idol**\nYou must join patreon to access japan idol! Type ${prefix}patreon`);
  } 
});
