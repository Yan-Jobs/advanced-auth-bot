const { reply } = require('../../Structures/Functions');
module.exports = {
	name: 'stop',
	category: 'Utility',
	botOwner: true,
	blockWhileRefresh: false,
	description: "Stop a joinall",
	run: async (client, message, args) => {
		 
		const guildID = args[0] || message.guild.id;
		if(!client.joins.get(guildID)) return reply(client, message, 'error', 'No ongoing sending found');
		const guild = client.guilds.cache.get(guildID);

		message.reply({ embeds: [
			{
				color: client.color.default,
				description: `**${guild.name}** Sending stopped`
			}
		] })

		client.joins.delete(guildID)


	}
}