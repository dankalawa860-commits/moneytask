let balance = 0;

const button = document.querySelector("button");
const balanceText = document.querySelectorAll("h1")[1];

button.onclick = function () {
  balance++;
  balanceText.innerHTML = "$" + balance;
  alert("Task Completed! +$1");
};
