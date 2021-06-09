module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        questions:{}
      },
      { timestamps: true }
    );
  
    const Question = mongoose.model("question", schema);
    return Question;
  };
  