function checkForSpam(str) {
  "use strict";
  const message =
    str.toLowerCase().includes("sale") || str.toLowerCase().includes("spam");
  return message;
}
