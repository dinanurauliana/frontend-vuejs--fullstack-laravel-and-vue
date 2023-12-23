<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask />

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" />

                    <!-- shoe togle button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn sm btn-secondary" @click="showComppletedTasks = !showComppletedTasks">
                            <span v-if="!showComppletedTasks"> Show completed</span>
                            <span v-else> Hide completed</span>
                        </button>
                    </div>

                    <!-- List of completed tasks -->

                    <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showComppletedTasks" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import { useTaskStore } from "../stores/task"
import Tasks from "../components/tasks/Tasks.vue"
import NewTask from "../components/tasks/NewTask.vue"
import { storeToRefs } from "pinia"


const store = useTaskStore()
const { completedTasks, uncompletedTasks } = storeToRefs(store)
const { fetchAllTasks } = store


// store.$patch({

//     task: {
//         name: "Fisrt task updated using $patch",
//         is_completed: true
//     }
// })

// const tasks = ref([])

onMounted(async () => {
    await fetchAllTasks()
})


// const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))

// const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))

const showToggleCompletedBtn = computed(() => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0)

const completedTasksIsVisible = computed(() => uncompletedTasks.value.length == 0 || completedTasks.value.length > 0)

const showComppletedTasks = ref(false)

</script>