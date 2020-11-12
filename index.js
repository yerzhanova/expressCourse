const express = require('express');
const app = express();
const PORT = 3000; // todo change to config file
const path = require('path');

// app.get('/', (req, res) => {
// 	// res.send('<h1>Hello</h1>');
// 	// res.send('<input>Hello</input>');
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const logger = require('./middleware/logger');
//Init middleware
app.use(logger);
//Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));