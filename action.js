﻿class Task{

    constructor( id, text, isComplete){   // внешнеие переменные 
        this.id = id;
        this.text = text;
        this.isComplete= isComplete;
    }
}

var tasks = [ 
            new Task(0, 'Сходить в магазин', false), 
               new Task( 1,'Приготовить обед', false),
               new Task( 2,'Сделать уборку ', false),
               new Task( 3,'Забрать сына с садика ', false)
         ];


function showTasks() {

   document.getElementsByClassName('task-area')[0].innerHTML='';
    if (tasks.length>0){
        for(var i = 0; i < tasks.length; i++) {
        create(tasks[i].text,tasks[i].id, tasks[i].isComplete);}}

     document.getElementsByClassName('task-area')[0].innerHTML+='<div></div>';
}



function create(text, id, isComplete){
    var element = document.createElement('div'); // создали див 
    element.className  = 'task'; // див с классом таск


    var elementText = document.createElement('span');
    elementText.className = 'task-text';
    elementText.innerText=text;// 
    element.appendChild(elementText);
    
    if (isComplete){
        elementText.className += ' complete-true';
        element.innerHTML += `<div class="compelete" onclick="completeTask(${id})">
        <input type="checkbox" checked>
        </div>`;
    } else{
        element.innerHTML += `<div class="compelete" onclick="completeTask(${id})">
        <input type="checkbox"  >
   </div>`;
    }
    element.innerHTML += `<div class="compelete" onclick="deleteItem (${id})">
    <i class="far fa-trash-alt"></i>
   </div>`;

    var area = document.getElementsByClassName('task-area')[0];
    area.appendChild(element);
}



function addTask(){
    var text = document.getElementsByClassName('input')[0];
   var task = new Task(tasks.length , text.value, false);
   text.value = '';
   tasks.push(task);
   showTasks();
}

function completeTask(index){
    console.log(index);
    tasks[index].isComplete= true;
    showTasks();
}





    function deleteItem(id) {
 
        console.log(id);
          var removedItems = tasks.splice(id, 1);
        console.log(tasks);
        console.log(removedItems);
        showTasks();
    }
showTasks();
