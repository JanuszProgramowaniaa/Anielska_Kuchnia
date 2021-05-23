const router = require('express').Router();
let User = require('../models/user.model');
var bcrypt = require('bcryptjs');

router.route("/").post((req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        newUser.password = hash;
        newUser.save()
          .then(user => res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          }
          ))
      });
    });


  });
});

module.exports = router;
