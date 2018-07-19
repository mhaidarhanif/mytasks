// -----------------------------------------------------------------------------
// MESSAGE

console.log("MyTasks");

// Display date & time
const today = dayjs(new Date()).format('dddd, D MMMM YYYY H:mm')
$("#today").text(today || "Unknown")

// -----------------------------------------------------------------------------
// DOM ELEMENTS

const ContainerElement = $("#container")
const TitleElement = $("#title")
const DateElement = $("#date")
const NavElement = $("#nav")
const AppElement = $("#app")
const TasksElement = $("#tasks")
const AddElement = $("#add")
const AddButtonElement = $("#add-button")

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

const SEED = {
    tasks: [{
        text: `First action to to`,
        created: new Date(),
        complete: false
    }, {
        text: `Second action to to`,
        created: new Date(),
        complete: true
    }]
}

const init = (SEED) => {
    DATA.tasks = SEED.tasks
}

// -----------------------------------------------------------------------------
// READ

const createElement = (htmlString) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

const createTask = (task, index) => {
    const status = task.complete ? "complete" : "incomplete"

    return createElement(`
        <div data-id="task-${index}" class="task ${status}">
            <button data-id="marker-${index}" class="action marker" title="${task.text}" role="checkbox"></button>
            <span>${task.text}</span>
        </div>
    `)
}


const read = () => {
    TasksElement.html("")
    const tasks = getTasks()

    tasks.forEach((task, index) => {
        const Task = createTask(task, index)
        TasksElement.append(Task)
    })
}

// -----------------------------------------------------------------------------
// ADD

const add = (event) => {
    event.preventDefault()

    const tasks = getTasks()
    const addInput = $("#add-input")
    const addInputTask = addInput.val()

    if (addInputTask) {
        addInput.val("")
        tasks.push({
            text: addInputTask,
            created: new Date(),
            complete: false
        })
        setTasks(tasks);
        read();
    }
}

// -----------------------------------------------------------------------------
// LISTENERS

AddElement.on("submit", add)

// -----------------------------------------------------------------------------
// INITIALIZER

// INITIALIZE SEED DATA
init(SEED)

// READ ALL DATA
read()