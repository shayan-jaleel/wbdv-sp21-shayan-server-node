const quizzesService = require("../services/quizzes/quizzes-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }
    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }
    const createQuiz = (req, res) => {
        quizzesService.createQuiz(req.body)
            .then(quiz => res.send(quiz))
    }
    app.post('/api/quizzes', createQuiz)
    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}