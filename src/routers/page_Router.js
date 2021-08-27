const router = require('express').Router();
const pageController =require('../controllers/page_controller');
router.get('/',pageController.pageNEW);





module.exports = router;