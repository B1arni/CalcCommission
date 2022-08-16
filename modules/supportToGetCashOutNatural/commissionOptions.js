const numeral = require("numeral");
const calcCommission = require("../calcCommission.js");

const commissionOptions = (currentWeekLimit, amount, cashOutNaturalConfig) => {
  if (currentWeekLimit > 0 && currentWeekLimit < amount) {
    return calcCommission(amount - currentWeekLimit, cashOutNaturalConfig);
  } else if (currentWeekLimit > 0 && currentWeekLimit - amount < 0) {
    return calcCommission(amount - currentWeekLimit, cashOutNaturalConfig);
  } else if (currentWeekLimit < 0) {
    return calcCommission(amount, cashOutNaturalConfig);
  } else if (currentWeekLimit > 0) {
    return numeral(0).format("0.00");
  }
};

module.exports = commissionOptions;
