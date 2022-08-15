const urls = require("../constants/urls");

const requestsArr = urls.map((url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      throw err;
    })
);

module.exports = requestsArr;
