const getWeek = require("../../node_modules/date-fns/getWeek");
const parseISO = require("../../node_modules/date-fns/parseISO");

const createUserOperation = (date, user_id, cashOutNaturalConfig) => {
  return {
    userID: user_id,
    week: {
      weekID: getWeek(parseISO(date)),
      weekLimit: cashOutNaturalConfig.week_limit.amount,
    },
  };
};

module.exports = createUserOperation;
