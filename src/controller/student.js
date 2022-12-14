const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");
const {
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../service/student");

// get all student
// TODO: need to move database access to /service
const getAllStudentController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT * FROM student");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all student successful",
    data: rows,
  });
};

// add new student
const createStudentController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const classID = req.body.classID;
  const sex = req.body.sex;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const results = await createStudent({ id, name, age, email, classID, sex });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create student successful",
  });
};

// update student
const updateStudentController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const sex = req.body.sex;
  const email = req.body.email;
  const classID = req.body.classID;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const results = await updateStudent({ id, name, age, sex, email, classID });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update student successful",
    data: results,
  });
};

const deleteStudentController = async (req, res) => {
  const idDelete = req.params.idDelete;

  if (idDelete === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@idDelete can not be empty",
    });
  }

  const results = await deleteStudent({ idDelete });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete student successful",
  });
};

module.exports = {
  getAllStudentController,
  createStudentController,
  updateStudentController,
  deleteStudentController,
};
