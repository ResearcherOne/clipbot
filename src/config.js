const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
    throw result.error
}

const TELEGRAM_SECRET_TOKEN = process.env.TELEGRAM_SECRET_TOKEN;
const OWNER_TELEGRAM_ID = process.env.OWNER_TELEGRAM_ID;
const CLIPBOT_PORT = parseInt(process.env.CLIPBOT_PORT);

module.exports = {
    TELEGRAM_SECRET_TOKEN: TELEGRAM_SECRET_TOKEN,
    OWNER_TELEGRAM_ID: OWNER_TELEGRAM_ID,
    CLIPBOT_PORT: CLIPBOT_PORT
}