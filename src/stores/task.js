import { defineStore } from "pinia";

export const useTaskStore =  defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                id: 1,
                name: 'First Task',
                is_completed: false
            },
            {
                id: 2,
                name: 'Second Task',
                is_completed: true
            }
        ],
        task: {
            id: 1,
            name: 'First Task',
            is_completed: false
        }
    }),
    getters: {

        // Task Completed 
        completedTasks: (state) => state.tasks.filter(task => task.is_completed), 

        // Task Uncompleted
        uncompletedTasks () {
            return this.tasks.filter(task =>  !task.is_completed)
        },
       
    }
})