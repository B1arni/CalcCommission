const calcCommission = require("./calcCommission.js");

const getCashOutJuridicalCommission = (operation, cashOutJuridicalConfig) => {
  if (
    Math.ceil(operation * cashOutJuridicalConfig.percents) / 100 >
    cashOutJuridicalConfig.min.amount
  ) {
    return calcCommission(operation, cashOutJuridicalConfig);
  }
};

module.exports = getCashOutJuridicalCommission;
