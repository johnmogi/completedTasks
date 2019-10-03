function deleteTask(id) {
  const delBut = document.getElementById("note" + id);
  // console.log(delBut)
  delBut.remove();
  //   deleteCard();
}

function deleteCard() {
  div.id = "note" + returnedArray[i].id.remove;
  returnedArray.splice(id);
  draw();
}

function buildTask() {
  if (checkValid === false) {
    return;
  }
  for (let i = -1; i < returnedArray.length; i++) {
    TASK_DOM = {
      // id: parseInt(Math.floor(100 + Math.random() * 900) + i),
      id: i + 10,
      Name: document.getElementById("taskName").value,
      Date: document.getElementById("dueDate").value,
      Detail: document.getElementById("taskDetail").value,
      status: "active"
    };
    // if (!TASK_DOM[i].id === ""){ returnedArray.splice(0) }
  }
  returnedArray.push(TASK_DOM);

  for (let i = 0; i < returnedArray.length; i++) {
    // localStorage.setItem(JSON.stringify(taskArray));
    localStorage.setItem(
      JSON.stringify(returnedArray[i].id),
      JSON.stringify(returnedArray[i])
    );
  }
}

function draw() {
  validate();
  if (checkValid === false) {
    returnedArray.length = 0;
    // form.preventDefault();
    // creator.stopPropagation();
    return;
  }
  // timeValid()
  buildTask();
  generate();
}

function redraw() {
  if (localStorage.length < 1) {
    return;
  }
  if (returnedArray.length > 1) {
    return;
  }
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var item = JSON.parse(localStorage.getItem(key));
    // if (item == "") {return}
    returnedArray.push(item);
  }
  generate();
}
