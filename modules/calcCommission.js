const numeral = require("numeral");

const calcCommission = (operation, operationConfig) => {
  return numeral(Math.ceil(operation * operationConfig.percents) / 100).format(
    "0.00"
  );
};

module.exports = calcCommission;
