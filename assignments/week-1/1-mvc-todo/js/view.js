function updateView() {
  const appElement = document.getElementById("app");
  switch (model.app.page) {
    case "home":
      appElement.innerHTML = homeViewHTML();
      break;
  }
}
