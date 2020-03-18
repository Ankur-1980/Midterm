// DOM Variables
// form variables
const descriptionInput = document.querySelector('#description-input');
const amountInput = document.querySelector('#amount-input');
const btn = document.querySelector('#btn');
const transactionForm = document.querySelector('#transaction-form');

// main total variables
const balance = document.querySelector('#balance');
const incomeTotal = document.querySelector('#income');
const expensesTotal = document.querySelector('#expenses');

// variables for the different lists
const historyList = document.querySelector('#history-list');
const categoryLists = document.getElementsByClassName('cat-list');
const entList = document.querySelector('#ent-list');
const incList = document.querySelector('#inc-list');
const foodList = document.querySelector('#food-list');
const clothingList = document.querySelector('#clothing-list');
const billsList = document.querySelector('#bills-list');

// category totals
const incTotal = document.querySelector('#inc-total');
const entTotal = document.querySelector('#ent-total');
const foodTotal = document.querySelector('#food-total');
const clothingTotal = document.querySelector('#clothing-total');
const billsTotal = document.querySelector('#bills-total');

let transactionID = 0;

const dummyTransactions = [
	{ id: 1, desc: 'Flower', category: 'food', amount: -20 },
	{ id: 2, desc: 'Salary', category: 'income', amount: 300 },
	{ id: 3, desc: 'Book', category: 'clothing', amount: -10 },
	{ id: 4, desc: 'Camera', category: 'bills', amount: -150 },
	{ id: 5, desc: 'Movie', category: 'entertainment', amount: -50 },
	{ id: 6, desc: 'Freelance', category: 'income', amount: 150 },
];

let transactions = dummyTransactions;

// add transactions to DOM
function addTransactionDOM(transaction) {
	// get sign
	const sign = transaction.amount < 0 ? '-' : '+';

	// create new li element
	const item = document.createElement('li');

	// add class based on value
	item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

	// add innerHTML of item
	item.innerHTML = `${transaction.desc} <span>${sign}${Math.abs(transaction.amount)}</span> <span>${
		transaction.category
	}</span><button class='delete-btn' onclick='removeTransaction(${transaction.id})'>x</button>`;

	// add to DOM
	historyList.appendChild(item);
}

// add transactions to categories
function categorize(transaction) {
	// create li
	const item = document.createElement('li');

	// add innerHTML
	item.innerHTML = `${transaction.desc} 
    <span>-$${Math.abs(transaction.amount)}
	</span> `;

	let categories = transaction.category;

	switch (categories) {
		case 'entertainment':
			entList.appendChild(item);
			break;
		case 'food':
			foodList.appendChild(item);
			break;
		case 'clothing':
			clothingList.appendChild(item);
			break;
		case 'bills':
			billsList.appendChild(item);
			break;
		case 'income':
			incList.appendChild(item);
			break;
		default:
			break;
	}
}

function initialize() {
	historyList.innerHTML = '';

	transactions.forEach(addTransactionDOM);
	transactions.forEach(categorize);
}

initialize();

transactionForm.addEventListener('submit', addTransactionDOM);
