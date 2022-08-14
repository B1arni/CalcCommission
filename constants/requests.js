const urls = require("./urls");

const requestCashInConfig = fetch(urls.cashInConfig)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => {
    throw err;
  });
const requestCashOutJuridicalConfig = fetch(urls.cashOutJuridicalConfig)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => {
    throw err;
  });
const requestCashOutNaturalConfig = fetch(urls.cashOutNaturalConfig)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => {
    throw err;
  });

const requestsArr = [
  requestCashInConfig,
  requestCashOutJuridicalConfig,
  requestCashOutNaturalConfig,
];

module.exports = requestsArr;
