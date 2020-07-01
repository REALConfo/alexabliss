const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk0NDY2NzA2ODY0ODY1Mjgw.XoMCvw.PMe_NA7gUtodKBIHZ9GyvTzWFAY';

const PREFIX = '!';


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break;
        case 'wikia':
            message.reply('https://unrealmat.fandom.com/es/wiki/Wiki_Unrealmat')
            break;
         case 'embed':
         const embed = new Discord.MessageEmbed()
         .setTitle("Extreme Rules 2020", "https://unrealmat.fandom.com/es/wiki/Extreme_Rules_2020")
         .setDescription("Extreme Rules 2020 será un evento producido por el roster de [UWT](https://unrealmat.fandom.com/es/wiki/UWT) el 20 de junio de 2020 en el Spectrum Center en Charlotte, North Carolina.```\n¡No te lo pierdas!```")
         .setColor('#ff0000')
         .setFooter("UWT Network", "https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
         .setThumbnail("https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
         .setImage("https://vignette.wikia.nocookie.net/unrealmat/images/a/a3/ER2020.png/revision/latest?cb=20200525143851&path-prefix=es")
         .setAuthor("Unreal Wrestling Triviales", "https://unrealmat.fandom.com/es/wiki/Wiki_Unrealmat", "https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
         .addField("Información", "UWT se enorgullece de presentar Extreme Rules 2020. El PPV presentará una serie de luchas extremas donde nuestors competidores se arriesgarán para defender títulos, status u honor", false)
         .addField("Horario", "(5:00 CST - Ciudad de México, Lima, Bogotá, Quito),  (00:00 - Madrid), (7:00 - Buenos Aires, Chile, Montevideo)", false)
         .addField("Tema oficial", "Into the Fire de Asking Alexandria", false)
         message.channel.send(embed);
break; 

case 'show1':
    const show1 = new Discord.MessageEmbed()
    .setTitle("UWT RAW", "https://unrealmat.fandom.com/es/wiki/Royal_Rumble_2020")
    .setDescription("UWT RAW es un programa de televisión semanal del roster de Unreal Wrestling Triviales [(UWT)](https://unrealmat.fandom.com/es/wiki/UWT) que actualmente se transmite por medio de USA Network todos los sábados a las 5CST. ```\nEn Directo todos los sábados```")
    .setColor('#FF001F')
    .setFooter("UWT Network", "https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
    .setImage("https://cdn.discordapp.com/attachments/693526944129613894/695007704371953754/uwtrawlogo.png")
    .setAuthor("Unreal Wrestling Triviales", "https://unrealmat.fandom.com/es/wiki/Wiki_Unrealmat", "https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
    .addField("Información", "El nombre del show también hace referencia a la marca RAW, en donde los miembros de un determinado roster son asignados a participar y trabajar en este programa. ", false)
    .addField("Horario", "(5:00 CST - Ciudad de México, Lima, Bogotá, Quito),  (00:00 - Madrid), (7:00 - Buenos Aires, Chile, Montevideo)", false)
    .addField("Tema oficial", "Disaster Highway de Smash Into Pieces", false)
    message.channel.send(show1);
    break;

    case 'show2':
    const show2 = new Discord.MessageEmbed()
    .setTitle("UWT SmackDown", "https://unrealmat.fandom.com/es/wiki/Royal_Rumble_2020")
    .setDescription("UWT SmackDown es un programa de televisión semanal del roster de Unreal Wrestling Triviales [(UWT)](https://unrealmat.fandom.com/es/wiki/UWT) que actualmente se transmite por medio de FOX todos los miércoles a las 5CST. ```\nEn Directo todos los miércoles```")
    .setColor('#0572b8')
    .setFooter("UWT Network", "https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
    .setImage("https://cdn.discordapp.com/attachments/693526944129613894/695009857115390082/uwtsdlogo.png")
    .setAuthor("Unreal Wrestling Triviales", "https://unrealmat.fandom.com/es/wiki/Wiki_Unrealmat", "https://cdn.discordapp.com/attachments/692181864537915394/694458011808301148/image0.png")
    .addField("Información", "El nombre del show también hace referencia a la marca SmackDown, en donde los miembros de un determinado roster son asignados a participar y trabajar en este programa. ", false)
    .addField("Horario", "(5:00 CST - Ciudad de México, Lima, Bogotá, Quito),  (00:00 - Madrid), (7:00 - Buenos Aires, Chile, Montevideo)", false)
    .addField("Tema oficial", "Devour de Shinedown", false)
    message.channel.send(show2);
    break;

case 'banner':
    const banner = new Discord.MessageEmbed()
     .setColor('#F5A623')
     .setImage("https://cdn.discordapp.com/attachments/693526944129613894/695011352397479956/shows.png")
     message.channel.send(banner);
     break; 


        case 'personajes':
        const personajes = new Discord.MessageEmbed()
        .setDescription("<@293244912424452097> – *Chairman of the Board & Chief Executive Officer (CEO)*")
        .setThumbnail("https://cdn.discordapp.com/attachments/692181864537915394/694974506795794492/paul-levesque-v1.jpg")
         .setColor('#F5A623')
         .addField("Información","El Presidente de la Junta y Director Ejecutivo de UWT, Inc. (UWT), es el promotor que ha convertido a UWT en el fenómeno global que es hoy en día. Como pionero en el negocio de la sindicación televisiva, una reconocida personalidad televisiva en todo el mundo, un visionario promotor y un vendedor intrépido, continúa dando a conocer su presencia como líder dentro de las industrias de transmisión y entretenimiento.")
         message.channel.send(personajes);
         break; 

         case 'seisseiscinco':
            const seisseiscinco = new Discord.MessageEmbed()
            .setDescription("<@507619393128103937> – *Executive Vice President, Talent, Live Events & Creative*")
            .setThumbnail("https://cdn.discordapp.com/attachments/692181864537915394/694998758383026216/yonsesina.png")
             .setColor('#F5A623')
             .addField("Información","665 es el Vicepresidente Ejecutivo de Talento, Eventos en Vivo y Creativo de UWT. En este cargo, supervisa los departamentos de Relaciones de Talento, Desarrollo de Talento y Eventos en Vivo de la Compañía. Además, 665 desempeña un papel integral en el proceso creativo de la Compañía, ayudando a dar forma a la dirección creativa y las historias de la programación de UWT")
             message.channel.send(seisseiscinco);
             break; 

             case 'cero':
                const cero = new Discord.MessageEmbed()
                .setDescription("<@690809048085561405> – *Chief Operating Officer (COO) & Television Production*")
                .setThumbnail("https://media.discordapp.net/attachments/692181864537915394/694978740362674307/kane.png")
                 .setColor('#F5A623')
                 .addField("Información","DarkZero es el Chief Operating Officer de UWT. En este cargo, supervisa cada una de las operaciones cotidianas, como finanzas, talento, desarrollo y continuidad de las historias y la producción de los eventos de la Compañía. Además, DarkZero es el pionero de la tecnología que se encuentra actualmente ya que el implementó UWT Network y continúa innovando para llegar a cada uno de los visitantes del mundo.")
                 message.channel.send(cero);
                 break; 

        case 'jorge':
         const jorge = new Discord.MessageEmbed()
            .setDescription("<@487818360856379402> – *Director of Talent Development and Head of Global Recruiting*")
            .setThumbnail("https://media.discordapp.net/attachments/692181864537915394/695008261598085130/estilososo.png")
            .setColor('#F5A623')
            .addField("Información","Jorge es el Director de Desarrollo de Talento y Jefe de Reclutamiento global. Este cargo se ha fijado en él debido a su experiencia en dirigir en otros triviales y su desempeño de liderazgo del personal en cada uno de ellos. Su trabajo se enfoca en tener directo contacto con el personal de UWT y encontrar nuevos talentos que cumplan con el nivel estándar de excelencia de la compañía")
        message.channel.send(jorge);
        break; 
    
        case 'sergia':
         const sergia = new Discord.MessageEmbed()
            .setDescription("<@595022168149196831> – *General Manager de RAW y SmackDown*")
            .setThumbnail("https://cdn.discordapp.com/attachments/692181864537915394/694981478748258374/bryan.png")
            .setColor('#F5A623')
            .addField("Información","Sergiox es el Gerente General de RAW y SmackDown. Se encarga de hacer decisiones en cuanto al manejo de los programas y actúa en la mesa de creativos para establecer la dirección de cada una de las marcas. El gerente general actúa como booker público, organizando luchas para el show de cada marca")
        message.channel.send(sergia);
        break; 

         case 'texto':
            const texto = new Discord.MessageEmbed()
             .setDescription("Familiarízate con nuestro staff, son los encargados de manejar **Unreal Wrestling Triviales** y su servidor aquí en Discord. Cada uno de ellos tienen diferentes puestos ejecutivos. Puedes consultar con ellos cualquier duda sobre el trivial.")
             .setColor('#F5A623')
             message.channel.send(texto);
             break; 
        }

})



bot.on('message', msg=>{
    if(msg.content === "hola"){
        msg.reply('Hola, amigo.');
    }
})

bot.on('message', msg=>{
    if(msg.content === "confy"){
        msg.reply('¿A ella?, la amo.');
    }
})


bot.on('message', msg=>{
    if(msg.content === "coño"){
        msg.reply('Me encuentro perpleja que otra vez interrumpen mi sagrado show');
    }
})

bot.login(token);