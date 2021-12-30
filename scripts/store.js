const IdGenerator = (() => {
  let id = 0;
  const currentId = () => id;
  const nextId = () => ++id;
  return {
    currentId,
    nextId,
  };
})();

const DEFAULT_EXPENSES = [
  {
    id: IdGenerator.nextId(),
    category: "Shopping",
    description: "Nintendo Switch",
    amount: 500,
    createdAt: new Date("2020-01-27"),
  },
  {
    id: IdGenerator.nextId(),
    category: "Food",
    description: "Chifa",
    amount: 20,
    createdAt: new Date("2020-01-26"),
  },
  {
    id: IdGenerator.nextId(),
    category: "Shopping",
    description: "TV",
    amount: 300,
    createdAt: new Date("2020-01-25"),
  },
]

const STORE = {
  expenses: JSON.parse(localStorage.getItem("expenses")) || DEFAULT_EXPENSES,
  addExpense(expense) {
    this.expenses.push({
      id: IdGenerator.nextId(),
      ...expense,
      createdAt: new Date(),
    });
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  },
  deleteExpense(id) {
    this.expenses = this.expenses.filter(
      (expense) => expense.id !== parseInt(id)
    );
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  },
};

export default STORE;