let balance = 0;

const button = document.querySelector("button");
const balanceText = document.querySelectorAll("h1")[1];

button.addEventListener("click", () => {
  balance += 1;
  balanceText.innerText = "$" + balance;
});
