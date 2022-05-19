const express = require('express');
const router = express.Router();
const userController = require("../controller/ctrl.user");
const multer = require("../controller/ctrl.profpic.js");
const auth = require('../middleware/auth');

const routerWrapper = require("../middleware/routerWrapper");

router.post("/login", routerWrapper(userController.login));
router.post("/register", routerWrapper(userController.register));
router.get("/profile/:id", auth, routerWrapper(userController.getProfile));
router.patch("/profile/:id", auth, routerWrapper(userController.updateProfile));
router.delete("/profile/:id", auth, routerWrapper(userController.deleteProfile));
router.post("/profile/:id/upload", multer);

module.exports = router;
