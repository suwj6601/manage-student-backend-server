const express = require("express");
const {
  getAllSubjectController,
  createSubjectController,
  deleteSubjectController,
  updateSubjectController,
} = require("../controller/subject");
const { validateUser } = require("../middleware/auth");

const subjectRouter = express.Router();
subjectRouter.use(validateUser);

subjectRouter.get("/", getAllSubjectController);
subjectRouter.post("/", createSubjectController);
subjectRouter.put("/", updateSubjectController);
subjectRouter.delete("/:idDelete", deleteSubjectController);

module.exports = subjectRouter;
