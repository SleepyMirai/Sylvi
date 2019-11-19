const Discord = require('discord.js');

const client = new Discord.Client();



const token = 'NjQ2MTcyOTM1MjU3ODQ5ODc2.XdNZVA.50dqCJMfQP5fthcUV9VPIxcj4Pg';



const PREFIX = '!';



client.on('ready', () =>{

    console.log('this bot is online!');

})



client.on('message', msg=>{

    if(msg.content === 'Hello Sylvi')

        msg.reply('Hello uwu');

})



client.on('message' , message=>{



    let args = message.content.substring(PREFIX.lenght).split(" ");



    switch(args[0]){

        case 'embed':

            const embed = new Discord.RichEmbed()

            .setTitle('User Information')

            .addField('Player Name', message.author.username)

            .addField('User photo')

            .addField('Current Server', message.guild.name)

            .setColor(0x33ffdf)

            message.channel.sendEmbed(embed);

        break;

        case 'ping!':

            message.channel.sendMessage('pong!')

            break;

        case 'website':

            message.channel.sendMessage('https://closers.enmasse.com/')

            break;

        case 'info':

        if(args[1] === 'Crew'){

            message.channel.sendMessage('Heretics');

        }else{

            message.channel.sendMessage('nope wrong')

        break;

        }

        case 'clear':

        if(!args[1]) return message.reply('Please can you try again')

        message.channel.bulkDelete(args[1]);

        break;

    

   }



})



client.login(token);
