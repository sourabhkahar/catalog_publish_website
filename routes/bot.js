
const dotenv = require('dotenv');
dotenv.config('./.env');
var express = require('express');
var router = express.Router();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const url = process.env.TELEGRAM_BOT_URL;

const bot = new TelegramBot(token);
bot.setWebHook(`${url}/bot${token}`);

router.post(`/bot${token}`, (req, res) => {
  try {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error processing update:', error);
    res.sendStatus(500);
  }
})

bot.on('message', (msg) => {
  $message = `<b>🔥 New Alert</b>\nHere is a <i>formatted</i> message with <a href="https://example.com">a link</a>.`
  bot.sendMessage(msg.chat.id, $message, { parse_mode: 'HTML' });
})

module.exports = router;