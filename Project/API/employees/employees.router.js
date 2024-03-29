const {
    createEmployeeController,
    getEmployeeByIdController,
    getEmployeeByEmailController,
    deleteEmployeeController,
    getEmployeesController,
    updateEmployeeController
  } = require("./employees.controller");

  
  const router = require("express").Router();
  
  router.post("/addEmployee", createEmployeeController);
  router.get("/getEmployees", getEmployeesController);
  router.get("/getEmployeeById/:id", getEmployeeByIdController);
  router.get("/getEmployeeByEmail/:Email", getEmployeeByEmailController);
  router.patch("/updateEmployee", updateEmployeeController);
  router.delete("/deleteEmployee/:id", deleteEmployeeController);
  
  module.exports = router;