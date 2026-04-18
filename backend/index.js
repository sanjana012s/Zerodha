require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

const HoldingsModel = require("./model/HoldingsModel");

//MongoDB connection properly
mongoose.connect(url)
.then(() => console.log("Connected to database"))
.catch(err => console.log("DB Error:", err));

// Route with async/await
app.get('/addHoldings', async (req, res) => {
  try {
    let tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
      {
        name: "INFY",
        qty: 1,
        avg: 1350.5,
        price: 1555.45,
        net: "+15.18%",
        day: "-1.60%",
      }
    ];
    await HoldingsModel.insertMany(tempHoldings);

    res.send("Holdings added successfully ");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding holdings");
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});