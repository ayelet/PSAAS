const { request } = require("express");
const providerModel = require("../model/providers.model");
const userModel = require("../model/users.model");
const userController = require("./users.controllers");
var multer = require("multer");
const { use } = require("../routes/providers.routes");
var upload = multer();
// Helper functions
const validate = (id) => {
  if (!id || id < 0) return false;
  return true;
};
// 1. Get all providers --
const getProviders = async (res) => {
  try {
    const providers = await providerModel.find({});
    if (!providers) return res.status(404).send("No providers found");
    return res.status(200).send(providers);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// 2. Get a specific user
const getProvider = async (req, res) => {
  try {
    const user_id = req.params.id;
    if (!validate(user_id))
      return res.status(400).send("Bad request, invalid ID");
    console.log("1. getting provider by id ", user_id);
    const provider = await providerModel.findOne({ _id: user_id });
    if (!provider) return res.status(404).send("provider does not exist");
    console.log("2. getting provider  ", user_id, provider);
    return res.status(200).send({ provider: provider });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const getUserProfile = async (req, res) => {
  return res.send(req.user);
};

// 3. add a new user
const addProvider = async (req, res) => {
  const { provider } = req.body;
  console.log(req.body.user, provider);
  // const { providerReq } = req.body;
  // console.log(providerReq.gender);
  const date = Date.now();
  try {
    console.log("header: ", req.header);
    if (req.body.dateAdded) date = req.body.dateAdded;
    console.log("date Added: ", date, req.body);
    // console.log("adress: ", req.body.address);
    // console.log("details: ", req.body.details);
    const provider = new providerModel({
      id: req.body.id,
      description: req.body.description,
      details: req.body.details,
      address: req.body.address,
      ratings: req.body.ratings,
      serviceType: req.body.serviceTypes,
      images: [...req.body.images],
    });
    const newProvider = await provider.save();

    // const token = user.generateAuthToken();
    // return res.status(201).json({ newProvider /*, token*/ });
    return res.status(201).json({ success: true /*, token*/ });
  } catch (err) {
    console.log("error in adding provider: ", err);
    return res.status(400).json({ Error: err });
  }
};

// 4. update an existing user
const updateProvider = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ["first_name", "last_name"];
  const isValidOperation = updates.every((update) =>
    allowedUpdate.includes(update)
  );
  const { id } = req.params;
  if (!validateId(id)) return res.status(400).send("Bad request, invalide ID");
  if (!isValidOperation)
    return res.status(400).send({ error: "Invalid updates!" });
  try {
    const user = await userModel.find({ user_id: id });

    updates.forEach((update) => {
      userModel[update] = req.body[update];
    });
    await user.save();
    if (!user) return res.status(404).send({ error: "could not update user" });

    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err });
  }
};

// 5. upload image to a user profile
const uploadImage = async (req, res) => {
  try {
    // const email1 = "bdastc@xing.com";
    // let provider = await providerModel.find({ "details.email": email1 }).exec();
    const { id } = req.params;
    let provider = await providerModel.findById(id);
    console.log(req.file.originalfilename);
    providerModel.imageFile = req.file.buffer;
    console.log("provider:", typeof provider.constructor, provider);
    await provider.save(function (err, doc) {
      if (err) return console.error(err);
      console.log("Document updated succussfully!");
    });
    return res.status(202).send({ success: "image uploaded" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
};
// // Login User
// const loginUser = async (req, res) => {
//   try {
//     const user = await userModel.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     const token = await user.generateAuthToken();
//     res.send({ user, token });
//   } catch (e) {
//     res.status(400).send();
//   }
// };

// // Log out from one session
// const logoutUser = async (req, res) => {
//   try {
//     console.log("log out user ", req.user);
//     req.user.tokens = req.user.tokens.filter((token) => {
//       return token.token !== req.token;
//     });
//     await req.user.save();
//     res.send();
//   } catch (err) {
//     res.status(500).send();
//   }
// };
// // Logout from all session (delete all tokens)
// const logoutAll = async (req, res) => {
//   try {
//     console.log("log out all session", req.user);
//     req.user.tokens = [];
//     await req.user.save();
//     res.send();
//   } catch (e) {
//     res.status(500).send();
//   }
// };
// Delete a specific user by its id
const deleteProvider = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validateId(id))
      return res.status(400).send("Bad request, invalide ID");
    let user = await userModel.findByIdAndDelete(id);
    console.log("request to delete user ", id, user);
    if (!user) return res.status(404).send("user does not exist");
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// const user = new userModel({
//   name: "room1",
//   category: "suite",
//   isActive: true,
//   details: {
//     description: "this is a very nice room",
//     price: 123,
//     discount: 5,
//     images: ["image1", "image2"],
//     phone: "97243424323",
//   },
// });

module.exports = {
  getProviders,
  getProvider,
  addProvider,
  updateProvider,
  deleteProvider,
  uploadImage,
  // deleteAllProviders,
  // getUserProfile,
  // loginUser,
  // logoutUser,
  // logoutAll,
};
