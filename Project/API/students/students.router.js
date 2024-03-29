const { createStudent,getStudentById,getStudents,updateStudent,deleteStudent,getStudentByEmail, } =  require ("./student.controller")
const router = require("express").Router();
//const { checkToken }  = require("../../Auth_token/token_validation");

router.post("/AddStudent",createStudent);
router.get("/getStudent",getStudents);
router.get("/getStudentById/:id",getStudentById);
router.get("/getStudentByEmail/:email",getStudentByEmail);
router.patch("/UpdateStudent",updateStudent); 
router.delete("/:id",deleteStudent);  
//router.post("/login",login);
module.exports=router
 
