function getTaskById(taskId) {
    let task;
    for (const task of model.tasks) {
        if (task.id != taskId) continue;
        return task;
    }
    return null;
}

function getHighestId(objects) {
  let objIndex = 0; 
  for (const obj of objects) {
    objIndex = obj.id > objIndex ? obj.id : objIndex;
  }
  return objIndex;
}

function getTaskIndexById(taskId) {
    let taskIndex = -1;
    for (const task of model.tasks) {
        taskIndex++;
        if (task.id === taskId) return taskIndex;
    }
    return null;
}

function getTasksByUserId(userId) {
  let tasks = [];
  for (const task of model.tasks) {
    if (task.authorId != userId) continue;
    tasks.push(task);
  }
  return tasks;
}
