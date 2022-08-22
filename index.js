const getCashOutJuridicalCommission = require("./modules/getCashOutJuridicalCommission.js");
const getCashInCommission = require("./modules/getCashInCommission.js");
const getCashOutNaturalCommission = require("./modules/getCashOutNaturalCommission.js");
const requests = require("./requests/requests.js");
const fs = require("fs");

const commissionCalc = () => {
  if (fs.existsSync(process.argv[2])) {
    const path = fs.readFileSync(process.argv[2]);
    try {
      const operations = JSON.parse(path);

      Promise.all(requests)
        .then((configs) => {
          const [cashInConfig, cashOutJuridicalConfig, cashOutNaturalConfig] =
            configs;

          const weekLimitsData = [];

          operations.forEach((operationData) => {
            const { date, user_id, user_type, type, operation } = operationData;

            switch (type) {
              case "cash_in":
                console.log(
                  getCashInCommission(operation.amount, cashInConfig)
                );
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
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("Invalid path to file");
  }
};

commissionCalc();
