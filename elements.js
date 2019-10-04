document.addEventListener('DOMContentLoaded', () => {
	const butonSub = document.getElementById('butonSub');
	const creator = document.getElementById('creator');
	butonSub.addEventListener('click', draw);
	// butonSub.addEventListener("click", timeValid2)
	butonRes.addEventListener('click', clear);
	window.addEventListener('load', redraw);

	const buttonClose = document.getElementsByClassName('close');
	const messageBoard = document.getElementById('messageBoard');
	const vaildBypass = document.getElementById('vaildBypass');

	// const dueDate = document.getElementById("dueDate")
	// let datenow = dueDate.split("-")
	// let yearFromInput = parseInt(datenow[0])
	// let dayFromInput = parseInt(datenow[2])
	// let monthFromInput = parseInt(datenow[1])
});

let TASK_DOM = {};

const delBut = document.getElementsByClassName('close');
const taskArray = [];
const returnedArray = [];
const completed = document.getElementById('completed');
const incomplete = document.getElementById('incomplete');
const all = document.getElementById('all');

//set the default date input
// Date.now()
// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;
// let today = year + "-" + month + "-" + day;

function generate() {
	stage.innerHTML = '';

	for (let i = 0; i < returnedArray.length; i++) {
		const div = document.createElement('div');
		stage.append(div);
		div.className = 'card mb-3 col-3';
		div.id = 'note' + returnedArray[i].id;
		const butX = document.createElement('button');
		butX.innerHTML = '<i class="far fa-trash-alt"></i>';
		butX.addEventListener('click', function() {
			deleteTask(returnedArray[i].id);
		});
		butX.className = 'close';
		// butX.id = ("but" + returnedArray[i].id)
		div.append(butX);

		const div2 = document.createElement('div');
		div.append(div2);
		div2.className = 'card-header';
		div2.append(returnedArray[i].Name);

		const div3 = document.createElement('div');
		div.append(div3);
		div3.className = 'card-body';
		div3.append(returnedArray[i].Detail);

		const div4 = document.createElement('div');
		div.append(div4);
		div4.className = 'date-body';
		div4.innerHTML = '<i class="far fa-calendar"></i>';
		div4.append(returnedArray[i].Date);
	}
}
