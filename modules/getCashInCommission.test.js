const getCashInCommission = require("./getCashInCommission");

const testConfig = { percents: 0.03, max: { amount: 5, currency: "EUR" } };
const testAmount1 = { amount: 200.0, currency: "EUR" };
const testAmount2 = { amount: 1000000.0, currency: "EUR" };

test("Function returns 0.06 in case of operation amount equals 200", () => {
  expect(getCashInCommission(testAmount1.amount, testConfig)).toBe("0.06");
});

test("Function returns 5 in case of operation amount equals 1000000", () => {
  expect(getCashInCommission(testAmount2.amount, testConfig)).toBe("5.00");
});
