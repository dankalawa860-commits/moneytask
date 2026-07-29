let balance = localStorage.getItem("balance") || 0;

const button = document.querySelector("button");
const balanceText = document.querySelectorAll("h1")[1];

balanceText.innerHTML = "$" + balance;

button.onclick = function () {
  balance++;
  balanceText.innerHTML = "$" + balance;
  localStorage.setItem("balance", balance);
  alert("Task Completed! +$1");
};
