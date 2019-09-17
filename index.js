const Discord = require('discord.js');
const config = require('./config.json');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');


client.on('ready', () => {
    console.log(`=======================\nBot Loaded: Baby Ella\nServers in: ${client.guilds.size}\n=======================`)
});

////////////////////////////////////////////////////////////////
// Status                                                    //
//////////////////////////////////////////////////////////////


const presence_list = [
    "with BabyOri 💕",
    "with BabyAnika 💕",
    "with Discord 💕",
    "on My phone 💕",
    "Fighting BabyOri 😡",
    "Survival on Periodic 💕",
    "on periodic.play.ai",
    "Taylor Swift on Loop...",
    "Minecraft 💕",
    "configuring perms",
    "annoying Peri",
    "on periodic.play.ai",
    "on fallenuniverse.net",
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        client.user.setActivity(presence_list[index]);
    }, 20000);
});


////////////////////////////////////////////////////////////////
// Random Say                                                //
//////////////////////////////////////////////////////////////


const message_list = [
    "I don't know you....",
    "Are you a man or a woman?",
    "Sorry, Baby Ella cannot answer the call right now, Why? Because im trying to sleep! <:pan_rage:591672938130964523>",
    "What?",
    "How many people does it take to make a singular earth?",
    "Don't hit me! :sob:",
    "Shut up and let me drink my hot chocolate <:anniecoffee:591672906174431278>",
    "<:thonking:591672945534042115>",
    ":runner:"
    ];

client.on('message', message => {
        const index = Math.floor(Math.random() * (message_list.length - 1) + 1);
    if (message.content === '<@591279661959348234>') {
        message.channel.send(message_list[index]);
    }
});

////////////////////////////////////////////////////////////////
// Mention Commands                                          //
//////////////////////////////////////////////////////////////


client.on('message', message => {
     if (message.content.startsWith('Ella friends?')) {
        message.channel.send('Sure! ');
    } else if (message.content.startsWith('Ella how are you?')) {
        message.reply('I am good!');
    } else if (message.content.startsWith('Ella who do you love')) {
        message.reply('My Family! <:pan_love:591672929792557056>');
    } else if (message.content.startsWith('Ella what is the meaning of')) {
        message.reply('How the fuck am I supposed to know?');
    } else if (message.content.includes('are we good Ella?')) {
        message.reply('Yeah, I just felt a bit sick :nauseated_face:');
    } else if (message.content.includes('#discord')) {
              message.channel.send('https://discord.io/periodic')
    } else if (message.content.includes('#gitlab')) {
              message.channel.send('https://gitlab.com/spacella')
    } else if(message.author.id === '568919303580024862') {
        if (message.content.startsWith('<:pan_love:591672929792557056>'))
        message.channel.send('<:pan_love:591672929792557056>')
    } else if (message.content.startsWith('Ella wheel')) {
        message.channel.send(':cartwheel:');
    } else if (message.content.startsWith('Ella love me')) {
        message.reply(`I love you :heart: <:pan_love:591672929792557056>`);
    } else if (message.content.startsWith('Ella hug')) {
        message.channel.send('<:briheart:591672912629465120>')
      }
});

////////////////////////////////////////////////////////////////
// Advert                                                    //
//////////////////////////////////////////////////////////////


client.on('message', message => {
    if (message.content === 'EllaAdvert') {
        const embed = new RichEmbed()
        .setTitle('Baby Ella Bot')
        .setAuthor('Periodic Network - MC Server - 1.8-1.14')
        .setDescription('__What is Periodic Network?__ \n**Periodic Network is a brand new minecraft server aiming to give everyone the best minecraft server experience. We want to make sure __everyone__ has fun!**')
        .addBlankField(true)
        .addField("**We currently have Survival in late beta aswell as Skyblock in the works and getting released very soon so keep an eye out for any of our server updates!**", "[Store](http://periodicnetwork.craftingstore.net/)")
        .addBlankField(true)
        .setImage("https://cdn.discordapp.com/attachments/588176018288803850/591660268090818580/peri_banner.png")
        .addField("Join our Minecraft Server!",
        ">> periodic.play.ai <<")
      .addField("Want to invite your friends to this server?", "[Discord Invite](https://discord.io/periodic)", true)
      .addField("Check for our server updates on our twitter!", "[Twitter](https://twitter.com/mc_periodic)", true)
      .setColor(0xF08080)

    message.channel.send({embed});
    }
});

////////////////////////////////////////////////////////////////
// Favorite Color                                            //
//////////////////////////////////////////////////////////////



client.on('message', message => {
    if (message.content.startsWith(`${prefix} Favorite Color`)) {
        const embed = new RichEmbed()
        .setAuthor('Baby Rio\'s Favorite Color :)')
        .setDescription('Light Coral (Red)\nHex Code: #F08080')
        .setColor(0xF08080)

        message.channel.send({embed});
    }
});

////////////////////////////////////////////////////////////////
// Suggestions, Bug Reports & Server Updates                 //
//////////////////////////////////////////////////////////////


