const getCashInCommission = require("./getCashOutJuridicalCommission");

const testConfig = { percents: 0.3, min: { amount: 0.5, currency: "EUR" } };
const testAmount1 = { amount: 300.0, currency: "EUR" };
const testAmount2 = { amount: 5.0, currency: "EUR" };

test("Function returns 0.90 in case of operation amount equals 300", () => {
  expect(getCashInCommission(testAmount1, testConfig)).toBe("0.90");
});

test("Function returns 'transfer denied' in case of operation amount 5.0", () => {
  expect(getCashInCommission(testAmount2, testConfig)).toBe("Transfer denied");
});
