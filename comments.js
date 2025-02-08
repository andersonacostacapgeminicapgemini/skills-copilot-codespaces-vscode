//create web server with express
const express = require('express');
const app = express();
const PORT = 4001;

//import the comments module
const comments = require('./comments');

//serve comments module at /comments
app.use('/comments', comments);

//start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});