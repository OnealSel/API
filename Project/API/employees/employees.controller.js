const { create, getEmployeeById, getEmployeeByEmail, deleteEmployee, getEmployees, updateEmployee } = require("./employees.service");

const createEmployeeController = (req, res) => {
  const data = req.body; // Assuming the employee data is sent in the request body
  create(data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.status(201).json({
      success: 1,
      data: results,
    });
  });
};

const getEmployeeByIdController = (req, res) => {
  const id = req.params.id;
  getEmployeeById(id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    if (!results || results.length === 0) {
      return res.status(404).json({
        success: 0,
        message: "Employee not found",
      });
    }
    return res.json({
      success: 1,
      data: results[0],
    });
  });
};

const getEmployeesController = (req, res) => {
  getEmployees((err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.json({
      success: 1,
      data: results,
    });
  });
};

const getEmployeeByEmailController = (req, res) => {
  const email = req.params.email;
  getEmployeeByEmail(email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    if (!results || results.length === 0) {
      return res.status(404).json({
        success: 0,
        message: "Employee not found",
      });
    }
    return res.json({
      success: 1,
      data: results,
    });
  });
};

const deleteEmployeeController = (req, res) => {
  const id = req.params.id;
  deleteEmployee(id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.json({
      success: 1,
      message: "Employee deleted successfully",
    });
  });
};

const updateEmployeeController = (req, res) => {
  const id = req.params.id;
  const data = req.body; // Assuming the updated employee data is sent in the request body
  updateEmployee(id, data, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.json({
      success: 1,
      data: results,
    });
  });
};

module.exports = { createEmployeeController, getEmployeeByIdController, getEmployeesController, getEmployeeByEmailController, deleteEmployeeController, updateEmployeeController };