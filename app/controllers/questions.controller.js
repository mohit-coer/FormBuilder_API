const db = require("../models");
const Question = db.questions;

async function addQuestion(req,res) {
    if (!req.body.questions) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

      const question = new Question({
        questions: req.body.questions
      });

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

async function getQuesById(req,res) {
  try{
    let courseData = await Question.find({_id: req.body.questions_id})
    console.log(courseData)
    res.status(200).send(courseData)
  }
  catch(err )
  {
    res.status(500).send({error: err})
  }
}

async function getQues(req,res) {
  try
  {
    let ques = await Question.find({});
    res.status(200).send(ques);
  }
  catch(err)
  {
    res.status(500).send({error: err})
  }
}

async function updateForm(req, res){
  try{
    const save = await Question.findOne({ _id: req.body.questions_id });
    console.log(save);
    let obj = save
    obj["questions"]["responses"] =  [...save.questions.responses, req.body.questions];
    // save.questions.responses = [...save.questions.responses, req.body.questions];

    // save.update((err)=>{
    //   if(!err)
    //   {
    //     res.status(500).send(save);
    //   }
    //   else{
    //     res.status(200).send(save);
    //   }
    // })
    await Question.updateOne({ _id: req.body.questions_id }, obj)
    res.status(200).send("Updated Sccesfully")
  }
  catch(err)
  {
    res.status(500).send({error: err})
  }
}


module.exports = {
    addQuestion,
    getQuesById,
    getQues,
    updateForm
}