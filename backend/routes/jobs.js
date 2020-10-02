const router = require('express').Router();
let job = require('../models/job.model');

router.route('/').get((req, res) => {
    job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/byid/:id').get((req, res) => {
    job.find({'Name':req.params.id})
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/update').post((req, res) => {
    const Name = req.body.Name;
    const Id = req.body.Id;
    var myquery = { "Name": Name };
    var newvalues = { $inc: {"Now": 1} };
    job.updateOne(myquery,newvalues)
    .then(() => res.json('newJobs added'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Max = req.body.Max;
    const Transcript = req.body.Transcript;
    const Date = req.body.Date;
    const Location = req.body.Address;
    const Now = req.body.Now;
    const newJobs = new job({
        Name,
        Max,
        Transcript,
        Date,
        Location,
        Now,
    });

    newJobs.save()
    .then(() => res.json('newJobs added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/order/:id').get((req, res) => {
//     analyzeRoom.findById(req.params.id)
//     .then(analyzeRooms => res.json(analyzeRooms))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/:room').get((req, res) => {
//     analyzeRoom.find({'room':req.params.room})
//     .then(analyzeRooms => res.json(analyzeRooms))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/:id').delete((req, res) => {
//     analyzeRoom.findByIdAndDelete(req.params.id)
//     .then(() => res.json('analyzeRoom deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     analyzeRoom.findById(req.params.id)
//     .then(analyzeRooms => {
//         console.log(analyzeRooms);
//         console.log(req.body);
//         analyzeRooms.need = req.body.need;
//         console.log(analyzeRooms)
//         analyzeRooms.save()
//         .then(() => res.json('analyzeRoom updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;