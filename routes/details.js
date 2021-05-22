const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.get('/:przepisId', (req, res) => {

    Recipe.findById(req.params.przepisId)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(404).json('Error during fetch: ' + err));
});

module.exports = router