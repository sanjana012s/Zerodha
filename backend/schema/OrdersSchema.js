const{Schema}=require('mongoose');
//create schema
const OrdersSchema= new Schema({
  name:String,
  qty:Number,
  price:Number,
  mode:String,
});

module.exports= OrdersSchema;