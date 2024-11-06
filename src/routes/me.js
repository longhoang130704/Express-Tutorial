const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.store);
router.get('/trash/courses', meController.show);

// export router
module.exports = router;
