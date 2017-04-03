const express = require('./config/express');
const app = express();
//app.use(express.static('public'))
module.exports = app;
app.listen(3000, () => console.log('Server running on port 3000'));
