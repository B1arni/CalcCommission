const calcCommission = require("./calcCommission.js");

const testConfig = { percents: 0.03, max: { amount: 5, currency: "EUR" } };
const testAmount = { amount: 200.0, currency: "EUR" };

test("Commission for 200 euro with 0.03% equals 0.06", () => {
  expect(calcCommission(testAmount.amount, testConfig)).toBe("0.06");
});
