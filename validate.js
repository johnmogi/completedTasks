function clear() {
	stage.innerHTML = '';
	localStorage.clear();
	taskArray.length = 0;
	returnedArray.length = 0;
}

function validate() {
	if (!taskName.value || !taskDetail.value) {
		creator.classList.add('was-validated');
		messageBoard.innerText = 'Please Fill All Inputs';
		messageBoard.style.color = '#dc3545';
		// vaildBypass.innerText = ("please Check this field again")
		// vaildBypass.style.color = "#dc3545"
		// alert("Please Fill All Inputs")
		checkValid = false;
	} else {
		messageBoard.innerText = "...I'm Listening...";
		messageBoard.style.color = '#000';
		creator.classList.add('needs-validation');
		checkValid = true;
	}
	checkTimeForValid();
}

function checkTimeForValid() {
	let date = new Date();
	console.info(+date);

	var myDate = dueDate.value;
	console.info(myDate);

	var myDateUpdate = new Date(myDate);
	console.info(+myDateUpdate);

	if (myDateUpdate < date) {
		messageBoard.innerText = 'please choose a future date';
		messageBoard.style.color = '#dc3545';
		// dueDate.style.background = "#dc3545"
		checkValid = false;
		console.info('false');
	} else {
		checkValid = true;
		console.info('true');
	}
}
// console.info(myDateUpdate);
// myDate = myDate.split('-');
// new Date(parseInt(myDate[2], 10), parseInt(myDate[1], 10) - 1, parseInt(myDate[0]), 10).getTime();

// const datenow = dueDate.value.split("-");

function timeValid() {
	let checkValid = false;

	if ((dueDate.value == '', yearFromInput > yyyy)) {
		// yearFromInput < yyyy ||
		// monthFromInput < mm,
		// yearFromInput = yyyy &&
		// monthFromInput < mm)
		// ,
		// yearFromInput == yyyy &&
		// monthFromInput == mm &&
		// dayFromInput < dd) {
		//    if (monthFromInput >= mm) {
		//  {

		vaildBypass.innerText = 'please choose a future date';
		vaildBypass.style.color = '#dc3545';
		// dueDate.style.background = "#dc3545"
		checkValid = false;
	} else {
		checkValid = true;
	}
}
