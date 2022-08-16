const getWeek = require("../../node_modules/date-fns/getWeek");
const parseISO = require("../../node_modules/date-fns/parseISO");

const findCurrentUserIndex = (weekLimitsData, user_id, date) => {
  return weekLimitsData.findIndex(
    (user) =>
      user.userID === user_id && user.week.weekID === getWeek(parseISO(date))
  );
};

module.exports = findCurrentUserIndex;
