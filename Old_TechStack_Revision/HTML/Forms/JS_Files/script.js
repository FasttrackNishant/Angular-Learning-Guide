document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#register-form")
    
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        console.log(formData)
        for (let item of formData) {
            console.log(item)
        }
    })

        
})






// let btn = document.getElementById('myBtn');
// btn.addEventListener('click', () => {
// 	console.log('button cliked');
// });

// // to display 1 to 100 even number in p tag

// function getEvenNumbers() {
// 	let str = '';
// 	for (i = 0; i < 100; i++) {
// 		if (i % 2 == 0) {
// 			str += ' ' + i;
// 		}
// 	}
// 	return str;
// }

// let p_list = document.getElementById('even-numbers');
// p_list.innerHTML = getEvenNumbers();

// const cars = [232, 112, 400, 500, 100];
// console.log(cars);
// cars.forEach((element) => {
// 	console.log(element);
// });
// cars.sort();
// console.log(cars);

// cars.push(23);
// cars.map((item) => {
// 	console.log('Value is ' + item);
// });
// console.log(cars);


