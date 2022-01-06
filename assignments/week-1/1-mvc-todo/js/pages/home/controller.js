function handleTaskCompleted(taskId) {
    const task = getTaskById(taskId);
    task.completionDate = new Date();
    task.isCompleted = true;
    updateView();
}

function handleTaskDeleted(taskId) {
    let taskIndex = getTaskIndexById(taskId);
    model.tasks.splice(taskIndex, 1);
    updateView();
}