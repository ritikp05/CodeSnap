const mongoose = require('mongoose');
async function connectDatabase(){
  try{
    await mongoose.connect("mongodb+srv://ritik05:ritikparas10@cluster0.fpctfru.mongodb.net/snippet")
console.log("db connection established")
  } 
catch (err) {
  console.log("connection unsuccessful");
}} 

module.exports = connectDatabase;