const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});