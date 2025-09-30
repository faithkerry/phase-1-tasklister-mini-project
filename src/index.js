document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form"); // grab the form

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh

    const input = document.querySelector("#new-task-description"); // the input
    const taskList = document.querySelector("#tasks"); // the ul

    const li = document.createElement("li");
    li.textContent = input.value; // set text to the task description
    taskList.appendChild(li); // add it to the list

    input.value = ""; // clear input field
  });
});
