function clientReadyHandler(client) {
    console.log(`Logged In as ${client.user.tag}!`);
};

module.exports = {
    clientReadyHandler,
}