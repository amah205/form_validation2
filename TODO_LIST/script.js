'use strick'

const taskInput =document.querySelector('.taskInput')
const addBtn = document.querySelector('.addTask')
const taskList =document.querySelector('.taskList')
const inputContainer=document.querySelector('#input-container');

loadTasks();

function addTask(){
    const task = taskInput.value.trim()

    if(task){
        createTaskElement(task)

        taskInput.value='';

        saveTasks()
    }else{
        alert('input a number')
    }
}

addBtn.addEventListener('click',addTask)

function createTaskElement(task){
    const listItem=document.createElement('li');
    // listItem.innerText=task
    listItem.innerHTML=`${task} <button class="tasklist-btn">Remove 🎇</button>`


    /*const deleteButton=document.createElement('button')
    deleteButton.textContent='Delete'
    deleteButton.classList.add('tasklist-btn')*/

    // listItem.appendChild(deleteButton)
    const deleteButton=listItem.querySelector('.tasklist-btn')

    taskList.appendChild(listItem)

    deleteButton.addEventListener('click',()=>{
        taskList.removeChild(listItem)
        saveTasks();
    })
}

function saveTasks(){
    let tasks =[];
    taskList.querySelectorAll('li').forEach(item =>{
        tasks.push(item.textContent.replace('delete','').trim())
        // console.log(item.innerText.replace('remove 🎇',''))
        // tasks=[...tasks,item.textContent.replace('remove 🎇','').trim()]
    });

    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function loadTasks(){
    const tasks =JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach(createTaskElement)
}




/*function saveTask(){
    let inputCart =[];
    addList.querySelectorAll('li').forEach(mov => {
        inputCart=[...inputCart,mov.textContent.trim()]
        console.log(inputCart)
    })

    localStorage.setItem('tasks',JSON.stringify(inputCart))
}

function loadTasks(){
    const tasks =JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach(addToList)
}




function addToList(input){
    const li =document.createElement('li')
    li.textContent=input
    console.log(li)

    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='delete';
    
    addList.appendChild(li)
        
}


inputContainer.addEventListener('click',(e)=>{
    // console.log(e.target)

    const clicked =e.target
    // console.log(clicked)
    if(addInput.value.trim()){
        if(clicked.classList.contains('add-btn')){
          
            addToList(addInput.value)
            
            addInput.value=''
            saveTask()
        }
    }
})



loadTasks();*/
