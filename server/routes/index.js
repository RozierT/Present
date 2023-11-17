const router = require("express").Router();
const path = require("path");
const { User, Post, Comment, Album } = require("../../models");
const apiRoute = require("./api");

router.use("/api", apiRoute);
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
