(function () {
    // Display date & time
    const today = dayjs(new Date()).format('dddd, D MMMM YYYY H:m')
    $("#today").text(today)
})();

console.log("MyTasks");

let DATA = {
    tasks: [{
            text: "Action to to",
            date: new Date(),
            complete: false
        },
        {
            text: "Action to to",
            date: new Date(),
            complete: true
        },
        {
            text: "Action to to",
            date: new Date(),
            complete: false
        }
    ]
}

const container = $("#container")
const title = $("#title")
const date = $("#date")
const nav = $("#nav")
const app = $("#app")
const tasks = $("#tasks")
const add = $("#add")
const addInput = $("#add-input")
const addButton = $("#add-button")

add.on("submit", (event) => {
    event.preventDefault()
})