const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
router.route('/').get(homeController.moveToDone);
module.exports=router;