const models = require("../models");

const quizzes = [
		{ id: 1,
			quiestion: "Capital of Italy",
			answer: "Rome"
		},

		{ id: 2,
			quiestion: "Capital of France",
			answer: "Paris"
		},

		{ id: 3,
			quiestion: "Capital of Spain",
			answer: "Madrid"
		},

		{ id: 4,
			quiestion: "Capital of Portugal",
			answer: "Lisbon"
		}];

//GET /quizzes
exports.index= (req,res, next) => {
	
};

//GET /quizzes/:quizId
exports.show= (req,res, next) => {
	const quizId = Number(req.params.quizId);
	const quiz = models.quiz.findById(quizId);

	if(quiz){
		res.render('quizzes/show', {quiz});
	} else {
		next(new Error('There is no quiz qith id ='+ quizId));
	}
};

//GET /quizzes/new
exports.new= (req,res, next) => {
	
};

let nextId = quizzes.length + 1;
//POST /quizzes/create
exports.create= (quiz) => {
	const newQuiz = {
		id: nextId++,
		question: (quiz.question || "" ).trim(),
		answer: (quiz.answer || "").trim
	};
	quizzes.push(newQuiz);
	return newQuiz;
};

//GET /quizzes/:quizId/edit
//exports.edit (req,res, next) => {
	
//};

//PUT /quizzes/:quizI
exports.update= (quiz) => {
	const index = quizzs.findIndex(q => quiz.id === q.id);
	if (index>= 0){
		quizzes[index] = {
			id:quiz.id,
			question:  (quiz.question || "" ).trim(),
		answer: (quiz.answer || "").trim
		};
	}
};

exports.findAll = () => quizzes;

exports.findById = (id) => {
	return quizzes.find(quiz => quiz.id === id);
}
//DELETE /quizzes/:quizId
exports.destroy= (quiz) => {
	const index = quizzes.findIndex(quiz => quiz.id ===q.id);
	if(index>= 0){
		quizzes.splice(index,1);
	}
};

//GET /quizzes/:quizId/play
exports.play= (req,res, next) => {
	
};

//GE /quizzes/:quizId/check
exports.check= (req,res, next) => {
	
};
