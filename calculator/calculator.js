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
    
  const initialValues = {
    amount: document.getElementById("loan-amount").value = 250000,
    years: document.getElementById("loan-years").value = 30,
    rate: document.getElementById("loan-rate").value = 3.75
    }
  
    document.getElementById("loan-amount").style.color = 'gray';
    document.getElementById("loan-amount").style.fontStyle = 'italic';

    document.getElementById("loan-years").style.color = 'gray';
    document.getElementById("loan-years").style.fontStyle = 'italic';

    document.getElementById("loan-rate").style.color = 'gray';
    document.getElementById("loan-rate").style.fontStyle = 'italic';

    document.getElementById("monthly-payment").style.color = 'gray';
    document.getElementById("monthly-payment").style.fontStyle = 'italic';

  calculateMonthlyPayment(initialValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(`calc monthly payments function ran for ${values}`);
  let P = values.amount;
  let iRate = values.rate/100/12;
  let num = values.years*12;

  let result = (P*iRate)/(1-Math.pow((1+iRate),(-1*num)));
  
  document.getElementById("monthly-payment").innerText = `$ ${result.toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
