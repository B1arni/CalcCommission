const getCashOutJuridicalCommission = require("./getCashOutJuridicalCommission");

const testConfig = { percents: 0.3, min: { amount: 0.5, currency: "EUR" } };
const testAmount1 = { amount: 300.0, currency: "EUR" };
const testAmount2 = { amount: 10.0, currency: "EUR" };

test("Function returns 0.90 in case of operation amount equals 300", () => {
  expect(getCashOutJuridicalCommission(testAmount1.amount, testConfig)).toBe(
    "0.90"
  );
});

test("Function returns 0.50 in case of operation amount equals 10", () => {
  expect(getCashOutJuridicalCommission(testAmount2.amount, testConfig)).toBe(
    "0.50"
  );
});
