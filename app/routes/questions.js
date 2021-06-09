module.exports = app => {
    const questions = require('../controllers/questions.controller');
  
    var router = require("express").Router();
    router.post("/add", questions.addQuestion);
    router.get("/getAll",questions.getQues);
    router.post("/getById",questions.getQuesById);
    router.put("/addResponseInForm", questions.updateForm);

    app.use("/api/questions", router);
  };
  