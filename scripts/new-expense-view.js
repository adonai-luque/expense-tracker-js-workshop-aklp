import STORE from "./store.js"
import DOMHandler from "./dom-handler.js";
import ExpensesView from "./expenses-view.js";

const NewExpenseView = (() => {
  const toString = () => {
    return `
    <h2>New Expense</h2>
    <form class="content__form js-form">
      <div>
        <label>Amount</label>
        <input type="number" name="amount" required />
      </div>
      <div>
        <label>Category</label>
        <input type="text" name="category" required />
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="description" required />
      </div>
      <a href="#" class="button--cancel js-cancel">Cancel</a>
      <footer class="footer">
        <button class="footer__button">Add Expense</button>
      </footer>
    </form>
    `;
  };
  const listenCancelClick = () => {
    const cancelButton = document.querySelector(".js-cancel");
    cancelButton.addEventListener("click", () => DOMHandler.load(ExpensesView));
  };
  const listenFormSubmit = () => {
    const expenseForm = document.querySelector(".js-form");
    expenseForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formElements = event.target.elements;
      const expense = {
        amount: formElements.amount.value,
        category: formElements.category.value,
        description: formElements.description.value,
      };
      STORE.addExpense(expense);
      DOMHandler.load(ExpensesView);
    });
  };
  const addListeners = () => {
    listenFormSubmit();
    listenCancelClick();
  };
  return {
    toString,
    addListeners,
  };
})();

export default NewExpenseView;