const express=require('express');
const router=express.Router();

const homeController=require('../controller/home_controller');
router.route('/')
.get(homeController.getHome)
router.use('/create_task',require('./create_task'));
router.use('/add_runnning',require('./add_runnning'));
router.use('/add_completed',require('./add_completed'));
router.use('/delete_task',require('./delete_task'));
module.exports=router; 