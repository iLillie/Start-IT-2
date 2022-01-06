function homeViewHTML() {
  return /*html*/`
    <h1>Todo Homepage</h1>

    ${model.users
      .map((user) => {
        return /*html*/`
        <h2 class="tasks-title">
          ${user.name}'s tasks
          <div>
            <input type="text" value="${model.inputs.home.textbox[user.id]}" onchange="model.inputs.home.textbox[${user.id}] = this.value">
            <button onclick="handleTaskNew(${user.id}, model.inputs.home.textbox[${user.id}])">New task</button>
          </div>
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
  const dateStr = task.isCompleted ? 'done at ' : 'created at '
  return /*html*/ `
  <section class="${task.isCompleted ? "completed" : ""} task-item">
    <input
      type="checkbox"
      onclick="handleTaskCompleted(${task.id})" 
      ${task.isCompleted ? "checked disabled" : ""}>
    <h3 class="task-content">
      ${task.content}
    </h3>
    <p class="task-date">
      ${dateStr + date.toLocaleTimeString("en-GB").slice(0, -3)}
    </p>
    <button
      class="task-delete"
      onclick="handleTaskDeleted(${task.id})">🗑</button>
  </section>
  `;
}
