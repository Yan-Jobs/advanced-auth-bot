const languages = [
  { name: "English, US", key: "en-US", flag: "🇺🇸" },
  { name: "Hindi", key: "hi", flag: "🇮🇳" },
  { name: "English, UK", key: "en-GB", flag: "🇬🇧" },
  { name: "Portuguese", key: "pt-BR", flag: "🇵🇹" },
  { name: "Romanian", key: "ro", flag: "🇷🇴" },
  { name: "Turkish", key: "tr", flag: "🇹🇷" },
  { name: "French", key: "fr", flag: "🇫🇷" },
  { name: "Spanish", key: "es-ES", flag: "🇪🇸" },
  { name: "Russian", key: "ru", flag: "🇷🇺" },
  { name: "Ukrainian", key: "uk", flag: "🇺🇦" },
  { name: "German", key: "de", flag: "🇩🇪" },
  { name: "Vietnamese", key: "vi", flag: "🇻🇳" },
  { name: "Finnish", key: "fi", flag: "🇫🇮" },
  { name: "Bulgarian", key: "bg", flag: "🇧🇬" },
  { name: "Polish", key: "pl", flag: "🇵🇱" },
  { name: "Dutch", key: "nl", flag: "🇳🇱" },
  { name: "Greek", key: "el", flag: "🇬🇷" },
  { name: "Hungarian", key: "hu", flag: "🇭🇺" },
  { name: "Lithuanian", key: "lt", flag: "🇱🇹" },
  { name: "Italian", key: "it", flag: "🇮🇹" },
  { name: "Thai", key: "th", flag: "🇹🇭" },
  { name: "Chinese, Taiwan", key: "zh-TW", flag: "🇹🇼" },
  { name: "Croatian", key: "hr", flag: "🇭🇷" },
  { name: "Swedish", key: "sv-SE", flag: "🇸🇪" },
  { name: "Japanese", key: "ja", flag: "🇯🇵" },
  { name: "Danish", key: "da", flag: "🇩🇰" },
  { name: "Czech", key: "cs", flag: "🇨🇿" },
  { name: "Norwegian", key: "no", flag: "🇳🇴" },
  { name: "Chinese, China", key: "zh-CN", flag: "🇨🇳" },
  { name: "Korean", key: "ko", flag: "🇰🇷" },
];

module.exports = {
  name: 'stats',
  category: 'Utility',
  botOwner: true,
  run: (client, message, args, users, botData) => {


    if (users.size == 0) return message.reply('Not ready yet')

    function getCount(str) {
      return users.filter(u => u.flags && u.flags.includes(str)).length
      
    }

    const langMsg = languages.map(l => {
      return {
        flag: l.flag,
        name: l.name,
        count: users.filter(u => u.lang && u.lang === l.key).length,
        key: l.key
      }
    });

    let embed =
    {
      //title: `${client.emoji.arrow} Authentified Users : \`${users.size == 0 ? "Loading..." : users.length.toLocaleString('en-US')}\``,
      //      title: `${client.emoji.arrow} Authentified Users : \`${client.config.ez}${users.size == 0 ? "Loading..." : users.length.toLocaleString('en-US')}\``,
title: ` Authentified Users : \`${users.size == 0 ? "Loading..." : users.length.toLocaleString('en-US')}\``,
      color: client.color.default,
      fields: [],
      description: `** **`,
      thumbnail: {
        url: client.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' })
      }
      
    }

      embed.fields.push({
        name: `**__Badges__**: `,
        value: `** **`,
        inline: false
                        },
  { name: `<YOUR EMOJI CODE> Partner`, // EMOJI CODE EX: <:Partner:1167506319620722849>
   value: `\`\`\`${getCount('PARTENERED_SERVER_OWNER')}\`\`\``,
  inline: true },
  { name: `<<YOUR EMOJI CODE> Certified Moderator`, 
   value: `\`\`\`${getCount('DISCORD_CERTIFIED_MODERATOR')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE> Hypesquad Events`, 
   value: `\`\`\`${getCount('HYPESQUAD_EVENTS')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE> Bug Hunter`, 
   value: `\`\`\`${getCount('BUGHUNTER_LEVEL_2') + getCount('BUGHUNTER_LEVEL_1')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE>  Bravery`, 
   value: `\`\`\`${getCount('HOUSE_BRAVERY')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE> Brilliance`, 
   value: `\`\`\`${getCount('HOUSE_BRILLIANCE')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE> Balance`, 
   value: `\`\`\`${getCount('HOUSE_BALANCE')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE> Early Developer`, 
   value: `\`\`\`${getCount('EARLY_VERIFIED_BOT_DEBELOPER')}\`\`\``,
  inline: true },
  { name: `<YOUR EMOJI CODE> Early Supporter `, 
   value: `\`\`\`${getCount('EARLY_SUPPORTER')}\`\`\``,
        inline: true },
                        {
        name: `**__Locales__**: `,
        value: `** **`,
        inline: false
                        })
    langMsg.sort((a, b) => b.count - a.count).map(l => {
      embed.fields.push({
        name: `${l.flag} ${l.name}`,
        value: `\`\`\`${l.count}\`\`\``,
        inline: true
      })
    })


    message.channel.send({
      embeds: [
        embed
      ]
    })

  }
}