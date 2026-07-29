let balance = Number(localStorage.getItem("balance")) || 0;

const balanceText = document.querySelectorAll("h1")[1];

balanceText.innerHTML = "$" + balance;

function completeTask(amount) {
  balance += amount;
  balanceText.innerHTML = "$" + balance;
  localStorage.setItem("balance", balance);
  alert("Task Completed! +$" + amount);
}
