const numeral = require("numeral");
const calcCommission = require("./calcCommission.js");

const getCashInCommission = (operation, cashInConfig) => {
  switch (
    calcCommission(operation.amount, cashInConfig) < cashInConfig.max.amount
  ) {
    case true:
      return numeral(calcCommission(operation.amount, cashInConfig)).format(
        "0.00"
      );
    case false:
      return numeral(cashInConfig.max.amount).format("0.00");
  }
};

module.exports = getCashInCommission;
