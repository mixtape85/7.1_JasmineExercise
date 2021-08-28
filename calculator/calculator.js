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
    //Currency format (may not use - keep for future use): 
    //Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(250000),
    amount: document.getElementById("loan-amount").value = 250000,
    years: document.getElementById("loan-years").value = 30,
    rate: document.getElementById("loan-rate").value = 3.75
    }

  calculateMonthlyPayment(initialValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputValues = {
    amount: document.getElementById("loan-amount").value,
    years: document.getElementById("loan-years").value,
    rate: document.getElementById("loan-rate").value
    }

  calculateMonthlyPayment(inputValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let iRate = values.rate/100/12;
  let num = values.years*12;
  let result = ((P*iRate)/(1-Math.pow((1+iRate),(-1*num)))).toFixed(2);

  if(values.amount === '' || values.rate === '' || values.years === ''){
    alert('Blank input! Please provide values for all inputs.');
  }

  if(values.rate <=0 || values.rate >100){
    alert('Invalid input! Yearly rate must be between 0% and 100%.');
  } else{
    if(isNaN(result)){
      alert('Invalid input! Use only numbers and decimals!');
    }
  }

  updateMonthly(result);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {  
  document.getElementById("monthly-payment").innerText = `$ ${parseFloat(monthly).toLocaleString()}`;
}
