// exchange rates
let rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  RWF: 1300,
  KES: 130,
  UGX: 3800,
  TZS: 2500,
  NGN: 1500,
  ZAR: 18,
  JPY: 150
};

// CONVERT FUNCTION
function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if (amount === "" || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  let result = (amount / rates[from]) * rates[to];

  // display result
  document.getElementById("result").innerText =
    amount + " " + from + " = " + result.toFixed(2) + " " + to;

  // exchange rate
  let rate = rates[to] / rates[from];
  document.getElementById("rate").innerText =
    "1 " + from + " = " + rate.toFixed(2) + " " + to;

  // timestamp
  let now = new Date();
  document.getElementById("time").innerText =
    "Updated: " + now.toLocaleString();
}
function swap() {
  let from = document.getElementById("from");
  let to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
}