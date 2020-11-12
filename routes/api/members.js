const express= require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');
//Gets all members
router.get('/', (req, res) => {
	res.json(members);
});


//Get single member
router.get('/:id', (req, res) => {
	// res.send(req.params.id);
	console.log(req.params.id, 'is id');
	const found = members.some(member => member.id === parseInt(req.params.id));
	if (found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id)));
	} else {
		res.status(400).json({msg: `message member not found with the id ${req.params.id}`});
	}
});
//Create member

router.post('/', (req, res) => {
	// res.send(req.body);
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
		status: 'active'
	};
	if (!newMember.name || !newMember.email) {
		return res.status(4000).json({msg: 'please include name and email'})
	}
	members.push(newMember);
	res.json(members);
});
module.exports = router;