const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(cors());

// Déclaration des routes et découverte automatique des routes disponibles avec leur bon controller
require('./routes')(app, require('./controllers')(app));

app.listen(config.port, () => {
        console.info(`Server is running on ${config.serverUrl}`);
        console.info('Press CTRL-C to stop\n');
});