const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'ssu',
    description: 'Sends a Roblox private server link while pinging a specific role',
    execute(message) {
        if (!message.member.roles.cache.has(config.requiredRoleId)) {
            return message.reply("You do not have permission to use this command.");
        }

        const roleId = '1231546796103434301'; // Replace with the actual role ID you want to ping
        const predefinedMessage = "Here is the private server link:";

        const embed = new EmbedBuilder()
            .setColor('#ff781f')
            .setTitle('Server Startup')
            .setDescription(predefinedMessage)
            .addFields({ name: 'Link', value: 'https://www.roblox.com/share?code=b6b6bdff9440074da5bbd6d905abb468&type=Server' })
            .setImage('https://media.discordapp.net/attachments/1216455778223919234/1261001948170158080/image.png?ex=66915f14&is=66900d94&hm=ee1cd1558f1695e3e4f42dd752c930d807ed6bc652b1342d44d3eba041ea8edf&=&format=webp&quality=lossless&width=787&height=479')
            .setFooter({ text: 'We will NOT be accepting any roblox friend requests.' })
            .setTimestamp();

        message.channel.send({ content: `<@&${roleId}>`, embeds: [embed] });
    }
};
