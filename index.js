const getCashOutJuridicalCommission = require("./modules/getCashOutJuridicalCommission.js");
const getCashInCommission = require("./modules/getCashInCommission.js");
const getCashOutNaturalCommission = require("./modules/getCashOutNaturalCommission");
const inputArr = require("./inputArr.json");
const urls = require("./urls.js");

const commssionCalc = (operationsArray) => {
  operationsArray.forEach((operationData) => {
    const { date, user_id, user_type, type, operation } = operationData;

    switch (type) {
      case "cash_in":
        fetch(urls.cashInConfig)
          .then((response) => response.json())
          .then((data) => console.log(getCashInCommission(operation, data)));
        break;
      case "cash_out":
        if (user_type === "juridical") {
          fetch(urls.cashOutJuridicalConfig)
            .then((response) => response.json())
            .then((data) =>
              console.log(getCashOutJuridicalCommission(operation, data))
            );
          break;
        } else {
          fetch(urls.cashOutNaturalConfig)
            .then((response) => response.json())
            .then((data) => {
              console.log(
                getCashOutNaturalCommission(
                  operationsArray,
                  user_id,
                  date,
                  type,
                  operation,
                  data
                )
              );
            });
          break;
        }
    }
  });
};

commssionCalc(inputArr);
