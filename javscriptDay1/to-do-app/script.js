function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const ul = document.getElementById("todoList");

    // create new list item
    const li = document.createElement("li");

    // Creating the span for the task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // create edit buttton
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(span);

    // create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.onclick = () => removeTask(li);

    // Append button and text to the list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    // Append list item to the list
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Please enter a valid task");
  }
}

function editTask(span) {
  // prompt the user to enter a new task description
  const newTask = prompt("Edit your task:", span.textContent);

  // Update the task only if the input is not null or empty
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim(); //set the new task text
  }
}

function removeTask(task) {
  const ul = document.getElementById("todoList"); //Get the list container
  ul.removeChild(task); //Remove the specifed task element
}
