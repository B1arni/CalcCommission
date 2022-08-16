const findCurrentUserIndex = require("./supportToGetCashOutNatural/findCurrentUserIndex.js");
const findCurrentWeek = require("./supportToGetCashOutNatural/findCurrentWeek.js");
const createUserOperation = require("./supportToGetCashOutNatural/createUserOperation.js");
const calcExceededAmount = require("./supportToGetCashOutNatural/calcExceededAmount.js");

const getCashOutNaturalCommission = (
  weekLimitsData,
  date,
  user_id,
  amount,
  cashOutNaturalConfig
) => {
  if (
    findCurrentUserIndex(weekLimitsData, user_id, date) !== -1 &&
    findCurrentWeek(weekLimitsData, date) !== undefined
  ) {
    const currentWeekLimit =
      weekLimitsData[findCurrentUserIndex(weekLimitsData, user_id, date)].week
        .weekLimit;

    weekLimitsData[
      findCurrentUserIndex(weekLimitsData, user_id, date)
    ].week.weekLimit =
      weekLimitsData[findCurrentUserIndex(weekLimitsData, user_id, date)].week
        .weekLimit - amount;

    return calcExceededAmount(currentWeekLimit, amount, cashOutNaturalConfig);
  } else if (
    findCurrentUserIndex(weekLimitsData, user_id, date) !== -1 &&
    findCurrentWeek(weekLimitsData, date) === undefined
  ) {
    weekLimitsData.push(
      createUserOperation(date, user_id, cashOutNaturalConfig)
    );

    const currentWeekLimit =
      weekLimitsData[findCurrentUserIndex(weekLimitsData, user_id, date)].week
        .weekLimit;

    weekLimitsData[
      findCurrentUserIndex(weekLimitsData, user_id, date)
    ].week.weekLimit =
      weekLimitsData[findCurrentUserIndex(weekLimitsData, user_id, date)].week
        .weekLimit - amount;

    return calcExceededAmount(currentWeekLimit, amount, cashOutNaturalConfig);
  } else if (findCurrentUserIndex(weekLimitsData, user_id, date) === -1) {
    weekLimitsData.push(
      createUserOperation(date, user_id, cashOutNaturalConfig)
    );

    const currentWeekLimit =
      weekLimitsData[findCurrentUserIndex(weekLimitsData, user_id, date)].week
        .weekLimit;

    weekLimitsData[
      findCurrentUserIndex(weekLimitsData, user_id, date)
    ].week.weekLimit =
      weekLimitsData[findCurrentUserIndex(weekLimitsData, user_id, date)].week
        .weekLimit - amount;

    return calcExceededAmount(currentWeekLimit, amount, cashOutNaturalConfig);
  }
};

module.exports = getCashOutNaturalCommission;
