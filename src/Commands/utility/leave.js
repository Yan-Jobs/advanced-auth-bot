﻿module.exports = {
    name: 'leave',
	category: 'Admin',
	ownerOnly: true,
    run: (client, message, args, users) => {

		const id = args[0];
		if(!id) return message.channel.send('Hata');


		const guild = client.guilds.cache.get(id);
		if(!guild) return message.channel.send("Bot is not on this server")
		guild.leave();
		message.channel.send(`**${guild.name}** Successfully Leaved`);


    }
}