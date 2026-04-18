const {model}= require("mongoose");
const HoldingsSchema= require("../schema/HoldingsSchema");

//create model
const HoldingsModel= model("Holdings", HoldingsSchema);

module.exports= HoldingsModel;