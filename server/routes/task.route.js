const route = require("express").Router();
const {createTask,getAllTask,getAllTasksAndLogs,getTasksByDate,getTask,updateTaskHours, updatedTaskDetails, deleteTask}=require("../controllers/task.controller")


route.post("/create-task", createTask)

route.get("/get-all-tasks", getAllTask)

route.get("/get-task/:taskId", getTask)

route.put("/update-task-hours/:id", updateTaskHours)

route.get("/get-all-tasks-and-logs", getAllTasksAndLogs)

route.get("/get-tasks-by-date", getTasksByDate)

route.put("/update-task-details/:taskId",updatedTaskDetails)

route.delete("/delete-task/:taskId",deleteTask)


module.exports = route