const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth');
const { route } = require("./users");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ message: "User doesn't exists" });

    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) return res.status(400).json({ message: "Inavild credentials" })

        jwt.sign(
          { id: user.id },
          process.env.jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            })
          }
        )
      })
  });
});


router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => {
      res.json(user)
    })
})
module.exports = router;
