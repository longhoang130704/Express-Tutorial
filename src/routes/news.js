const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');


router.get('/', newsController.index);


// export router
module.exports = router;
