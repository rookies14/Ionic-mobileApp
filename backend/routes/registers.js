const router = require('express').Router();
let register = require('../models/register.model');

router.route('/').get((req, res) => {
    register.find()
    .then(registers => res.json(registers))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/id/:studentid').get((req, res) => {
    register.find({'StudentId':req.params.studentid})
    .then(registers => res.json(registers))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const Activity = req.body.Name;
    const StudentId = req.body.Id;
    const newRegister = new register({
        Activity,
        StudentId,
    });
    newRegister.save()
    .then(() => res.json('newRegister added'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;