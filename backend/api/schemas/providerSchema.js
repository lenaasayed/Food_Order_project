const mongoose = require('mongoose');

//define schema
const Schema = mongoose.Schema;

//create company schema
const shema_company = new Schema( {
    "company_name": {type:String,required:true},
    "city": {type:String,required:true},
    "phone": {type:String,required:true}
  })

//create provider schema (top-level)
const shema_provider = new Schema({
    "id": {type:Number,required:true,unique:true},
    "first_name": {type:String,required:true},
    "last_name": {type:String,required:true},
    "email": {type:String,required:true,unique:true},
    "position": String,
    "company":shema_company
});

module.exports = {shema_provider,shema_company}