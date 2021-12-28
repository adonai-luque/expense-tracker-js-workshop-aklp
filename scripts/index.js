// let expenses = getExpenses();
// renderExpenses(expenses);

const ExpensesPage = (() => {
  const expenses = [1, 2, 3];
  const toString = () => {
    return `
      <h1>Expenses Page</h1>
      <ul>
        ${expenses.map((e) => `<li>${e}</li>`).join("")}
      </ul>
    `;
  }
  const addExpense = (expense) => expenses.push(expense)
  return {
    toString,
    addExpense,
  };
})();

const newPage = (() => {
  const toString = () => {
    return `
      <h1>New Page</h1>

      
    `
  }
  return {
    toString
  }
})();

const root = document.querySelector("#root");

const load = (module) => root.innerHTML = module;
load(newPage)