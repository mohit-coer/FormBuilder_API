module.exports = app => {
  
    var router = require("express").Router();
  
    router.get("/states", common.getStates);
  
    router.get("/districts/:state_id", common.getDistrictsByStateId);
  
  };
  