const express = require('express');
const server = express();
require('dotenv').config();
server.all(`/`, (req, res) => {
    res.send(`Result: [OK].`);
});

function keepAlive() {
    server.listen(3000 || process.env.PORT , () => {
        console.log(`Server is now ready! | ` + Date.now());
    });
}

module.exports = keepAlive;