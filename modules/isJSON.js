// function IsJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }

const isJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return new Error("Invalid input");
  }

  return JSON.parse(str);
};

module.exports = isJSON;
