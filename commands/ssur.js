module.exports = {
    name: 'ssur',
    description: 'Pings a specific role without any additional message',
    execute(message) {
        const roleId = '1231546796103434301'; // Replace with the actual role ID you want to ping

        message.channel.send({ content: `<@&${roleId}>` });
    }
};
