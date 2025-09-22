console.log('Hello World ');

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(`Hello Person ${this.name} , Your age is : ${this.age}`);
	}
}

let person1 = new Person('Rohan', 23);
let person2 = new Person('Rohit', 12);

person1.greet();
person2.greet();

class Student {
	firstName;
	lastName;
	marks;
	constructor(firstName, lastName, marks) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.marks = marks;
	}

	Display() {
		console.log(
			`Student Details are ${this.firstName} - ${this.lastName} - ${this.marks}`
		);
	}

	ShowResult() {
		if (this.marks > 90) {
			return 'Passed';
		} else {
			return 'Failed';
		}
	}
}

let student1 = new Student('Bill', 'Joy', 93);
let student2 = new Student('Jill', 'Roy', 33);

student1.Display();
student2.Display();

//result
console.log(`Result for ${student1.firstName} is ${student1.ShowResult()}`);
console.log(`Result for ${student1.firstName} is ${student2.ShowResult()}`);
