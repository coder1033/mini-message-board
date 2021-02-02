var express = require("express");
var router = express.Router();

/* Messages */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message", messages: messages });
});

/* Get new page */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message" });
});

/* Post new page */
router.post("/new", function (req, res, next) {
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = router;
