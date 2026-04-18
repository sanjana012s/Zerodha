const{Schema,model}=require('mongoose')
//create schema
const PositionsSchema= new Schema({
  product:String,
  name:String,
  qty:Number,
  avg:Number,
  price:Number,
  net:Number,
  day:Number,
  isLoss:Boolean,
});
module.exports= PositionsSchema;