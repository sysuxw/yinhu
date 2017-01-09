// Production config
module.exports = {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 80,
    logType: 'combined'
};
