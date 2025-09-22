const customers1 = [
	{
		id: 1,
		name: 'Rahul Sharma',
		address: '123, Sector 11, Noida',
		city: 'Noida',
		month: 'January',
		unitsConsumed: 100,
	},
	{
		id: 2,
		name: 'Priya Gupta',
		address: '456, MG Road, Gurgaon',
		city: 'Gurgaon',
		month: 'February',
		unitsConsumed: 200,
	},
	{
		id: 3,
		name: 'Kunal Jain',
		address: '789, Sector 18, Noida',
		city: 'Noida',
		month: 'March',
		unitsConsumed: 300,
	},
	{
		id: 4,
		name: 'Sonia Singh',
		address: '321, DLF Phase 3, Gurgaon',
		city: 'Gurgaon',
		month: 'April',
		unitsConsumed: 400,
	},
	{
		id: 5,
		name: 'Rajesh Kumar',
		address: '901, Sector 21, Noida',
		city: 'Noida',
		month: 'May',
		unitsConsumed: 500,
	},
];

// customer.js
class Customer {
	constructor(id, name, address, unit, month) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.unit = unit;
		this.month = month;
	}

	calculatePrice(unit) {
		let price = 0;
		if (unit > 100) {
			price = unit * 12;
		} else if (unit <= 100) price = unit * 10;

		return price;
	}
}

export { Customer };

const tableBody = document.querySelector('.table tbody');

customers1.forEach((customerData) => {
	const row = document.createElement('tr');
	row.innerHTML = `
    <th scope="col">${customerData.id}</th>
    <td>${customerData.name}</td>
    <td>${customerData.address}</td>
    <td>${customerData.unitsConsumed}</td>
    <td>${customerData.month}</td>
    <td><button class="bg-primary text-white rounded-5">Check Bill</button></td>
  `;

	const button = row.querySelector('button');

	button.addEventListener('click', () => {
		const customer = new Customer(
			customerData.id,
			customerData.name,
			customerData.address,
			customerData.unit,
			customerData.month
		);
		const price = customer.calculatePrice(customerData.unitsConsumed);
		console.log(`The price for ${customer.name} is: ${price}`);

		const priceElement = document.createElement('p');
		priceElement.textContent = `The price for ${customer.name} is: ${price}`;
		document.body.appendChild(priceElement);
	});

	tableBody.appendChild(row);
});
