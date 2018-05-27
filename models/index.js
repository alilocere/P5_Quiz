// JavaScript source code
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:quizzes.sqlite");


//var Quiz= require("./quiz");

//exports.Quiz = Quiz;
sequelize.define('quiz', {
    question: {
        type: Sequelize.STRING,
        unique: { msg: "Ya existe esta pregunta" },
        validate: { notEmpty: { msg: "La pregunta no puede estar vac�a" } }
    },
    answer: {
        type: Sequelize.STRING,
        validate: { notEmpty: { msg: "La respuesta no puede estar vac�a" } }
    }

});

sequelize.sync()
    .then(() => sequelize.models.quiz.count())
    .then(count => {
        if (!count) {
            return sequelize.models.quiz.bulkCreate([
                { question: "Capital de Italia", answer: "Roma" },
                { question: "Capital de Francia", answer: "Par�s" },
                { question: "Capital de Espa�a", answer: "Madrid" },
                { question: "Capital de Portugal", answer: "Lisboa" }
            ]);
        }
    })
    .catch(error => {
        console.log(error);
    });

module.exports = sequelize;
//module.exports = quiz;