const fruitTable = document.getElementById('fruit-table');
const fruitNameInput = document.getElementById('fruit-name');
const fruitCountInput = document.getElementById('fruit-count');
const fruitPriceInput = document.getElementById('fruit-price');
const totalPriceCell = document.getElementById('total-price');

fruitTable.addEventListener('input', calculateTotalPrice);

function calculateTotalPrice() {
	const count = parseInt(fruitCountInput.value);
	const price = parseFloat(fruitPriceInput.value);
	const totalPrice = count * price;
	totalPriceCell.textContent = totalPrice.toFixed(2);
}
