window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  const values = {
    amount: 250000,
    years: 30,
    rate: 3.75
  }  

  amountDisplay = document.getElementById("loan-amount").value;
  yearsDisplay = document.getElementById("loan-years").value;
  rateDisplay = document.getElementById("loan-rate").value;

  amountDisplay.value = values.amount;
  yearsDisplay.value = values.years;
  rateDisplay.value = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  
  const currentInput = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentInput));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let iRate = values.rate/100/12;
  let num = values.years*12;
  let result = ((P*iRate)/(1-Math.pow((1+iRate),(-1*num)))).toFixed(2);

  return result;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {  
  const paymentDisplay = document.getElementById("monthly-payment");

  paymentDisplay.innerText = `$ ${monthly}`;
}
