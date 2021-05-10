const router = require('express').Router();
let Recipe = require('../models/recipe.model');


router.route('/').get((req, res) => {
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