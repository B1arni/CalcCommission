const getWeek = require("../../node_modules/date-fns/getWeek");
const parseISO = require("../../node_modules/date-fns/parseISO");

const findCurrentWeek = (weekLimitsData, date) => {
  return weekLimitsData.find(
    (user) => user.week.weekID === getWeek(parseISO(date))
  );
};

module.exports = findCurrentWeek;
