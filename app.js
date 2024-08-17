require('dotenv').config();  // Load environment variables first

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use the Port variable properly

app.get('/', (req, res) => {
    res.send('Hello all!');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});


