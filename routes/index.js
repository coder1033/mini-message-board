var express = require("express");
var router = express.Router();

/* Current Datetime */
const date = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  time = time.slice(0, 4) + " " + time.slice(8, 11);
  return time + ", " + date
}
/* Messages */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date(),
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
    added: date(),
  });
  res.redirect("/");
});

module.exports = router;
