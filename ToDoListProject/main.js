// Setting Variables:
let Task = document.querySelector(".todoContainer .addTask input");
let addTaskBtn = document.querySelector(".todoContainer .addTask button");
let TasksContainer = document.querySelector(".todoContainer .tasks");
let EmptyTask = document.querySelector(".todoContainer .tasks .task");
let taskCount = document.querySelector(
  ".todoContainer .DoneAndNot .NumOFTasks span"
);
let tasksCompleted = document.querySelector(
  ".todoContainer .DoneAndNot .Completed span"
);
// focusing on the input filed
window.onload = () => Task.focus();

addTaskBtn.onclick = () => {
  if (Task.value === "") {
    console.log("you can not add an Empty Task");
  } else {
    // i removed the empty task
    EmptyTask.remove();
    // i created the new task inputted by the user.
    let div = document.createElement("div");
    div.className = "NewTask";
    div.innerText = Task.value;
    // i created the Delete button.
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "Delete";
    // i added the Delete btn to the new task
    div.appendChild(del);
    // i added the new task to the tasks container
    TasksContainer.appendChild(div);
    // making the input filed empty after adding
    Task.value = "";
    // returning the focus to the input filed
    Task.focus();
    // i added a counter to the task number down there
    taskCount.innerText = ++taskCount.innerText;
    // working with the complete span
    if (taskCount.innerText > 0) {
      div.onclick = () => {
        if (div.className == "NewTask") {
          div.className = "finished NewTask";
          tasksCompleted.innerText = ++tasksCompleted.innerText;
        } else if (div.className == "finished NewTask") {
          div.className = "NewTask";
          tasksCompleted.innerText = --tasksCompleted.innerText;
        }
      };
    }
    // working with deleting the tasks
    del.onclick = function () {
      del.parentNode.remove();
      taskCount.innerText = --taskCount.innerText;
    };
  }
};
