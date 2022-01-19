const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('./db');
const routesConfig = require('./routesConfig');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(routesConfig);

app.listen('3000', async () => {
  await db.connect();
  console.log('API is running in 3000!');
});
