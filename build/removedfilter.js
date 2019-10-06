function filterC() {
    const completedTasks = document.getElementsByClassName("completed")
    console.log(completedTasks)
};

function filterI() {
    const completedTasks = document.getElementsByClassName("completed")
    console.log(completedTasks)
};

function filterA() {
    const completedTasks = document.getElementsByClassName("completed")
    console.log(completedTasks)
};


const completed = document.getElementById('completed');
const incomplete = document.getElementById('incomplete');
const all = document.getElementById('all');

completed.addEventListener("click", filterC)


function filterCompletyedTasks() {
    for (let i = 0; i < returnedArray.length; i++) {
        let obj = returnedArray.find(obj => obj.status == "complete");
        // let objId = document.getElementById("note" + Object.id);
        obj.classList.add("completed");
        obj.id++
        // console.log(obj);

    }
}

filterCompletyedTasks()