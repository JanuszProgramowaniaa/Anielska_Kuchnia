const router = require('express').Router();
let Recipe = require('../models/recipe.model');


router.route('/').get((req, res) => {
    // let random = Math.floor(Math.random()*2 + 1)
  
    // Exercise.findOne().skip(random)
    // .then(ex => console.log(res.json(ex)))
    // .catch(err =>console.log(res.json('Error: ' + err)))
    Recipe.find()
      .then(recipe => res.json(recipe))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const tytul = req.body.tytul;
    const krotki_opis = req.body.krotki_opis;
    const skladniki = req.body.skladniki;
    const sposob_wykonania =req.body.sposob_wykonania;
  
    const newRecipe= new Recipe({
        tytul,
        krotki_opis,
        skladniki,
        sposob_wykonania,
    });
  
    newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;