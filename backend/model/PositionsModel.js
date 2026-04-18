const {model}= require("mongoose");
const{PositionsSchema}= require("../schema/PositionsSchema");
const PositionsModel= model("Positions",PositionsSchema);
module.exports= PositionsModel;