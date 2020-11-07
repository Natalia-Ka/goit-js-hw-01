const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let maxImus = 0;
  let lider = "";
  for (const staff in employees) {
    if (employees[staff] > maxImus) {
      maxImus = employees[staff];
      lider = staff;
    }
  }
  return lider;
};
