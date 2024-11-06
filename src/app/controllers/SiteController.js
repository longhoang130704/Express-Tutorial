const Course = require('../../models/Course');
const { arrayToObject } = require('../../util/Mogoose.js')

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find()
        .then((data) => {
            res.render('home', { 
                data: arrayToObject(data)
             }); 
        })
        .catch(error => next(error));
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;

// src/controllers/NewsController.js