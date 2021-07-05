const express = require('express');

const app = express();

app.listeners(3000, () => {
    console.log(`API server now on port 3000!`);
});