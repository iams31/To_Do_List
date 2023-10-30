const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
router.route('/').post(homeController.createTask);
module.exports=router;
