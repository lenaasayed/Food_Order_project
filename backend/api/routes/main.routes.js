var express = require("express");
var router = express.Router();
const mainController = require("../controllers/main.controller");

//Post --> /api/provider
router.post("/provider", mainController.create);

//Get --> /api/provider
router.get("/provider", mainController.readAll);

//Get one --> /api/provider/123
router.get("/provider/:id", mainController.readOne);

//Put --> /api/provider/123
router.put("/provider/:id", mainController.update);

//Delete  --> /api/provider
router.delete("/provider", mainController.deleteAll);

//Delete one --> /api/provider/123
router.delete("/provider/:id", mainController.deleteOne);

//No matching api endpoints
router.post("/*", notFound);
router.get("/*", notFound);
router.put("/*", notFound);
router.delete("/*", notFound);

function notFound(req, res) {
  res.status(400);
  res.send("Not Valid Endpoint");
}
module.exports = router;
