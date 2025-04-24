const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

function addTask(){
  const taskText = taskInput.value.trim();
  if (taskText === ''){
    alert('请输入任务');
    return;
  }
  // 这里可以继续添加把任务加到列表的代码
  const listItem = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '删除';
  deleteButton.classList.add('delete-btn');

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  taskInput.value = '';
  deleteButton.addEventListener('click', function() {
    listItem.removeChild(listItem);
  });
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});