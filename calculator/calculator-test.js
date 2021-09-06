
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
