const {model}= require("mongoose");
const{OrderSchema}= require("../schema/OrdersSchema");
const OrdersModel= model("Orders",OrderSchema);
module.exports= OrdersModel;