var provider = require("../models/provider.models");
const db_provider = require("../db/db");
const { ObjectId } = require("mongodb");

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
        res.status(201);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

//Get All
//uri: /api/provider
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

//Get one
//uri: /api/provider/123
module.exports.readOne = function (req, res) {
  try {
    let id = (req.params.id);

    db_provider
      .find({ id: id })
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

//Put
//uri: /api/provider/123
module.exports.update = function (req, res) {
  try {
    let id = (req.params.id);
    let single_provider = req.body;

    db_provider
      .findOneAndUpdate({ id: id }, single_provider, { new: true })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          return res.send("List is empty , Can't be updated !! ");
        }
        res.status(200);
        return res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

//Delete
//uri: /api/provider
module.exports.deleteAll = function (req, res) {
  try {
    db_provider
      .deleteMany({})
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404);
          return res.send("List is empty. Can't be deleted !! ");
        }
        res.status(200);
        return res.send("All providers deleted \n " + result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

//Delete one
//uri: /api/provider/123
module.exports.deleteOne = function (req, res) {
  try {
    let id = (req.params.id);
    db_provider
      .findOneAndDelete({ id: id })
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
};
