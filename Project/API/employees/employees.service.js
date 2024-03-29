const pool = require("../../config/database");

module.exports = {
  // Function to create a new employee in the database
  create: (data, callBack) => {
    pool.query(
      'INSERT INTO employees (name, firstname, email, password, campus_id) VALUES (?, ?, ?, ?, ?)',
      [
        data.name,
        data.firstname,
        data.email,
        data.password,
        data.campus_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to get all employees from the database
  getEmployees: (callBack) => {
    pool.query(
      'SELECT * FROM employees',
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to get an employee by their ID from the database
  getEmployeeById: (id, callBack) => {
    pool.query(
      'SELECT * FROM employees WHERE employee_id = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to get an employee by their email from the database
  getEmployeeByEmail: (email, callBack) => {
    pool.query(
      'SELECT * FROM employees WHERE email = ?',
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  // Function to update an employee in the database
  updateEmployee: (data, callBack) => {
    pool.query(
      'UPDATE employees SET name = ?, firstname = ?, email = ?, password = ?, campus_id = ? WHERE employee_id = ?',
      [
        data.name,
        data.firstname,
        data.email,
        data.password,
        data.campus_id,
        data.employee_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to delete an employee from the database
  deleteEmployee: (data, callBack) => {
    pool.query(
      'DELETE from employees WHERE employee_id = ?',
      [data.employee_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};