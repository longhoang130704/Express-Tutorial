const Course = require('../../models/Course');
const { arrayToObject } = require('../../util/Mogoose.js')

class MeController {
    // [GET] /me/stored/courses
    store(req, res, next) {
        Course.find({})
        .then(course => res.render('me/stored-course', {
            course: arrayToObject(course)
        }))
        .catch(error => next(error));
        
    }
    // [GET] /me/trash/courses
    show(req, res, next) {
        Course.findDeleted({})
        .then(course => res.render('me/trash-course', {
            course: arrayToObject(course)
        }))
        .catch(error => next(error));
    }
    
}

module.exports = new MeController;

// src/controllers/MeController.js