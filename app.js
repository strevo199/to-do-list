const form = document.querySelector('#task-form'),
      filter = document.querySelector('#filter'),
      taskList = document.querySelector('.collection'),
      clearBtn= document.querySelector('.clear-btn');

//Listener to LS;
document.addEventListener('DOMContentLoaded',Store.displayTasks)
//listeners to submit;
form.addEventListener('submit',(e) =>{
    const taskInput = document.querySelector('#taskInput').value;
    
    const task = new Task(taskInput);
    //init UI
    const ui  = new UI()
    if (taskInput === '') {
        ui.showAlert('Please Add a Task','error')
        
    } else {
        //addTask
        ui.addTask(task)
        //showALert
        ui.showAlert('Task Added Successfully','success')
        ui.clearInput()
        //add to LocalStroage;
        Store.addTasks(task)
    }
    e.preventDefault()
})

//listener to COllection;
taskList.addEventListener('click',(e) =>{
    const task = new Task(taskInput);
    //init UI
    const ui  = new UI()
    ui.removeTask(e.target)
    //showAlert
    ui.showAlert('Task Successfully Removed','success');
    Store.removeTasks()
     e.preventDefault()
})

clearBtn.addEventListener('click',(e) =>{
    const task = new Task(taskInput);
    //init UI
    const ui  = new UI();
    //clearTask
    if (taskList !=='') {
        if (confirm('Are you Sure')) {
            ui.clearTask(e.target);
            ui.showAlert('All Cleared','success');
            Store.clearTasks()
        }
    }

  

    e.preventDefault()
})

filter.addEventListener('keyup',e =>{
    const task = new Task(taskInput);
    //init UI
    const ui  = new UI()
    ui.filterTask(e.target.value.toLowerCase())


    e.preventDefault()
})




