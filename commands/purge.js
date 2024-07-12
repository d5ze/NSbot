module.exports = {
    name: 'purge',
    description: 'Delete a specified number of messages.',
    async execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.reply('You do not have permission to use this command.');
        }

        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('Please provide a valid number of messages to delete.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('You need to input a number between 1 and 99.');
        }

        await message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to delete messages in this channel!');
        });
    },
};
