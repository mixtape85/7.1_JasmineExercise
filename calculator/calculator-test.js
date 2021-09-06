
it('should calculate the monthly rate correctly', function () {
  const initialValues = {
    amount: 250000,
    years: 30,
    rate: 3.75
  }
  expect(calculateMonthlyPayment(initialValues)).toEqual('1157.79');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 15,
    rate: 3.195
  }
  expect(calculateMonthlyPayment(values)).toEqual('700.00');
});


//Notes for what I want tests to do later:

// it should throw an error if inputs are invalid - input of $ or , or letters
// it should pull the values from the DOM
// it should have initial values set up and calculate an inital monthly payment

//setupInitialValues()
//it should have initial values set up and calculate an initial monthly payment
//it should change the color to gray

//calculateMonthlyPayment
// it should correctly calculate payment
// it should return 2 decimals
// it should throw an error if any value is blank
// it should throw an error if a inputs are invalid (letters, symbols, etc)
// it should throw an error if % isn't between 0-100%

//updateMonthly
//it should update the DOM with the new monthly payment
//it should be two decimal places
//it should be a string
//it should have a comma separator, if applicable


//update()
//it should update user input values and recalculate monthly payment
