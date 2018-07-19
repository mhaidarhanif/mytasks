// -----------------------------------------------------------------------------
// MESSAGE

console.log("MyTasks");

// Display date & time
const today = dayjs(new Date()).format('dddd, D MMMM YYYY H:mm')
$("#today").text(today)

// -----------------------------------------------------------------------------
// DATA STORAGE

let DATA = {
    tasks: []
}

const getTasks = () => {
    return DATA.tasks
}

const setTasks = (tasks) => {
    DATA.tasks = tasks
}

// -----------------------------------------------------------------------------
// DATA SEEDER

const seed = (tasks) => {
    DATA.tasks.push({
        text: `Action to to`,
        created: new Date(),
        complete: false
    }, {
        text: `Action to to`,
        created: new Date(),
        complete: true
    }, {
        text: `Action to to`,
        created: new Date(),
        complete: false
    })
}

// -----------------------------------------------------------------------------
// DOM ELEMENTS

const container = $("#container")
const title = $("#title")
const date = $("#date")
const nav = $("#nav")
const app = $("#app")
const tasks = $("#tasks")
const add = $("#add")
const addButton = $("#add-button")

// -----------------------------------------------------------------------------
// READ

const read = () => {

}

// -----------------------------------------------------------------------------
// ADD

add.on("submit", (event) => {
    event.preventDefault()

    const addInput = $("#add-input")
    const addInputTodo = addInput.val()
})

// -----------------------------------------------------------------------------