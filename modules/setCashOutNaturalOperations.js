const getWeek = require("../node_modules/date-fns/getWeek");
const parseISO = require("../node_modules/date-fns/parseISO");

const setCashOutNaturalOperations = (operationsArray, cashOutNaturalConfig) => {
  const users = Array.from(
    new Set(
      operationsArray
        .filter(
          (operationData) =>
            operationData.type === "cash_out" &&
            operationData.user_type === "natural"
        )
        .map((operationData) => operationData.user_id)
    )
  );

  const getWeeks = (userID) => {
    return Array.from(
      new Set(
        operationsArray
          .filter((operationData) => {
            if (
              operationData.user_id === userID &&
              operationData.user_type === "natural" &&
              operationData.type === "cash_out"
            ) {
              return operationData;
            }
          })
          .map((operationData) => getWeek(parseISO(operationData.date)))
      )
    ).map((week) => {
      return { week: week, weekLimit: cashOutNaturalConfig.week_limit.amount };
    });
  };

  const addData = users.map((user) => {
    return { userID: user, weeks: getWeeks(user) };
  });

  return addData;
};

module.exports = setCashOutNaturalOperations;
