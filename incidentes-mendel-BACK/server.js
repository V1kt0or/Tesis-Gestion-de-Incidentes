const express = require('express');
const router = require('./network/routes')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

router(app);


app.use('/app', express.static('public'));

app.listen(3000);
console.log('Ejecutandooo');