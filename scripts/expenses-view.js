import STORE from "./store.js"
import DOMHandler from "./dom-handler.js";
import NewExpenseView from "./new-expense-view.js";

const ExpensesView = (() => {
  const sortExpenses = () =>
    STORE.expenses.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  const renderExpense = (expense) => `
    <li class="content__item">
      <div class="content__detail">
        <h3>${expense.category}</h3>
        <p>${expense.description}</p>
      </div>
      <div class="content__actions">
        <p>$${expense.amount}</p>
        <a class="js-delete" href="#" data-id=${expense.id}>Eliminar</a>
      </div>
    </li>
  `;
  const toString = () => {
    const renderedExpenses = sortExpenses().map(renderExpense).join("");
    return `
      <h2>Expenses</h2>
      <ul class="content__list">
        ${renderedExpenses}
      </ul>
      <footer class="footer">
        <button class="footer__button js-new">New Expense</button>
      </footer>
    `;
  };
  const listenDeleteClick = () => {
    const deleteButtons = document.querySelectorAll(".js-delete");
    deleteButtons.forEach((db) =>
      db.addEventListener("click", (event) => {
        STORE.deleteExpense(event.target.dataset.id);
        DOMHandler.load(ExpensesView);
      })
    );
  };
  const listenNewExpenseClick = () => {
    const newExpenseButton = document.querySelector(".js-new");
    newExpenseButton.addEventListener("click", () => DOMHandler.load(NewExpenseView));
  };
  const addListeners = () => {
    listenDeleteClick();
    listenNewExpenseClick();
  };
  return {
    toString,
    addListeners,
  };
})();

export default ExpensesView;