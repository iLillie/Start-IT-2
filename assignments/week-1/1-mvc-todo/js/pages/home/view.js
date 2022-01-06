function updateHomeView() {
  const appElement = getAppElement();
  appElement.innerHTML = getHomeHTML();
}

function getHomeHTML() {
  let homeHTML = `<h1>Todo Homepage</h1>
  ${getTasksHTML()}`;
  return homeHTML;
}

function getTasksHTML() {
  const users = model.users;
  if (users === null || users === undefined) return "";
  let tasksHTML = '';
  for (const user of model.users) {
    tasksHTML += /*html*/ `
    <h2>${user.name}'s list</h2>
    ${getTasksFromUserHTML(user.id)}
    `;
  }
  return tasksHTML;
}

function getTasksFromUserHTML(userId) {
  let tasksHTML = '';
  for (const task of getTasksByUserId(userId)) {
    tasksHTML += /*html*/ `
        <section class="todo-task">
          <input ${task.isCompleted ? "checked" : ""} onclick="handleTaskCompleted(${task.id})" type="checkbox">
          <h3 class="task-content">${task.content}</h3>
          <button onclick="handleTaskDeleted(${task.id})" class="task-delete">🗑</button>
        </section>
      `;
  }
  return tasksHTML;
}
