// TODO: review https://expressjs.com/
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mongodb+srv://shayan:<password>@cluster0.likmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//TODO: add env vars
mongoose.connect("mongodb+srv://shayan:shayan@cluster0.likmg.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect('mongodb://localhost:27017/whiteboard',
//     {useNewUrlParser: true, useUnifiedTopology: true});

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require("./controllers/quiz-attempts-controller")(app)


app.listen(3000)