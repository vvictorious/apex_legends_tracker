const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//load env
dotenv.config({ path: './config.env'});

const app = express();

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});