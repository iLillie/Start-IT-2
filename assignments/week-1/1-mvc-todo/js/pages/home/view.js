function homeViewHTML() {
  let userTasksHTML = '';
  for (const user of model.users) {
    let tasks = getTasksByUserId(user.id);
    userTasksHTML += `
      <h2 class="tasks-title">
        ${user.name}'s tasks
      </h2>
      <section class="task-items">
        ${taskItemsHTML(tasks)}
      </section>
    `;
  }
  return `
    <h1>Todo Homepage</h1>
    ${userTasksHTML}
  `;
}

function taskItemsHTML(tasks) {
  let taskItems = "";
  for (const task of tasks) {
    taskItems += taskItemHTML(task);    
  }
  return taskItems;
}

function taskItemHTML(task) {
  const isCompleted = task.isCompleted;
  const date = isCompleted ? task.completionDate : task.creationDate;
  const dateStr = date.toLocaleTimeString('en-GB');
  const content = task.content; 
  const id = task.id;
  const inputAttributes = isCompleted ? 'checked disabled' : '';

  return /*html*/ `
  <section class="task-item">
    <input
      type="checkbox"
      onclick="handleTaskCompleted(${id})" 
      ${inputAttributes}>
    <h3 class="task-content">
      ${content}
    </h3>
    <p class="task-date">
      ${dateStr}
    </p>
    <button 
      class="task-delete"
      onclick="handleTaskDeleted(${id})">
      🗑
    </button>
  </section>
  `
}