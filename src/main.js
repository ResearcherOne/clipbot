const Telegraf = require('telegraf')
const config = require("./config.js")

const TELEGRAM_SECRET_TOKEN = config.TELEGRAM_SECRET_TOKEN;
const OWNER_TELEGRAM_ID = config.OWNER_TELEGRAM_ID;
const CLIPBOT_PORT = config.CLIPBOT_PORT;

var CLIPBOARD = "";

//accept clipboard from Telegram.
const bot = new Telegraf(TELEGRAM_SECRET_TOKEN);
bot.start(function(ctx){
    const userID = ctx.message.from.id;
    if(userID == OWNER_TELEGRAM_ID) {
        ctx.reply("Welcome Master!");
    } else {
        ctx.reply("Your ID is "+userID+" you are not owner of me thus you can not use me");
    }
})

bot.on('message', function(ctx){
    const userID = ctx.message.from.id;
    const userMessage = ctx.message.text;
    if(userID == OWNER_TELEGRAM_ID) {
        CLIPBOARD = userMessage;
        ctx.reply("Clipboard is set.");
    } else {
        ctx.reply("Your ID is "+userID+" you are not owner of me thus you can not use me");
    }
})
bot.launch()

// Serve CLIPBOARD over the Web.
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(CLIPBOARD))

app.listen(CLIPBOT_PORT, () => console.log(`Example app listening on port ${CLIPBOT_PORT}!`))