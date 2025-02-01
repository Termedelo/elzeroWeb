let NameInput = document.querySelector(".name");
let addTask = document.querySelector(".add");
let TasksCont = document.querySelector(".TasksCont");
//#------------------------------------------------
let Task = document.createElement("div");
Task.style.width = "300px";
Task.style.height = "30px";
Task.style.position = "relative";
Task.style.fontSize = "20px";
Task.style.textAlign = "center";
Task.style.top = "45px";
Task.style.left = "calc(50% - 50px)";
Task.style.borderRadius = "12px";
Task.style.transform = "translate(-50% , -50%)";
Task.style.backgroundColor = "white";
//#------------------------------------------------
let deleteBtn = document.createElement("button");
deleteBtn.style.width = "99px";
deleteBtn.style.height = "36px";
deleteBtn.style.position = "relative";
deleteBtn.style.top = "15px";
deleteBtn.style.left = "calc(50% + 160px)";
deleteBtn.style.transform = "translate(-50% , -50%)";
deleteBtn.style.color = "white";
deleteBtn.style.fontSize = "17px";
deleteBtn.style.outline = "none";
deleteBtn.style.border = "solid 1px transparent";
deleteBtn.style.borderRadius = "12px";
deleteBtn.style.backgroundColor = "#f8482e";
deleteBtn.style.cursor = "pointer";
deleteBtn.style.textAlign = "center";
deleteBtn.innerText = "Delete";
let i = 1;
addTask.addEventListener("click", () => {
  let newTask = Task.cloneNode(true);
  let delBtn = deleteBtn.cloneNode(true);
  window.localStorage.setItem(`Task ${i++}`, newTask);
  newTask.innerText = NameInput.value;
  NameInput.value = "";
  TasksCont.appendChild(newTask);
  TasksCont.appendChild(delBtn);
});
window.onload = function () {
};
