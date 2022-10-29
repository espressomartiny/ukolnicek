console.log("funguju!");

import { Task } from './Task/index.js'
 
const renderTasks = (items) => {
  const tasksElement = document.querySelector(".todo__tasks");
  tasksElement.innerHTML = items.map((item) => Task(item)).join("");
};


fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
.then((response) => response.json())
.then((data) => renderTasks(data));


const checkbox = document.querySelector('#checkbox-undone');
checkbox.addEventListener('change', event => {
  if (checkbox.checked == true) {
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
    .then((response) => response.json())
    .then((data) => renderTasks(data));
  } else {
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then((data) => renderTasks(data));
  }
})