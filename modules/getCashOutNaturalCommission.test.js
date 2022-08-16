const getCashOutNaturalCommission = require("./getCashOutNaturalCommission.js");

const testArr = [
  {
    date: "2016-01-05",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 1500.0, currency: "EUR" },
  },
  {
    date: "2016-01-06",
    user_id: 2,
    user_type: "juridical",
    type: "cash_out",
    operation: { amount: 300.0, currency: "EUR" },
  },
  {
    date: "2016-01-06",
    user_id: 2,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 800, currency: "EUR" },
  },
];

const testWeekLimitsData = [];

const testConfig = {
  percents: 0.3,
  week_limit: { amount: 1000, currency: "EUR" },
};

test("Functions returns '1.50' in case of operation amount equals 1500", () => {
  expect(
    getCashOutNaturalCommission(
      testWeekLimitsData,
      testArr[0].date,
      testArr[0].user_id,
      testArr[0].operation.amount,
      testConfig
    )
  ).toBe("1.50");
});

test("Functions returns '0.00' in case of operation amount equals 300, and week limit wasn't exceeded", () => {
  expect(
    getCashOutNaturalCommission(
      testWeekLimitsData,
      testArr[1].date,
      testArr[1].user_id,
      testArr[1].operation.amount,
      testConfig
    )
  ).toBe("0.00");
});

test("Functions returns '2.70' in case of operation amount equals 800, and week limit will be exceeded after operation", () => {
  expect(
    getCashOutNaturalCommission(
      testWeekLimitsData,
      testArr[2].date,
      testArr[2].user_id,
      testArr[2].operation.amount,
      testConfig
    )
  ).toBe("0.30");
});
