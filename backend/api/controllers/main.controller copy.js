var provider = require("../models/provider.models");
const db_provider = require("../db/db");
const {ObjectId}=require('mongodb');

//Util functions
//check if list is empty
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}
//Handle error
function handleError(res, error) {
  res.status(200);
  return res.send("Something went wrong . \n" + error);
}

//CRUD create read update delete
//Post
//uri: /api/provider
module.exports.create = function (req, res) {
  try {
  var single_provider = req.body;

    db_provider
      .create(single_provider)
      .then((result) => {
        // if (isEmptyList(result)) {
        //   res.status(404);
        //   return res.send("List is empty !! ");
        // }
        res.status(201);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }

//   try{

// db_provider.create(){
//   var single_provider = req.body;
// }

//   // if (isEmptyList(provider)) {
//   //   provider = [];
//   // }
//   // var id = req.body.id;
//   // if (existsId(id)) {
//   //   res.status(400);
//   //   res.send(" Duplicated id not allowed !! ");
//   //   id = getId();
//   // }
//   // single_provider.id = id;
//   // provider.push(single_provider);

//   res.status(200);
//   res.send(single_provider);
// } catch (error) {
//   handleError(res, error);
// }

};


//Get All
//uri: /api/provider
// module.exports.readAll = function (req, res) {
//   if (isEmptyList(provider)) {
//     res.status(404);
//     res.send("List is empty !! ");
//   }
//   res.status(200);
//   res.send(provider);
// };
// function handleError(res, error) {
//   res.status(200);
//   res.send("Something went wrong . \n" + error);
// }
function handleError(res, error) {
  res.status(200);
  return res.send("Something went wrong . \n" + error);
}

module.exports.readAll = function (req, res) {
  try {
    db_provider
      .find()
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          return res.send("List is empty !! ");
        }
        res.status(200);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

// module.exports.readAll = function (req, res) {
//   //   if (isEmptyList(provider)) {
//   //   res.status(404);
//   //   res.send("List is empty !! ");
//   // }
//   // res.status(200);
//   // res.send(db_provider.db("demodb").collection("demo").find({}));

//   db_provider.db("demodb").collection("demo").find((err, res) => {
//     // Note that this error doesn't mean nothing was found,
//     // it means the database had an error while searching, hence the 500 status
//     if (err) return res.status(500).send(err)
//     // send the list of all people
//     return res.status(200).send(people);
// });

// .then((result) => {
//   if (isEmptyList(result)) {
//     res.status(404);
//     res.send("List is empty !! ");
//   }
//   res.status(200);
//   res.send(result);
// })
// .catch((error) => handleError(res, error));

// };

//Get one
//uri: /api/provider/123
module.exports.readOne = function (req, res) {
  try {
    let id =ObjectId(req.params.id);

    db_provider
      .find({'_id':id})
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          return res.send("List is empty !! ");
        }
        res.status(200);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
  // if (isEmptyList(provider)) {
  //   res.status(404);
  //   res.send("List is empty !! ");
  // }
  // let id = req.params.id;
  // let single_provider = provider.find(
  //   (single_provider) => single_provider.id == id
  // );
  // res.status(200);
  // res.send(single_provider);
};

//Put
//uri: /api/provider/123
module.exports.update = function (req, res) {
  try {
    let id =ObjectId(req.params.id);
    let single_provider = req.body;

    db_provider
      .findOneAndUpdate({'_id':id},single_provider,{new:true})
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          return res.send("List is empty !! ");
        }
        res.status(200);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }

  // if (isEmptyList(provider)) {
  //   res.status(404);
  //   res.send("List is empty , Can't be updated !! ");
  // }

  // let id = req.params.id;
  // let single_provider = req.body;
  // // single_provider.first_name = req.body.first_name;
  // // single_provider.last_name = req.body.last_name;
  // // single_provider.position = req.body.position;
  // // single_provider.company.company_name = req.body.company.company_name;
  // // single_provider.company.city = req.body.company.city;
  // // single_provider.company.phone = req.body.company.phone;
  // res.status(200);
  // res.send(single_provider);
};

//Delete
//uri: /api/provider
module.exports.deleteAll = function (req, res) {
  try {
    // let id = ObjectId(req.params.id);
    // let single_provider = req.body;
    db_provider
      .deleteMany({})
      .then((result) => {
        if (result.deletedCount===0) {
          res.status(404);
          return res.send("List is empty. Can't be deleted !! ");
        }
        res.status(200);
        return res.send("All providers deleted \n "+result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }


  // if (isEmptyList(provider)) {
  //   res.status(404);
  //   res.send("List is empty , Can't be deleted !! ");
  // }

  // provider = [];
  // res.status(200);
  // res.send("All providers deleted");

};

//Delete one
//uri: /api/provider/123
module.exports.deleteOne = function (req, res) {
  try {
    let id = ObjectId(req.params.id);
    // let single_provider = req.body;
    db_provider
      .findOneAndDelete({ _id: id })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          return res.send("List is empty. Nothing to delete!! ");
        }
        res.status(200);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }


  // if (isEmptyList(provider)) {
  //   res.status(404);
  //   res.send("List is empty , Can't be deleted !! ");
  // }

  // let id = req.params.id;
  // let single_provider = provider.find(
  //   (single_provider) => single_provider.id == id
  // );
  // let indx = provider.indexOf(single_provider);
  // provider.splice(indx, 1);
  // res.status(200);
  // res.send(single_provider);
};