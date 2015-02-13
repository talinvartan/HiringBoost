var mongoose = require('mongoose');

var Candidate = mongoose.model('Candidate', {
    // schema object for the candidate
    name: String,
    email: String,
    college: String,
    grad: String
});

module.exports = Candidate;
