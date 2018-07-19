(function () {
    // Display date & time
    const today = dayjs(new Date()).format('dddd, D MMMM YYYY H:m')
    $("#today").text(today)
})();

console.log("MyTasks");