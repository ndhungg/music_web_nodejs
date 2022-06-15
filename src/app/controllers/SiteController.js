const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
       Course.find({}, function(err, courses) {
        if (!err){
            res.json(courses);
        }
        else {
            res.status(404).json({error: err.message});
        }
            
       });
    //    res.render('home')
    }   
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    
}

module.exports = new SiteController();