document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event) {
  
    event.preventDefault();
  
    
    const taskInput = document.getElementById('new-task-description');
    const task = taskInput.value;
  
   
    const taskElement = document.createElement('li');
    taskElement.innerText = task;
  
   
    const taskList = document.getElementById('new-task-description');
    taskList.appendChild(taskElement);
  
    
    taskInput.value = '';
  });

  
});
