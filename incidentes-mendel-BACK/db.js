const db = require('mongoose');
const model = require('./model');

db.Promise = global.Promise;

async function conectar(url) {
    await db.connect(url, {
    useNewUrlParser: true,
});
}

module.exports = conectar;