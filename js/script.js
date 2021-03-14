/*----------------SELECTORS------------------*/
const inputTask = document.querySelector('.inputTask');
const addBtn = document.querySelector('.addButton');
const list = document.querySelector('.todo-items');


/*----------------EVENT LISTENERS------------------*/
addBtn.addEventListener('click', addNewTask);
list.addEventListener('click', removeTask);


/*----------------FUNCTIONS------------------*/
function addNewTask(event){
  event.preventDefault();
  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');

  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  newTask.classList.add('task');
  newDiv.appendChild(newTask);

  const taskComplete = document.createElement('button');
  taskComplete.innerHTML = '<i class="fas fa-check"></i>';
  taskComplete.classList.add('checked');
  newDiv.appendChild(taskComplete);

  const removeTask = document.createElement('button');
  removeTask.innerHTML = '<i class="fas fa-trash"></i>';
  removeTask.classList.add('remove');
  newDiv.appendChild(removeTask);

  list.appendChild(newDiv);
  inputTask.value = "";
}
function removeTask(e){
  e.preventDefault();
  
  const item = e.target || e.srcElement;
  if(item.classList[0] === 'remove'){
    const selectedItem = item.parentElement;
    selectedItem.remove();
  }

  if(item.classList[0] === 'checked'){
    const selectedItem = item.parentElement;
    selectedItem.classList.toggle('completed');
  }
}

function clock() {
  var x = new Date();
  var ampm = x.getHours() >= 12 ? ' PM' : ' AM';

  var x1 = x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ampm;
  document.getElementById('displayCLOCK').innerHTML = x1;
  display();
}
function display(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('clock()',refresh);
}
display();