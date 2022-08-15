const urls = require("../constants/urls");

// const requestCashInConfig = fetch(urls.cashInConfig)
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((err) => {
//     throw err;
//   });
// const requestCashOutJuridicalConfig = fetch(urls.cashOutJuridicalConfig)
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((err) => {
//     throw err;
//   });
// const requestCashOutNaturalConfig = fetch(urls.cashOutNaturalConfig)
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((err) => {
//     throw err;
//   });

// const requestsArr = [
//   requestCashInConfig,
//   requestCashOutJuridicalConfig,
//   requestCashOutNaturalConfig,
// ];

const requestsArr = urls.map((url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      throw err;
    })
);

module.exports = requestsArr;
