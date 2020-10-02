const router = require('express').Router();
let student = require('../models/student.model');

router.route('/').get((req, res) => {
    student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/id/:studentid').get((req, res) => {
    student.find({'StudentID':req.params.studentid})
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;