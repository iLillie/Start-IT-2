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

function handleTaskNew(userId, text) {
    if(text === '' || text === null) {
        alert('No text was given');
        return;
    } 
    let taskId = getHighestId(model.tasks) + 1;
    model.tasks.push({
        id: taskId,
        authorId: userId,
        content: text,
        isCompleted: false,
        creationDate: new Date(),
        completionDate: null,
    });
    updateView();
}