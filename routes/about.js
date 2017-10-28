let express = require('express');
let router = express.Router();
let json_data = require('./data/data.json');

console.log('the data is : '+ json_data);
console.log("the timestamp is : "+json_data.timestamp);
router.get('/',function(request,response,next){
    response.render('about',{date:new Date(),title:"About",data:json_data});
});

module.exports=router;