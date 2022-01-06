function getTaskById(taskId) {
    let task;
    for (const task of model.tasks) {
        if (task.id != taskId) continue;
        return task;
    }
    return null;
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
