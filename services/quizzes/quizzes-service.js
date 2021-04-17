
const quizzes = require("./quizzes.json")

const quizzesDao = require("../../daos/quizzes-dao")
// const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = (quiz) => {
    return quizzesDao.createQuiz(quiz)
}

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
    // return quizzesModel.find()
    // return quizzes
}
const findQuizById = (qid) => {
    return quizzesDao.findQuizById(qid)
    // return quizzesModel
    //     .findById(qid)
    //     .populate("questions")
    //     .exec()

    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })
}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}