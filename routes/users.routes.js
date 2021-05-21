const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");
const auth = require("../middleware/auth.middleware");

router

  // @route GET api/users
  //@desc Get all users
  //@access public
  .get(
    "/",
    //   /*auth, */ x(req, res) => {
    // auth,
    (req, res) => {
      console.log("GET request to fetch all users");
      usersController.getUsers(req, res);
    }
  )
  .get("/:id", (req, res) => {
    console.log("Get user by id", req.params.id);
    usersController.getUser(req, res);
  })
  .get("users/me", auth, (req, res) => {
    usersController.getUserProfile(req, res);
  })
  // @route POST api/users
  //@desc Create a new user
  //@access public
  .post("/", (req, res) => {
    console.log("POST: Add user", req.body);
    usersController.addUser(req, res);
  })
  .post("/login", (req, res) => {
    console.log("User Login");
    usersController.loginUser(req, res);
  })
  .post("/logout", auth, (req, res) => {
    console.log("User logout");
    usersController.logoutUser(req, res);
  })
  .post("/logoutAll", auth, (req, res) => {
    console.log("logout all sessions");
    usersController.logoutAll(req, res);
  })
  .put("users/:id", (req, res) => {
    console.log("Update existing user", req.params.id);
    usersController.updateUser(req, res);
  })
  // @route DELETE api/users/:id
  //@desc Delete an existing user
  //@access public
  .delete("/:id", (req, res) => {
    console.log("Delete user ", req.params.id);
    usersController.deleteUser(req, res);
    //TODO: delete user from providers and consumers
  })
  .delete("/deleteAll", (req, res) => {
    console.log("Delete all users request");
    usersController.deleteAllUsers(req, res);
    //TODO: delete user from providers and consumers
  });

module.exports = router;
