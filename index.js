const getCashOutJuridicalCommission = require("./modules/getCashOutJuridicalCommission.js");
const getCashInCommission = require("./modules/getCashInCommission.js");
const getCashOutNaturalCommission = require("./modules/getCashOutNaturalCommission.js");
const requestsArr = require("./requests/requests.js");
const fs = require("fs");

const commissionCalc = () => {
  const inputData = fs.readFileSync(process.argv[2]);
  try {
    const operationsArray = JSON.parse(inputData);

    Promise.all(requestsArr)
      .then((configs) => {
        const [cashInConfig, cashOutJuridicalConfig, cashOutNaturalConfig] =
          configs;

        const weekLimitsData = [];

        operationsArray.forEach((operationData) => {
          const { date, user_id, user_type, type, operation } = operationData;

          switch (type) {
            case "cash_in":
              console.log(getCashInCommission(operation.amount, cashInConfig));
              break;
            case "cash_out":
              if (user_type === "juridical") {
                console.log(
                  getCashOutJuridicalCommission(
                    operation.amount,
                    cashOutJuridicalConfig
                  )
                );
                break;
              } else {
                console.log(
                  getCashOutNaturalCommission(
                    weekLimitsData,
                    date,
                    user_id,
                    operation.amount,
                    cashOutNaturalConfig
                  )
                );
                break;
              }
          }
        });
      })
      .catch(() => console.log("Fetch failed"));
  } catch {
    console.log("Invalid data");
  }
};

commissionCalc();
