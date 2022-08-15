const calcCommission = require("./calcCommission.js");
const numeral = require("numeral");

const getCashOutJuridicalCommission = (operation, cashOutJuridicalConfig) => {
  if (
    Math.ceil(operation * cashOutJuridicalConfig.percents) / 100 >
    cashOutJuridicalConfig.min.amount
  ) {
    return calcCommission(operation, cashOutJuridicalConfig);
  } else {
    return numeral(cashOutJuridicalConfig.min.amount).format("0.00");
  }
};

module.exports = getCashOutJuridicalCommission;
