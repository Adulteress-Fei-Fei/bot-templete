console.log(`Starting Bot...`);

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const { token } = require('./config.json');


//client.on('ready', () => {
//  console.log(`Logged in as ${client.user.tag}!`);
//  client.user.setActivity("Azur Lane / Honkai Impact 3rd ", { type: "STREAMING"})
//  });

const activities = [
      "Azur Lane",
      "Genshin Impact",
      "World of Tanks Blitz",
      "Team Fortress 2",
      "Blue Archive",
      "Left 4 Dead 2",
      "War Thunder",
      "Honkai Impact 3rd",
      "Data Science and Business Intelligence",
      "Pixiv / Gelbooru"
    ];

client.on("ready", () => {
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];
        client.user.setActivity(newActivity, { type: 'WATCHING' });
      }, 5000);
    });

client.on('message', msg => {
  if(msg.author.bot === true) return;
  if (msg.content === 'moaning') {
    msg.reply('Moaning');
  };
  if(msg.content.startsWith("!spy")){
    let sentence = msg.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    msg.channel.send(sentence);
    msg.delete();
  };
  if(msg.content.startsWith("<") && msg.content.endsWith(">")){  
    if(msg.content.startsWith("<:")){
    msg.channel.send(msg.content)
      .then(msg =>{ if(msg.content.startsWith(":") && msg.content.endsWith(":")){ msg.delete() }})
    };
    if(msg.content.startsWith("<@")){
    if (msg.mentions.has(client.user.id)) return;
    msg.channel.send(msg.content)
    };
  };
});

client.on('message', msg => {
  if(msg.author.bot === true) return;
  if (msg.mentions.has(client.user.id) && msg.content.endsWith(">")){
        msg.channel.send("Hi I am SPY's Bot!") 
          msg.react('😎');}
  if((msg.content.includes("<") && msg.content.includes(">")) || (msg.content.startsWith("**") && msg.content.endsWith(">")) ) return;
   if (msg.content.includes('cat') || msg.content.includes('Cat'))  {
        msg.react('🐱');
        msg.react('🐈');
 }  
  if (msg.content.includes('Damn') || msg.content.includes('damn') || msg.content.includes('wtf') || msg.content.includes('Wtf') || msg.content.includes('fuck')|| msg.content.includes('Fuck'))  {
        msg.react('💀');
 }
  if (msg.content.includes('bruh') || msg.content.includes('Bruh') || msg.content.includes('Breh') || msg.content.includes('breh'))  {
        msg.react('🇧');
        msg.react('🇷');
        msg.react('🇺');
        msg.react('🇭');
 }  
     if (msg.content.includes('lol') || msg.content.includes('Lol') || msg.content.includes('Lel') || msg.content.includes('lel') || msg.content.includes('LOL'))  {
        msg.react('😂');
        msg.react('🤣');
 } 
  
});

//client.on("message", message => {
//   if(message.author.bot === true) return;
// });


client.on('message', function(message) {
 if (message.content === 'meow') {
  message.channel.send('woof');
 };
 if (message.content === 'Meow') {
  message.channel.send('Woof');
 };
});

client.on('message', (message) => {
      const { channel } = message
  
      if (channel.type === 'news') {
        message.crosspost()
        console.log('published news message')}
    });



client.login(token);