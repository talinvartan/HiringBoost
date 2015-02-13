/**
 * @desc This object handles the routes for candidates; Path for candidates: /candidates
 * */

var CandidateModel = require('../models/candidate');

var router = require('express').Router();

/*var talin = new CandidateModel({
 name: 'Talin',
 email: 'talin@gmail.com',
 college: 'UCSC',
 grad: 'CS'
 });
 talin.save(function (err, result) {
 if(err) console.log('There was an error saving ' + talin);
 else console.log(result);
 });*/

// POST /candidates
router.post('/', function (req, res) {
    (new CandidateModel(req.body)).save(function(err, result) {
        // todo: Do not send err information back to the user
        if (err) res.status(500).json(err);
        else res.status(201).json(result);
    });
});

// GET /candidates listing
router.get('/', function (req, res) {
    if (req.headers.accept.indexOf('application/json') !== -1) {
        CandidateModel.find(function (err, result) {
            if (err) res.status(500).json(err);
            else res.status(200).json(result);
        });
    } else {
        res.render('candidates');
    }

});

// GET candidates/id
router.get('/:id', function (req, res) {
    CandidateModel.findById(req.params.id, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

// PUT /candidates/id
router.put('/:id', function(req, res){
    CandidateModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

// DELETE /candidates/id
router.delete('/:id', function(req, res){
    CandidateModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

module.exports = router;