var express=require('express');
var {detailsModel}=require('../models/dataModel');

var dataRouter=express.Router();

function route(){
    dataRouter.route('/')
    .get((req,res)=>{
        detailsModel.find((err,data)=>{
            if(err){
                res.json({status:"error"});
            }else{
                console.log(data);
                res.json({persons:data,status:"success"});
            }
        })
    });
    return dataRouter;
}


module.exports=route;