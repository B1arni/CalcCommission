const calcCommission = require("./calcCommission.js");
const numeral = require("numeral");
const getWeek = require("../node_modules/date-fns/getWeek");
const parseISO = require("../node_modules/date-fns/parseISO");

const getCashOutNaturalCommission = (
  addData,
  date,
  user_id,
  amount,
  cashOutNaturalConfig
) => {
  const currentWeekNumber = getWeek(parseISO(date));

  for (let i = 0; i < addData.length; i++) {
    if (addData[i].userID === user_id) {
      for (let j = 0; j < addData[i].weeks.length; j++) {
        if (addData[i].weeks[j].week === currentWeekNumber) {
          if (
            addData[i].weeks[j].weekLimit > 0 &&
            addData[i].weeks[j].weekLimit < amount
          ) {
            const currentWeekLimit = addData[i].weeks[j].weekLimit;
            addData[i].weeks[j].weekLimit =
              addData[i].weeks[j].weekLimit - amount;

            return calcCommission(
              amount - currentWeekLimit,
              cashOutNaturalConfig
            );
          } else if (
            addData[i].weeks[j].weekLimit > 0 &&
            addData[i].weeks[j].weekLimit - amount < 0
          ) {
            addData[i].weeks[j].weekLimit =
              addData[i].weeks[j].weekLimit - amount;

            return calcCommission(
              amount - addData[i].weeks[j].weekLimit,
              cashOutNaturalConfig
            );
          } else if (addData[i].weeks[j].weekLimit < 0) {
            return calcCommission(amount, cashOutNaturalConfig);
          } else if (addData[i].weeks[j].weekLimit > 0) {
            addData[i].weeks[j].weekLimit =
              addData[i].weeks[j].weekLimit - amount;

            return numeral(0).format("0.00");
          }
        }
      }
    }
  }
};

module.exports = getCashOutNaturalCommission;
