const parse = require('parse-ms');

module.exports = {
	name: 'info',
	category: 'Utility',
	botOwner: true,
	run: (client, message, args, users, botData) => {

		const timeout = 604800000;
		const time = parse(timeout - (Date.now() - parseInt(botData.last_refresh)));
		message.channel.send({ embeds: [
			{
				color: client.color.default,
        //				description: `**${client.emoji.arrow} Nombre d'utilisateurs : \`${client.config.ez}${users.size == 0 ? "En cours de chargement..." : users.length.toLocaleString('en-US')}\`\n\n${client.emoji.arrow} Lien d'authentification : [link](${client.config.authlink})\n${client.emoji.arrow} Lien du bot : [link](${client.config.botlink})\n\n${client.emoji.arrow} Join en cours :**`,
				//description: `**${client.emoji.arrow} Nombre d'utilisateurs : \`${users.size == 0 ? "En cours de chargement..." : users.length.toLocaleString('en-US')}\`\n\n${client.emoji.arrow} Lien d'authentification : [link](${client.config.authlink})\n${client.emoji.arrow} Lien du bot : [link](${client.config.botlink})\n\n${client.emoji.arrow} Join en cours :**`,
        description: `**${client.emoji.arrow} Number of Users : \`${users.size == 0 ? "Loading..." : users.length.toLocaleString('en-US')}\`\n\n${client.emoji.arrow} Account Verification Link : [link](${client.config.authlink})\n${client.emoji.arrow} Add Bot : [link](${client.config.botlink})\n\n${client.emoji.arrow}  Joins :**`,
				fields: [client.joins.map(m => {
					return {
						name: `${client.guilds.cache.get(m.guildID).name}`,
						value: `${client.emoji.author} Author : <@${m.author}>\n${client.emoji.member} Members : \`${m.members}\`\n${client.emoji.date} Date : <t:${Math.round(m.at / 1000)}:R>\n${client.emoji.progress} Progression : \`${m.progress}/${users.length}\``
					}
				})],
				thumbnail: {
					url: client.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' })
				},
				footer: {
					text: `Prochain refresh dans ${time.days}j, ${time.hours}h, ${time.minutes}m`
				},
        
			}
		]})

	}
}