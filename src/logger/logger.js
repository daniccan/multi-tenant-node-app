const winston = require('winston');
const { splat, combine, timestamp, printf, colorize, label, level} = winston.format;
const fs = require('fs');
const path = require('path');

const myFormat = printf(({ timestamp, level, label, message, meta }) => {
    return `${timestamp} ${level} [${label}] ${message} ${meta? JSON.stringify(meta) : ''}`;
});

const logDir = 'log';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
const filename = path.join(logDir, 'server.log');

const logger = winston.createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        label({ label: path.basename(module.parent.filename) }),
        splat(),
        colorize(),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename })
    ]
});

module.exports = logger;
