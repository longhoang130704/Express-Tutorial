const newRouter = require('./news')
const meRouter = require('./me')
const siteRouter = require('./site')
const courseRouter = require('./course')
function router(app) {
    app.use('/course', courseRouter)
    app.use('/news', newRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}

//export function router
module.exports = router;

