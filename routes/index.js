


const express = require('express');
const router = express.Router();
const {models} = require('../models/index');

//const quizController = require('../controllers/quiz');

//var Quiz = require("./quiz");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/credits', function (req, res, next) {
    res.render('credits');
});

router.get('/quizzes/index', function (req, res, next) {
    models.quiz.findAll()
        .then(quizzes => {
            res.render('quizzes/index', { quizzes });
        })
        .catch (error=> {
                next(error);
         });
 });

//router.get('/quizzes/randomPlay', function(req, res, next){}

//routes.get('/quizzes/radomcheck/:quizId?answer=respuesta', function( req, res, next){}
/*router.param('')

router.get('/quizzes', quizController.index); 

router.get('/quizzes/:quizId(\\d+)', quizController.show); 

router.get('/quizzes/new', quizController.new); 

router.post('/quizzes', quizController.create); 

//router.get('/quizzes/:quizId(\\d+)/edit', quizController.edit); 

router.put('/quizzes/:quizId(\\d+)', quizController.update); 

router.delete('/quizzes/:quizId(\\d+)', quizController.destroy); 

router.get('/quizzes/:quizId(\\d+)/play', quizController.play);

router.get('/quizzes/:quizId(\\d+)/check', quizController.check); 

*/
module.exports = router;
