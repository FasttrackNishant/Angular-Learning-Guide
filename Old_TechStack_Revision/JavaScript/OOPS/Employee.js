// Employee Class

class Employee {
	name;
	basicSalary;

	constructor(name, basicSalary) {
		this.name = name;
		this.basicSalary = basicSalary;
	}

	getHRA() {
		if (this.basicSalary > 50000) {
			return (this.basicSalary * 4) / 100;
		} else if (this.basicSalary > 100000) {
			return (this.basicSalary * 6) / 100;
		}
	}
    
	getDA() {
		if (this.basicSalary > 50000) {
			return (this.basicSalary * 2) / 100;
		} else if (this.basicSalary > 100000) {
			return (this.basicSalary * 3) / 100;
		}
	}

	calculateTax() {
		if (this.basicSalary > 50000) {
			return 5;
		} else if (this.basicSalary > 100000) {
			return 10;
		}
	}

	getGrossSalary() {
		return this.basicSalary + this.getHRA() + this.getDA();
	}

	getNetSalary() {
		const grossSalary = this.getGrossSalary();
		return grossSalary - (grossSalary * this.calculateTax()) / 100;
	}

	displayDetails() {
		console.log(`Employee Name: ${this.name}`);
		console.log(`Basic Salary: ${this.basicSalary}`);
		console.log(`HRA: ${this.getHRA()}`);
		console.log(`DA: ${this.getDA()}`);
		console.log(`Tax: ${this.calculateTax()}%`);
		console.log(`Gross Salary: ${this.getGrossSalary()}`);
	}
}
let employee1 = new Employee('Ravi Smith', 50000);
employee1.displayDetails();
