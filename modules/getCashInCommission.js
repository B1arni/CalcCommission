const numeral = require("numeral");
const calcCommission = require("./calcCommission.js");

const getCashInCommission = (operation, cashInConfig) => {
  if (calcCommission(operation, cashInConfig) < cashInConfig.max.amount) {
    return calcCommission(operation, cashInConfig);
  } else {
    return numeral(cashInConfig.max.amount).format("0.00");
  }
};

module.exports = getCashInCommission;
