const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
var methodOverride = require('method-override')
const path = require('path')
// import routes
const router = require('./routes');
const db = require('./config/db');
// Connect DB
db.connect();
// Default
const app = express()
const port = 3000
// Middle ware
app.use(express.urlencoded({ extended: true }));
//Static 
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', handlebars.engine(
  {
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b
    }
  }  
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Method override
app.use(methodOverride('_method'))
// Create routers
//Route
router(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


