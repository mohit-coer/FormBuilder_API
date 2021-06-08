const db = require("../models");
const Question = db.questions;

async function addQuestion(req,res) {
    if (!req.body.questions) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    
      // Create a Questions
      const question = new Question({
        questions: req.body.questions
      });
    
      // Save Questions in the database
      question
        .save(question)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Questions."
          });
        });
}


module.exports = {
    addQuestion,
}