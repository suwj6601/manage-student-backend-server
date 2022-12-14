const { db } = require("./db");

const getAllSubject = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM subject");
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const createSubject = async (data) => {
  const id = data.id;
  const name = data.name;
  const classID = data.classID;
  const startTime = data.startTime;
  const endTime = data.endTime;

  try {
    const [rows, fields] = await db
      .promise()
      .query("INSERT INTO subject values(?,?,?,?,?)", [
        id,
        name,
        classID,
        startTime,
        endTime,
      ]);
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateSubject = async (data) => {
  const id = data.id;
  const name = data.name;
  const classID = data.classID;
  const startTime = data.startTime;
  const endTime = data.endTime;

  try {
    const [rows, fields] = await db
      .promise()
      .query(
        `UPDATE subject set name = ?, classID = ?, startTime = ?, endTime = ? where id = ?`,
        [name, classID, startTime, endTime, id]
      );
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteSubject = async (data) => {
  const idDelete = data.idDelete;
  try {
    const [rows, fields] = await db
      .promise()
      .query(`delete from subject where id = (?);`, [idDelete]);
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllSubject,
  createSubject,
  updateSubject,
  deleteSubject,
};
