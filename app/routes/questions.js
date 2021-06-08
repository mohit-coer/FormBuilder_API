module.exports = app => {
    const questions = require('../controllers/questions.controller');
  
    var router = require("express").Router();
    router.post("/add", questions.addQuestion)
  
    app.use("/api/questions", router);
  };
  