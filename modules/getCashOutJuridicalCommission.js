const numeral = require("numeral");
const calcCommission = require("./calcCommission.js");

const getCashOutJuridicalCommission = (operation, cashOutJuridicalConfig) => {
  switch (
    calcCommission(operation.amount, cashOutJuridicalConfig) >
    cashOutJuridicalConfig.min.amount
  ) {
    case true:
      return numeral(
        calcCommission(operation.amount, cashOutJuridicalConfig)
      ).format("0.00");
    case false:
      return "Transfer denied";
  }
};

module.exports = getCashOutJuridicalCommission;
