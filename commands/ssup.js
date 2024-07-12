const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'ssup',
    description: 'Sends out a message as a poll that has the reaction ✅, while pinging a specific role',
    execute(message) {
        if (!message.member.roles.cache.has(config.requiredRoleId)) {
            return message.reply("You do not have permission to use this command.");
        }

        const roleId = '1231546796103434301'; // Replace with the actual role ID you want to ping
        const predefinedPollMessage = "SSU";

        const embed = new EmbedBuilder()
            .setColor('#ff781f')
            .setTitle('Server Startup?')
            .setDescription(predefinedPollMessage)
            .addFields({ name: 'Requirement', value: '5+ is Required.' })
            .setImage('https://media.discordapp.net/attachments/1216455778223919234/1261001947381498017/image.png?ex=66915f14&is=66900d94&hm=82286d28a9f439718f3516a06650081cc01fd0c401501805b50e815c825b3158&=&format=webp&quality=lossless&width=853&height=479')
            .setFooter({ text: 'We will NOT be accepting any roblox friend requests.' })
            .setTimestamp();

        message.channel.send({ content: `<@&${roleId}>`, embeds: [embed] }).then(sentMessage => {
            sentMessage.react('✅');
        });
    }
};
