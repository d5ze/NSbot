module.exports = {
    name: 'gb',
    description: 'Globally bans a user from 4 different servers',
    execute(message, args) {
        const userId = args[0];
        const guildIds = ['1164175448499048501', '1233150504834695261', '1234537711168393319', '1231568692916260884'];

        guildIds.forEach(id => {
            const guild = message.client.guilds.cache.get(id);
            if (guild) {
                guild.members.ban(userId).then(() => {
                    message.channel.send(`User ${userId} has been banned from ${guild.name}`);
                }).catch(error => {
                    console.error(error);
                    message.channel.send(`Failed to ban user ${userId} from ${guild.name}`);
                });
            }
        });
    }
};
