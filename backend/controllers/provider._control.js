const provider = require("../models/provider");

module.exports.list = function (req, res) {
  res.render("providerlist", { title: "Service Provider", provider: provider });
};

module.exports.details = function (req, res) {
  let id = req.params.id;
  let single_provider = provider.find(
    (single_provider) => single_provider.id == id
  );
  res.render("providerlistdetails", {
    id: id,
    title: "Service Provider Details",
    company: single_provider.company,
  });
};

module.exports.edit = function (req, res) {
  let id = req.params.id;
  let single_provider = provider.find(
    (single_provider) => single_provider.id == id
  );
  res.render("editpage", {
    id: id,
    title: "Service Provider Edit",
    single_provider: single_provider,
  });
};

module.exports.update = function (req, res) {
  let id = req.params.id;
  console.log("req");
  let single_provider = provider.find(
    (single_provider) => single_provider.id == id
  );
  single_provider.first_name = req.body.firstname;
  single_provider.last_name = req.body.lastname;
  single_provider.email = req.body.email;

  single_provider.position = req.body.position;

  single_provider.company.company_name = req.body.companyname;
  single_provider.company.city = req.body.location;
  single_provider.company.phone = req.body.phone;

  res.render("updatepage", {
    title: "Service Provider Update",
  });
};

module.exports.addPage = function (req, res) {
  res.render("addPage", {
    title: "Service Provider Add",
  });
};

module.exports.add = function (req, res) {
  //  // 0 -> 10
  // Math.floor(Math.random() * 11);
  // // 1 -> 10
  // Math.floor(Math.random() * 10) + 1;
  // // 5 -> 20
  // Math.floor(Math.random() * 16) + 5;
  // // -10 -> (-2)
  // Math.floor(Math.random() * 9) - 10;

  //Create random id 
  let min = 101;
  let max = 401;
  let id = Math.floor(Math.random() * (max - min + 1) + min)
 //create new provider
  let single_provider = {
    id: id,
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email:req.body.email,
    position: req.body.position,

    company: {
      company_name: req.body.companyname,
      city: req.body.location,
      phone: req.body.phone,
    }
  }
  //add the new provider to the original list
  provider.push(single_provider)
  res.render("addbtn", {
    title: "Add",
  });
};

module.exports.delete = function (req, res) {
  let id = req.params.id;
  let single_provider = provider.find(
    (single_provider) => single_provider.id == id
  );
  let company = single_provider.company.company_name;
  let indx = provider.indexOf(single_provider)
  provider.splice(indx,1)
  res.render("deletepage", {
    title: "Service Provider Delete",
    company: company
  });
};
