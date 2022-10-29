console.log("funguju!");

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=true")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  
const Task = (props) => {
  const { id, name, due, done } = props;

  let checkClass = "";
  if (done) {
    checkClass = "✓";
  }

  return;
  `
      <div class="task">
      <div class="task__body">
        <div class="task__name">${name}</div>
        <div class="task__due">${due}</div>
      </div>
      <div class="task__done">${checkClass}</div>
    </div>
    `;
};
