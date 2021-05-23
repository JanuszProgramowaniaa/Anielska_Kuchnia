express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, 'static')))



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

<<<<<<< HEAD


const recipeRouter = require('./routes/recipe');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const detailsRouter = require('./routes/details');

app.use('/recipes', recipeRouter);
app.use('/rejestracja', userRouter);
app.use('/Login', authRouter);
app.use('/details', detailsRouter);
=======
const recipeRouter = require('./routes/recipe');
const userRouter = require('./routes/users');


app.use('/recipes',recipeRouter);
app.use('/rejestracja',userRouter);
>>>>>>> e9b167c (adding user model and controller)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
