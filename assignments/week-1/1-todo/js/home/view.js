const currentPage = "home";
function updateView(page) {
  if (page != currentPage) return;
  const app = document.getElementById("app");
  app.innerHTML = createAllTodos();
}

function createAllTodos() {
    let htmlElement = '<section>';
    for (let user of model.users) {
        htmlElement += /*html*/`<h2>${user.name}'s Todo</h2>`
        htmlElement += createUserTodos(user.id);
    }
    htmlElement += '</section>'
    return htmlElement;
}

function createUserTodos(userID) {
  let htmlElement = '<section class="todo">';
  for(let item of model.tasks) {
    if(item.userID != userID) continue;
    htmlElement += /*html*/`
    <article class="todo-item">
        <input ${item.isCompleted ? 'checked' : ''} onclick="updateTask(${item.id})" type="checkbox">
        <h3 class="todo-description">${item.description}</h3>
        <button onclick="deleteTask(${item.id})" class="todo-delete">🗑</button>
    </article>
    `
  }
  htmlElement += '</section>'
  return htmlElement;
}