client.on('message', message => {
    if (message.content.startsWith(`!su`)) {// 👍 👎
        const embed = new RichEmbed()
        .setAuthor('New Suggestion')
        .setTitle('Upvote | Downvote')
        .setColor(0x008080)
        .setDescription('Suggest Features to our server with:\n ``!su <suggestion>``')
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addBlankField(true)
        .addField('**Suggestion:**',
        `${message.author.lastMessage}`)
        .addField('Suggestion by:',
        `${message.author.tag}`)

        message.channel.send({embed})
        message.delete()
      setTimeout(function() {
        message.channel.send('Vote if you think this suggestion should be added');
      }, 1000);
    } else if (message.content.startsWith('Vote if you think this suggestion should be added')) {
        message.react('👍')
      setTimeout(function() {
        message.react('👎')
      }, 1000);

    } else if (message.content.startsWith(`${prefix} Survival`)) {
        const embed = new RichEmbed()
        .setAuthor('- New Survival Updates -')
        .setTitle('+ Added | - Removed | / Working on')
        .setColor(0x008080)
        .setDescription('**Description**')

        message.channel.send({embed});
        console.log()
    } else if (message.content.startsWith(`!br`)) {
        const embed = new RichEmbed()
        .setAuthor('New Bug Report')
        .setTitle('BUG REPORT INCOMING')
        .setColor(0xF08080)
        .setDescription('New BUG REPORT - \n ``!br <bug>``')
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addBlankField(true)
        .addField(`**Bug Report**`,
        `${message.author.lastMessage}`)
        .addField(`*Bug Report By*:`,
         `${message.author.tag}`)

        message.channel.send({embed});
        message.delete()
        console.log()

    }
});


client.on('message', message => {
    if (message.content.startsWith(`!r`)) {// 👍 👎
        const embed = new RichEmbed()
        .setAuthor('New Player Report')
        .setColor(0x008080)
        .setDescription('Report players on our server with:\n ``!r <server> <yourign> <victimign> <description> <proof if possible, like a link to a video>``')
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addBlankField(true)
        .addField('**Player Report:**',
        `${message.author.lastMessage}`)
        .addField('Report by:',
        `${message.author.tag}`)

        message.channel.send({embed})
        message.delete()
    }
  });


//Temporary thing
//client.on('message', message => {
//   if (message.content.startsWith(`SuggestFormat`)) {
//    const embed = new RichEmbed()
//    .setAuthor('-=[Suggest Features Information]=-')
//    .setTitle('Suggest Features')
//    .setDescription('How to make a new Suggestion:\n \nType **!su <suggestion>** to make a suggestion, These will be put to poll in the channel for the server to vote.\n \nSpamming this feature will result in privilage to make suggestions revoked\nDo __NOT__ use this channel for anything other than Suggestions, Only type the command in here. Discuss the suggestion in<#546847417782370304>\n \n__Only type Suggestions in <#588159435109826590>__')
//    .setImage('https://cdn.discordapp.com/attachments/588176018288803850/591660268090818580/peri_banner.png')
//    .setURL('https://gitlab.com/Spacella/')

//    message.channel.send({embed});
//   }
//}); //Temporary thing
//client.on('message', message => {
//   if (message.content.startsWith(`BugFormat`)) {
//   const embed = new RichEmbed()
//    .setAuthor('-=[Bug Report Information]=-')
//    .setTitle('Bug Report')
//    .setDescription('How to make a Bug Report:\n \nType **!br <server> <client version> <bug report>** to make a bug report, This will be put in the channel for the developers to handle.')
//    .setImage('https://cdn.discordapp.com/attachments/588176018288803850/591660268090818580/peri_banner.png')
//    .setURL('https://gitlab.com/Spacella/')
//    message.channel.send({embed});
//   }
//});//Temporary thing

//client.on('message', message => {
//   if (message.content.startsWith(`ReportFormat`)) {
//   const embed = new RichEmbed()
//    .setAuthor('-=[Player Report Information]=-')
//    .setTitle('Report a Player')
//    .setDescription('How to make a Player Report:\n \nType **!r <server> <yourign> <victimign> <description> <proof if possible, like a link to a video>** to make a player report, This will be put in the channel for the staff team to handle.')
//    .setImage('https://cdn.discordapp.com/attachments/588176018288803850/591660268090818580/peri_banner.png')
//    .setURL('https://gitlab.com/Spacella/')
//    message.channel.send({embed});
//   }
//});


////////////////////////////////////////////////////////////////
// Announcement                                              //
//////////////////////////////////////////////////////////////


client.on('message', message => {
    if(message.author.id !== "568919303580024862" && message.author.id !== "565299565260046368") return;
    if(message.channel.type === "dm") {
    let msg = message.content
    if(msg) {
        let embed = new RichEmbed()
            .setTitle(`Announcement by ${message.author.username}`)
            .setAuthor('Baby Ella Bot')
            .setDescription(msg)
            .setColor(0xF08080)

       let sChannel = message.client.channels.get("588154735090204693")
       sChannel.send('@everyone')
       sChannel.send(embed)
       console.log(`An announcement has been made by ${message.author.tag}\n ${msg}`)
        } else {
            return;
        }
    }
});


////////////////////////////////////////////////////////////////
// Ping                                                      //
//////////////////////////////////////////////////////////////

client.on('message', async message => {
      if (message.content.startsWith(`${prefix} ping`)) {
        let msg = await message.channel.send('Getting ping..');
        msg.edit(new Date().getTime() - message.createdTimestamp + " ms");
    }
});



////////////////////////////////////////////////////////////////
// Say                                                       //
//////////////////////////////////////////////////////////////

client.on('message', message => {
      if(message.author.id !== "568919303580024862" && message.author.id !== "565299565260046368") return;
      if (message.content.startsWith(`${prefix} say`)) {
        const embed = new RichEmbed()
        .setTitle(`${message.author.username} has something to say!`)
        .setColor(0xF08080)
        .setDescription(`${message.author.LastMessage}`)
        .setThumbnail(`${message.author.displayAvatarURL}`)

        message.channel.send({embed});
        setTimeout(function() {
        message.delete()
        }, 1000);
    }
});



client.login(config.token)
