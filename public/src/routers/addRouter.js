var express=require('express');
var {detailsModel} =require('../models/dataModel');
var addRouter=express.Router();

function route(){


    addRouter.post('/add',(req,res)=>{
        console.log(req.body);
        console.log("************");
        // return res.json(true);
         var person=new detailsModel(req.body);
         person.save((err,result)=>{
             if(err){
                 res.json({status:"error"});
             }
             else{
                 res.json({status:"success"});
             }
         })
    });


    addRouter.get('/get-data', (req, res) => {
        console.log("Get*******************88");

        // res.json({status: true})
        var person=new detailsModel(req.body);
        detailsModel.find( (err, result) => {
            if(err) {
                console.log(err);
            }
            res.json(result)
        })

    })

    return addRouter;
}
module.exports=route;