const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/home', siteController.home);
router.get('/', siteController.home);

// export router
module.exports = router;
