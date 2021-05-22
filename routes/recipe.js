const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    // or 
    // uuid, or fieldname
    cb(null, originalname);
  }
})
const upload = multer({ dest: 'static/test' }); // or simply { dest: 'uploads/' }


router.get('/', (req, res) => {
  // let random = Math.floor(Math.random()*2 + 1)

  // Exercise.findOne().skip(random)
  // .then(ex => console.log(res.json(ex)))
  // .catch(err =>console.log(res.json('Error: ' + err)))
  Recipe.find()
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', auth, upload.single('img'), (req, res) => {
  const tytul = req.body.tytul;
  const krotki_opis = req.body.krotki_opis;
  const skladniki = req.body.skladniki;
  const sposob_wykonania = req.body.sposob_wykonania;
  const imgPath = req.body.imgPath;
  const pora = req.body.pora;
  const typ = req.body.typ;
  const czas_wykonania = req.body.czas_wykonania;
  const zlozonosc = req.body.zlozonosc;


  const newRecipe = new Recipe({
    tytul,
    krotki_opis,
    skladniki,
    sposob_wykonania,
    imgPath,
    pora,
    typ,
    czas_wykonania,
    zlozonosc
  });

  newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;