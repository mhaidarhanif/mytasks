console.log("MyTasks");

(function () {
    // Display date & time
    const today = dayjs(new Date()).format('dddd, D MMMM YYYY H:m')
    $("#today").text(today)

})();