document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.querySelector("#new-task-description");
    const priority = document.querySelector("#priority");
    toDo(text.value, priority.value);
    form.reset();
  });

  function toDo(todo, priority) {
    let li = document.createElement("li");
    let prioSel = document.createElement("p");
    let btnDel = document.createElement("button");
    let btnEdit = document.createElement("button");
    if (priority === "Hight") {
      prioSel.style.color = "red";
      prioSel.textContent = `Level Priority: ${priority}`;
    } else if (priority === "Medium") {
      prioSel.style.color = "yellow";
      prioSel.textContent = `Level Priority: ${priority}`;
    } else {
      prioSel.style.color = "green";
      prioSel.textContent = `Level Priority: ${priority}`;
    }

    btnDel.textContent = "X";
    btnEdit.textContent = "Edit";
    li.textContent = `${todo} `;
    btnDel.addEventListener("click", del);
    btnEdit.addEventListener("click", edit);
    li.appendChild(prioSel);
    li.appendChild(btnDel);
    li.appendChild(btnEdit);

    document.querySelector("#tasks").appendChild(li);
  }

  function edit(e) {
    const editTask = e.target.parentNode.firstChild;
    const editPriorityTask = e.target.parentNode.childNodes[1];

    let task = prompt("Please enter your edit task:", editTask.textContent);
    if (task == null || task == "") {
    } else {
      let txt;
      alert("Please select priority: ");
      if (confirm("Hight")) {
        txt = "Hight";
      } else if (confirm("Medium")) {
        txt = "Medium";
      } else if (confirm("Low")) {
        txt = "Low";
      }

      editTask.textContent = `${task} `;

      if (txt === "Hight") {
        editPriorityTask.style.color = "red";
        editPriorityTask.textContent = `Level Priority: ${txt}`;
      } else if (txt === "Medium") {
        editPriorityTask.style.color = "yellow";
        editPriorityTask.textContent = `Level Priority: ${txt}`;
      } else {
        editPriorityTask.style.color = "green";
        editPriorityTask.textContent = `Level Priority: ${txt}`;
      }
    }
  }
  function del(e) {
    e.target.parentNode.remove();
  }
});
