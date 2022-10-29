export const Task = (props) => {
    const { name, due, done } = props;
  
    let checkClass = "";
    if (done) {
      checkClass = "✓";
    }
  
    return `
   <div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${checkClass}</div>
      </div>
      `;
  };
  