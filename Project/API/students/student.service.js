const pool = require("../../config/database");

module.exports = {
  // Function to create a new student in the database
  create: (data, callBack) => {
    pool.query(
      'INSERT INTO students (name,firstname,email,campus_id) VALUES (?, ?, ?,?)',
      [
        data.name,
        data.firstname,
        data.email,
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

  // Function to get all students from the database
  getStudents: (callBack) => {
    pool.query(
      'SELECT * FROM students',
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to get a student by their ID from the database
  getStudentById: (id, callBack) => {
    pool.query(
      'SELECT * FROM students WHERE student_id = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to get a student by their username from the database
  getStudentByEmail: (email, callBack) => {
    pool.query(
      'SELECT * FROM students WHERE email = ?',
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  // Function to update a student in the database
  updateStudent: (data, callBack) => {
    pool.query(
      'UPDATE students SET name = ?, firstname = ?, email = ?, campus_id= ? WHERE student_id = ?',
      [
        data.name,
        data.firstname,
        data.email,
        data.campus_id,
        data.student_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // Function to delete a student from the database
  deleteStudent: (data, callBack) => {
    pool.query(
      'DELETE from students WHERE student_id = ?',
      [data.student_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};