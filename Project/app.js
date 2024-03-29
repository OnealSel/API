require('dotenv').config()  
const express=require ("express");
const app=express();
const studentRouter = require("./API/students/students.router");
//const productRouter = require("./API/Products/Products.router");
const EmployeeRouter = require("./API/employees/employees.router");
app.use(express.json()); 
 app.use("/API/students",studentRouter);
 //app.use("/API/Products",productRouter);
 app.use("/API/Employees",EmployeeRouter);


app.listen(process.env.APP_PORT ,() => {
    console.log("Server up and running:",process.env.APP_PORT);
}); 






