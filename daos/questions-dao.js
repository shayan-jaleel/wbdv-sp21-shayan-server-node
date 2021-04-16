const questionsModel = require('../db/questions/questions-model')
// const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => questionsModel.find({quizId: qzid})
// const findQuestionsForQuiz = (qzid) => questionsModel.filter((question) => question.quizId === qzid)

    // .populate('questions').then(quiz => quiz.questions)
// const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
//     .populate('questions').then(quiz => quiz.questions)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}