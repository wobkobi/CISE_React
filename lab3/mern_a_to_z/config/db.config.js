require('dotenv').config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mernatoz.68tvwev.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = MONGO_URI;
