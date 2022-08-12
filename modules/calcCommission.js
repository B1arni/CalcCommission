const calcCommission = (operation, operationConfig) => {
  return (operation * operationConfig.percents) / 100;
};

module.exports = calcCommission;
