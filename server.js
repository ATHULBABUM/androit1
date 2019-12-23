const express=require('express');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
// const cors=require('cors');

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(__dirname+'/dist/myApp'));

const dataRouter=require('./public/src/routers/dataRouter');
const addRouter=require('./public/src/routers/addRouter')();

app.use('/home',dataRouter);
app.use('/add-data',addRouter);
// app.use('/',addRouter);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/myApp/index.html'));
});


mongoose.connect("mongodb://localhost:27017/dataDb");
app.listen(process.env.PORT||3000);