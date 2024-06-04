// document.addEventListener("DOMContentLoaded", function () {
//     const taskInput = document.getElementById("task-input");
//     const addTaskBtn = document.getElementById("add-task-btn");
//     const taskList = document.getElementById("tasks");

//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     function displayTasks() {
//         taskList.innerHTML = "";
//         tasks.forEach((task, index) => {
//             const taskDiv = document.createElement("div");
//             taskDiv.classList.add("task");
//             taskDiv.dataset.index = index; // Set dataset index for reference
//             taskDiv.innerHTML = `
//                 <span>${task}</span>
//                 <button class="edit">&#9998;</button>
//                 <button class="delete">Delete</button>
//             `;
//             taskList.appendChild(taskDiv);
//         });
//     }

//     function editTask(index, updatedTask) {
//         tasks[index] = updatedTask;
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//         displayTasks();
//     }

//     addTaskBtn.addEventListener("click", function () {
//         const newTask = taskInput.value.trim();
//         if (newTask !== "") {
//             tasks.push(newTask);
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//             displayTasks();
//             taskInput.value = "";
//         } else {
//             alert("Please enter a task.");
//         }
//     });

//     taskList.addEventListener("click", function (event) {
//         const target = event.target;
//         if (target.classList.contains("delete")) {
//             const index = target.parentElement.dataset.index;
//             tasks.splice(index, 1);
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//             displayTasks();
//         } else if (target.classList.contains("edit")) {
//             const index = target.parentElement.dataset.index;
//             const currentTask = tasks[index];
//             const updatedTask = prompt("Edit task:", currentTask);
//             if (updatedTask !== null) {
//                 editTask(index, updatedTask.trim());
//             }
//         }
//     });

//     displayTasks();
// });



document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("tasks");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function displayTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
          const taskDiv = document.createElement("div");
          taskDiv.classList.add("task");
          taskDiv.dataset.index = index; // Set dataset index for reference
          taskDiv.innerHTML = `
              <span>${task}</span>
              <button class="edit">&#9998;</button>
              <button class="delete">Delete</button>
          `;
          taskList.appendChild(taskDiv);
      });
  }

  function editTask(index, updatedTask) {
      tasks[index] = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
  }

  addTaskBtn.addEventListener("click", function () {
      const newTask = taskInput.value.trim();
      if (newTask !== "") {
          tasks.push(newTask);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          displayTasks();
          taskInput.value = "";
      } else {
          alert("Please enter a task.");
      }
  });

  taskList.addEventListener("click", function (event) {
      const target = event.target;
      if (target.classList.contains("delete")) {
          const index = target.parentElement.dataset.index;
          tasks.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          displayTasks();
      } else if (target.classList.contains("edit")) {
          const index = target.parentElement.dataset.index;
          const currentTask = tasks[index];
          const updatedTask = prompt("Edit task:", currentTask);
          if (updatedTask !== null) {
              editTask(index, updatedTask.trim());
          }
      }
  });

  displayTasks();
});


// document.addEventListener("DOMContentLoaded", function () {
//   const taskInput = document.getElementById("task-input");
//   const addTaskBtn = document.getElementById("add-task-btn");
//   const taskList = document.getElementById("tasks");

//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   function displayTasks() {
//       taskList.innerHTML = "";
//       tasks.forEach((task, index) => {
//           const taskDiv = document.createElement("div");
//           taskDiv.classList.add("task");
//           taskDiv.dataset.index = index; // Set dataset index for reference
//           taskDiv.innerHTML = `
//               <span>${task}</span>
//               <button class="edit">&#9998;</button>
//               <button class="delete">&#128465;</button>
//           `;
//           taskList.appendChild(taskDiv);
//       });
//   }

//   function editTask(index, updatedTask) {
//       tasks[index] = updatedTask;
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//       displayTasks();
//   }

//   addTaskBtn.addEventListener("click", function () {
//       const newTask = taskInput.value.trim();
//       if (newTask !== "") {
//           tasks.push(newTask);
//           localStorage.setItem("tasks", JSON.stringify(tasks));
//           displayTasks();
//           taskInput.value = "";
//       } else {
//           alert("Please enter a task.");
//       }
//   });

//   taskList.addEventListener("click", function (event) {
//       const target = event.target;
//       if (target.classList.contains("delete")) {
//           const index = target.parentElement.dataset.index;
//           tasks.splice(index, 1);
//           localStorage.setItem("tasks", JSON.stringify(tasks));
//           displayTasks();
//       } else if (target.classList.contains("edit")) {
//           const index = target.parentElement.dataset.index;
//           const currentTask = tasks[index];
//           const updatedTask = prompt("Edit task:", currentTask);
//           if (updatedTask !== null) {
//               editTask(index, updatedTask.trim());
//           }
//       }
//   });

//   displayTasks();
// });

  