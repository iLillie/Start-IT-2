function handleTaskCompleted(taskId) {
    const task = getTaskById(taskId);
    task.isCompleted = !task.isCompleted;
    updateView();
}

function handleTaskDeleted(taskId) {
    let taskIndex = getTaskIndexById(taskId);
    model.tasks.splice(taskIndex, 1);
    updateView();
}