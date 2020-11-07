//count total salary

const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let totalSalary = 0;
  const salaries = Object.values(employees);
  for (const salary of salaries) {
    totalSalary += salary;
  }
  return totalSalary;
};
