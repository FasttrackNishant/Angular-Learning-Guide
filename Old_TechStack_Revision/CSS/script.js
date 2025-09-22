
let a = 34;
let element = document.getElementById("container");
x=200
y=455


// let a = window.pro
// element.innerHTML += `${a} ${new Date()}`

let first = parseInt(window.prompt("enter First number",100));
let second = parseInt(window.prompt('Enter second number', 200));

let ans = first + second;

console.log("ans is",ans)


function display()
{
    console.log('this is display');
}

// const  display=(()=>
// {
// })

display();


// to display sum of 1 to n number

const sumN = (n) => {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
};

let showSum = document.getElementById('Result').innerHTML =  `The sum of Number is = ${sumN(10)}`;

// 