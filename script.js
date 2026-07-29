let balance = 0;

function completeTask(amount) {
  balance += amount;
  document.getElementById("balance").textContent = balance;
  alert("Task Completed! +$" + amount);
}
