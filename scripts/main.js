let importantIcon = "fas fa-star";
let notImportantIcon = "far fa-star";
let isImportant = true;
let isPanelVisible = true;

function toggleImportance() {
  console.log("icon clicked!");
  if (isImportant) {
    // switch to none imp
    $("#iImportant").removeClass(importantIcon).addClass(notImportantIcon);
    isImportant = false;
  } else {
    //switch to imp

    $("#iImportant").removeClass(notImportantIcon).addClass(importantIcon);
    isImportant = true;
  }
}
function toggleVisibility() {
  if (isPanelVisible) {
    $("#sect-form").hide();
    isPanelVisible = false;
  } else {
    $("#sect-form").show();
    isPanelVisible = true;
  }
}

function test() {
  $.ajax({
    url: "https://restclass.azurewebsites.net/api/test",
    type: "GET",
    success: function (response) {
      //parameter will receive response of success
      console.log("server says:", response);
    },
    error: function (errorDetails) {
      //parameter will be receiving the error function
      console.log(errorDetails);
    },
  });
}
function saveTask() {
  console.log("Saving task...");
  //get values from the input fields first in the html,create the value, put the values in a variable

  let title = $("#txtTitle").val();
  let desc = $("#txtDesc").val();
  let startDate = $("#txtStartDate").val();
  let dueDate = $("#txtDueDate").val();
  let color = $("#selColor").val();
  let category = $("#txtOption").val();
  

  let task = new Task(title, desc, startDate, dueDate, color, category);
  console.log(task);

  //display the task
  displayTask(task);
}
function displayTask(task) {
  let syntax = `
        <div class="task">
            <div class="info"
                <h5>Task Title: ${task.title}</h5>
                <p>Task Description: ${task.desc}</p>
                <p>Category: ${task.category}</p>
            </div>
        <div class="dates">
            <label>Task Start Date:${task.startDate}</label>
            <label>Task Due Date${task.dueDate}<label>
        </div>
        
        </div>`; $("#task-container").append(syntax);
}
function init() {
  console.log("Task manager");

  //load data

  //hook events
  $("#iImportant").click(toggleImportance);
  $("#btnClear").click(toggleVisibility);
  $("#btnSave").click(saveTask);
}

window.onload = init;
