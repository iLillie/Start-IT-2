function homeViewHTML() {
  return /*html*/`
    <h1>Todo Homepage</h1>
    ${model.users
      .map((user) => {
        return /*html*/`
        <h2 class="tasks-title">
          ${user.name}'s tasks
        </h2>
        <section class="task-items">
          ${getTasksByUserId(user.id)
            .map((task) => taskItemHTML(task))
            .join("")}
        </section>`;
      })
      .join("")}
  `;
}

function taskItemHTML(task) {
  const date = task.isCompleted ? task.completionDate : task.creationDate;
  return /*html*/ `
  <section class="task-item">
    <input
      type="checkbox"
      onclick="handleTaskCompleted(${task.id})" 
      ${task.isCompleted ? "checked disabled" : ""}>
    <h3 class="task-content">
      ${task.content}
    </h3>
    <p class="task-date">
      ${date.toLocaleTimeString("en-GB").slice(0, -3)}
    </p>
    <button
      class="task-delete"
      onclick="handleTaskDeleted(${task.id})">🗑</button>
  </section>
  `;
}
