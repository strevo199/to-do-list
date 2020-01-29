class Store{
    static getTasks(){
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks
    }

    static displayTasks(){
        const tasks = Store.getTasks();
        tasks.forEach(function (task) {
            const ui =new UI();
            ui.addTask(task)
        });
    }

    static addTasks(task){
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    static removeTasks(){
        const tasks = Store.getTasks();
        tasks.forEach((task,index) => {
            tasks.splice(index,1)
            localStorage.setItem('tasks',JSON.stringify(tasks))
        });
    }

    static clearTasks(){
        const tasks = Store.getTasks();
        localStorage.clear()
    }
}