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


const members = require('./members');
const logger = require('./middleware/logger');
//Init middleware
app.use(logger);
//Gets all members
app.get('/api/members', (req, res) => {
	res.json(members);
});


//Get single member
app.get('/api/members/:id', (req, res) => {
	// res.send(req.params.id);
	const found = members.some(member => member.id === parseInt(req.params.id));
	if (found) {
		// res.json(members.filter(member => member.id === parseInt((req.params.id)));
	} else {
		res.status(400).json({msg: `message member not found with the id ${req.params.id}`});
	}
})
app.listen(PORT, () => console.log(`server started on port ${PORT}`));