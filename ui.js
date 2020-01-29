class Task{
    constructor(taskInput){
        this.input = taskInput
    }

}

class UI{
    addTask(task){
        const li = document.createElement('li')
        li.className = 'collection-item';
        const divMain = document.createElement('div');
        divMain.className ='main';
        divMain.appendChild(document.createTextNode(task.input))
        const divSub = document.createElement('div');
        divSub.className ='sub';
        divSub.innerHTML = `<a href = "#" class ="delete-item">Remove</a>`
        li.appendChild(divMain);
        li.appendChild(divSub);
        document.querySelector('.collection').appendChild(li)
    }

    showAlert(msg,classname){
        this.clearAlert()
        const div = document.createElement('div');
        div.className = `alert ${classname}`
        div.appendChild(document.createTextNode(msg))
        const head = document.querySelector('.heading');
        const meme = document.querySelector('.meme');
        head.insertBefore(div,meme)
        setTimeout(() =>{document.querySelector('.alert').remove()},3000)

    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }
    
    removeTask(task){
        if (task.className === 'delete-item') {
            task.parentElement.parentElement.remove() 
        }
    }

    clearTask(){
        const listItem = document.querySelector('.collection')
        while (listItem.firstChild) {
            listItem.removeChild(listItem.firstChild)
        }
}
    filterTask(task){
           
            document.querySelectorAll('.collection-item').forEach(tasks => {
                if (tasks.textContent.toLowerCase().indexOf(task) != -1) {
                    tasks.style.display = 'grid '
                    
                }else{
                    tasks.style.display = 'none'
                }    
            });
            
    }
    clearInput(){
        const taskInput = document.querySelector('#taskInput')
        taskInput.value='';
    }


}

