let expenses = getExpenses();

const form = document.querySelector(".js-form");
const cancelButton = document.querySelector(".js-cancel");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const expense = {
    id: Date.now().toString(36),
    amount: formElements.amount.value,
    category: formElements.category.value,
    description: formElements.description.value,
  };

  addExpense(expense);
  location.assign("/");
});

cancelButton.addEventListener("click", () => location.assign("/"));
