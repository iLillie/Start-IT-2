function getObjectById(id, objects) {
    for(let element of objects) {
        if (element.id != id) continue;
        return element;
    }
    return null;
}

function deleteObjectById(id, objects) {
    const index = objects.findIndex(item => item.id == id);
    objects.splice(index, 1);
    
}

function deleteTask(todoID) {
    deleteObjectById(todoID, model.tasks);
    updateView(model.app.page);
}

function updateTask(todoID) {
    const task = getObjectById(todoID, model.tasks);
    task.isCompleted = !task.isCompleted;
    updateView(model.app.page);
}