const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;





/*// database.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const CoupounCode = require("../model/CoupounCode");

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL || "mongodb://localhost:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB connected with server: ${data.connection.host}`);



    


   
    // Create Coupons
    await CoupounCode.create([
      { name: "NEWUSER10", value: 10, minAmount: 50, maxAmount: 200, shopId: shops[0]._id },
      { name: "FESTIVE20", value: 20, minAmount: 100, maxAmount: 500, shopId: shops[0]._id },
      { name: "TECH15", value: 15, minAmount: 80, maxAmount: 300, shopId: shops[0]._id, selectedProduct: "Wireless Headphones" },
      { name: "FASHION25", value: 25, minAmount: 150, maxAmount: 600, shopId: shops[1]._id },
      { name: "WELCOME5", value: 5, minAmount: 20, maxAmount: 100, shopId: shops[1]._id },
    ]);

    console.log("✅ Demo data inserted successfully!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB or seeding data:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;*/