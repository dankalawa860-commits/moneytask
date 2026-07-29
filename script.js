let balance = 0;

function signup() {
  let name = document.getElementById("name").value;

  if (name == "") {
    alert("Please enter your name");
    return;
  }

  alert("Welcome " + name + "!");
}

function completeTask(amount) {
  balance += amount;
  document.getElementById("balance").textContent = balance;
  alert("Task Completed! +$" + amount);
}
