const calcCommission = require("./calcCommission.js");
const numeral = require("numeral");
const getWeek = require("../node_modules/date-fns/getWeek");
const parseISO = require("../node_modules/date-fns/parseISO");

const getCashOutNaturalCommission = (
  operationsArray,
  user_id,
  date,
  type,
  operation,
  cashOutNaturalConfig
) => {
  const weekLimit = cashOutNaturalConfig.week_limit.amount;

  const weekOperationsArr = operationsArray
    .filter(
      (operationData) =>
        operationData.user_id === user_id &&
        getWeek(parseISO(date)) === getWeek(parseISO(operationData.date)) &&
        operationData.type === type
    )
    .map((el) => {
      return {
        operationID: el.operationID,
        userID: el.user_id,
        week: getWeek(parseISO(el.date)),
        amount: el.operation.amount,
      };
    });

  const currentWeekTransferSum = weekOperationsArr.reduce(
    (acc, transfer) => acc + transfer.amount,
    0
  );

  if (
    operation.amount > weekLimit &&
    weekOperationsArr[0].amount === operation.amount
  ) {
    return numeral(
      calcCommission(operation.amount - weekLimit, cashOutNaturalConfig)
    ).format("0.00");
  } else if (
    currentWeekTransferSum > weekLimit &&
    currentWeekTransferSum - operation.amount < weekLimit
  ) {
    return numeral(
      calcCommission(currentWeekTransferSum - weekLimit, cashOutNaturalConfig)
    ).format("0.00");
  } else if (currentWeekTransferSum > weekLimit) {
    return numeral(
      calcCommission(operation.amount, cashOutNaturalConfig)
    ).format("0.00");
  } else if (operation.amount <= weekLimit) {
    return numeral(0).format("0.00");
  }
};

module.exports = getCashOutNaturalCommission;
