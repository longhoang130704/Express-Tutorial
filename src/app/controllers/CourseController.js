const Course = require('../../models/Course');
const { elementToObject } = require('../../util/Mogoose.js')


class CourseController {
    // [GET] /news
    show(req, res, next) {
       Course.find({ slug: req.params.slug })
       .then(course => {
        res.render('courses/show', {
            course: elementToObject(course)
        })
       })
       .catch(err => next(err));
    }
    showCourse(req, res, next) {
    res.send('Danh sach course')
    }
    // [GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [GET] /course/store
    store(req, res) {
        // res.json(req.body)
        const formData = req.body;
        formData.level = "Default"
        const course = new Course(formData);
        course.save()
           .then(() => res.redirect('/'))
           .catch(err => next(err));
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        // res.json(req.params.id)
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
                course: elementToObject(course)
            })
        )
        .catch(err => next(err));
    }
    // [PUT] /course/:id
    update(req, res, next) {
        Course.findByIdAndUpdate(req.params.id, req.body)
           .then(() => res.redirect('/me/stored/courses'))
           .catch(err => next(err));
    }
    //[DELETE] /course/:id
    delete(req, res, next) {
        Course.delete({_id: req.params.id})
           .then(() => res.redirect('/me/stored/courses'))
           .catch(err => next(err));
    }
    // [PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
        .then(course => res.redirect('/me/trash/courses'))
        .catch(err => next(err));
    }
    //
    forceDelete(req, res, next) {
        res.send('forceDelete')
    }
}

module.exports = new CourseController;

// src/controllers/NewsController.js