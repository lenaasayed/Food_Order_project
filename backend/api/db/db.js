// const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const {Provider} = require('../models/provider')

// //connection URI to MongoDB
// const uri = "mongodb://127.0.0.1:27017/demodb";
const uri = "mongodb://localhost:27017/demodb";

 mongoose.set('strictQuery', false) 
 mongoose.set('strictQuery', true) 
//  mongoose.set('useCreateIndex', true) 



// //Make db connection (asynchronously)
mongoose
  .connect(uri)
  .then((result) => {
    console.log("Successful connnection ! ");
  })
  .catch((err) => console.log(err));

module.exports =  Provider


// // connection URI to MongoDB
// const uri = "mongodb://127.0.0.1:27017/demodb";
// // localhost:3000/api/provider
// //Make db connection 
//     const client = new MongoClient(uri);

//     client.connect()
//     .then((result) => {
//       console.log("Successful connnection ! ");
//     })
//     .catch((err) => console.log(err));
    
//     //  listDatabases(client);
  
//     module.exports =  client

// // async function listDatabases(client) {
// //     databasesList = await client.db().admin().listDatabases();

// //     console.log("Databases:");
// //     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// // };




// // module.exports =  client


// // const { MongoClient } = require('mongodb');
// // const uri = "mongodb://127.0.0.1:27017/provider_db";

// //     const client = new MongoClient(uri);

// //     module.exports =  client.connect()
// //     .then((result) => {
// //       console.log("Successful connnection ! ");
// //     })
// //     .catch((err) => console.log(err));

// // const {Provider} = require('../models/provider')










// // const { MongoClient } = require('mongodb');
// // const {Provider} = require('../models/provider.models')

// // async function main(){
// //    const uri = "mongodb://127.0.0.1:27017/provider_db";
// //   const client = new MongoClient(uri);
// //   try {
// //       await client.connect()
// //       .then((result) => {
// //         console.log("Successful connnection ! ");
// //       })
// //   } catch (e) {
// //       console.error(e);
// //   } finally {
// //       await client.close();
// //   }
// // }
// // main().catch(console.error);
