// const roomModel = require("../db/model");
const { ObjectID } = require("bson");
const userModel = require("../model/users.model");

// Helper functions
const validate = (id) => {
  if (!id || id < 0) return false;
  return true;
};
// 1. Get all users
const getUsers = async (req, res) => {
  try {
    let users;
    console.log(__filename, "Get users", userModel);
    // const users = await userModel.find({});
    userModel.find({}, null, { sort: { last_name: 1 } }, function (err, users) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(users);
      if (!users) return res.status(404).send("No users found");
      return res.status(200).send(users);
      process.exit(0);
    });
    // const usersSorted = await users.sort({ name: -1 });
    // console.log("Users found:", users);
  } catch (err) {
    console.log("Error in getUsers", err);
    return res.status(500).send({ error: err });
  }
};

// 2. Get a specific user
const getUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    console.log("*** user id: ", user_id, typeof user_id);
    // if (!validate(user_id))
    // return res.status(400).send("Bad request, invalid ID");
    console.log("1. getting user by id ", user_id, typeof user_id);
    const user = await userModel.findOne({ _id: user_id });
    if (!user) return res.status(404).send("user does not exist");
    console.log("2. getting user  ", user_id, user);
    return res.status(200).send({ user: user });
    // if (!user) return res.status(404).send("No user found");
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const getUserProfile = async (req, res) => {
  return res.send(req.user);
};

// 3. add a new user
const addUser = async (req, res) => {
  console.log(req.body);
  const date = Date.now();
  if (req.body.dateAdded) date = req.body.dateAdded;
  const user = new userModel({
    _id: new ObjectID(),
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    email: req.body.email,
    dateAdded: req.body.dateAdded,
  });
  try {
    await user.save();
    const token = await user.generateAuthToken();
    console.log("token created in backend: ", token);
    return res.status(201).json({ user, token });
  } catch (err) {
    console.log("error in adding user: ", err);
    return res.status(400).json({ Error: err });
  }
};

// 4. update an existing user
const updateUser = async (req, res) => {
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
    if (!user) return res.status(404).send({ error: "couldn't update user" });

    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    console.log("User login");
    const user = await userModel.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.set({
      "Access-Control-Allow-Origin": "*",
    });
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
};

// Register user (for token only, do not add to database)
const registerUser = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Log out from one session
const logoutUser = async (req, res) => {
  try {
    console.log("log out user ", req.user);
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
};
// Logout from all session (delete all tokens)
const logoutAll = async (req, res) => {
  try {
    console.log("log out all session", req.user);
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
};
// Delete a specific user by its id
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("***UserController:DeleteUser ", req.params.id);
    console.log("id: ", id);
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      console.log("Object id is a match!!!");
    } else {
      console.log("Error: Not an ObjectID!!!!");
    }
    // const id = mongoose.Types.ObjectId(req.params.id);
    let user = await userModel.findByIdAndDelete(id);
    console.log("user deleted: ", user);
    if (!user) return res.status(404).send("user does not exist");
    return res.status(202).send(user);
  } catch (err) {
    console.log("UserController: Delete- Error thrown");
    return res.status(500).send(err);
  }
};

// 2. Delete all users
const deleteAllUsers = async (req, res) => {};

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
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  logoutAll,
};
