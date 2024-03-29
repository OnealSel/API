const { create,getStudentById, getStudentByEmail,updateStudent,deleteStudent,getStudents} = require("./student.service");
const bcrypt = require("bcrypt");
const { sign }= require("jsonwebtoken");  
module.exports = {
  createStudent: (req, res) => {
    const body = req.body;

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
        message: "User created successfully",
      });
    });
},


  getStudentById: (req, res) => {
    const id = req.params.id;
    getStudentById(id, (err, results) => {
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
          message: "User not found",
        });
      }
      return res.json({
        success: 1,
        data: results[0],
      });
    });
  },


  getStudents: (req, res) => {
  getStudents((err, results) => {
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
  },


  updateStudent: (req, res) => {
    const body = req.body;
    
    updateStudent(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      if (results.affectedRows === 0) { 
        return res.json({
          success: 0,
          message: "Failed to update user",
        });
      }
      return res.json({
        success: 1,
        message: "User updated successfully",
      });
    });
  },


  deleteStudent: (req, res) => {
    const data = req.body;
    deleteStudent(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if(!results){

        return res.status(400).json({
          success: 0,
          message: "User not found",
        });
      }
      return res.json({
        success: 1,
        message: "User deleted successfully",
      });
    });
},

    

  getStudentByEmail: (req, res) => {
    const email = req.params.email;
    getStudentByEmail(email, (err, results) => {
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
          message: "User not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },


  login: (req, res) => {
    const body = req.body;
    getUserByPseudo(body.Pseudo, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results || results.length === 0){
        return res.json({
          success: 0,
          message:"Invalid email or password",
        });
      }
      const result = bcrypt.compareSync(body.MotDePasse, results.MotDePasse);
      if (result) {
        results.MotDePasse = undefined;
        const jsonwebtoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "Login successful",
          token: jsonwebtoken
        });
      } else {
        return res.json({
          success: 0,
          message: "Invalid email or password",
        });
      }
    });
  }
};

  