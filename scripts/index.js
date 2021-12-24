let expenses = [
  {
    id: 1,
    category: "Shopping",
    description: "Nintendo Switch",
    amount: 500,
  },
  {
    id: 2,
    category: "Food",
    description: "Chifa",
    amount: 20,
  },
  {
    id: 3,
    category: "Shopping",
    description: "TV",
    amount: 300,
  },
];

{/* <li class="content__item">
  <div class="content__detail">
    <h3>Shopping</h3>
    <p>Nintendo Switch</p>
  </div>
  <div class="content__actions">
    <p>$10</p>
    <a class="" href="#">
      Eliminar
    </a>
  </div>
</li> */}

const createExpenseElement = (expense) => {
  const expenseElement = document.createElement("li");
  const contentElement = document.createElement("div");
  const categoryElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const actionsElement = document.createElement("div");
  const amountElement = document.createElement("p");
  const deleteElement = document.createElement("a");

  expenseElement.className = "content__item";
  contentElement.className = "content__detail";
  actionsElement.className = "content__actions";
  
  categoryElement.textContent = expense.category;
  descriptionElement.textContent = expense.description;
  amountElement.textContent = `$ ${expense.amount}`;
  deleteElement.textContent = "Eliminar";
  deleteElement.setAttribute("href", "#");
  
  contentElement.append(categoryElement, descriptionElement);
  actionsElement.append(amountElement, deleteElement);
  expenseElement.append(contentElement, actionsElement);

  deleteElement.addEventListener('click', () => {
    deleteExpense(expense.id);
    renderExpenses(expenses);
  })

  return expenseElement;
};

const renderExpenses = (expenses) => {
  const jsExpenses = document.querySelector(".js-expenses");
  
  const expensesList = document.createElement("ul");
  expensesList.className = "content__list";
  
  expenses.forEach((expense) => {
    const expenseElement = createExpenseElement(expense);
    expensesList.append(expenseElement);
  });

  jsExpenses.innerHTML = "";
  jsExpenses.append(expensesList);
};

const deleteExpense = (id) => {
  expenses = expenses.filter(expense => expense.id !== id)
}

renderExpenses(expenses);


