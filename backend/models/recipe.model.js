const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    tytul: { type: String, required: true },
    krotki_opis: { type: String, required: true },
    skladniki: { type: Array, "default":[], required: true },
    sposob_wykonania: { type: String, required: true },
   
  }, {
    timestamps: true,
  });

  const Recipe = mongoose.model('Recipe',recipeSchema);

  module.exports = Recipe;
  