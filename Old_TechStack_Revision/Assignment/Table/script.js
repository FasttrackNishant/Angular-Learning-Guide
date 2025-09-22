console.log('hello');

// let firstNameInput = window.prompt("Enter your first name : ")
// let lastNameInput = window.prompt("Enter Your Lastname : ")
// let marksInput  = parseInt(window.prompt("Enter Your Marks : "))

// const showResult = ((marksInput) => {
// 	if (marksInput > 90) return 'Pass';
// 	else return 'Fail';
// });

// let firstName = document.getElementById("1").innerHTML = firstNameInput;
// let lastName = document.getElementById("2").innerHTML = lastNameInput;
// let marks = document.getElementById("3").innerHTML = marksInput;
// document.getElementById("4").innerHTML = showResult();

// take input

const getUserInput = () => {
	const userFirstName = window.prompt('Enter your first name: ');
	const userLastName = window.prompt('Enter your last name: ');
	const userMarks = parseInt(window.prompt('Enter your marks: '));

	//validation

	if (!userFirstName || !userLastName || NaN(userMarks)) {
		console.error('Wrong Input');
		return;
	}

	return { userFirstName, userLastName, userMarks };
};

// calculate result
const calculateResult = (marks) => {
	if (marks > 90) return 'Pass';
	else return 'Fail';
};

const updateDOM = (userData) => {
	document.getElementById('1').innerHTML = userData.userFirstName;
	document.getElementById('2').innerHTML = userData.userLastName;
	document.getElementById('3').innerHTML = userData.userMarks;
	document.getElementById('4').innerHTML = calculateResult(
		userData.userMarks
	);
};

const main = () => {
	console.log('hello');
	const userData = getUserInput();
	if (userData) updateDOM(userData);
};

main();
