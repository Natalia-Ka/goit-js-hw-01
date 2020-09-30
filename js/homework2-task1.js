const getItemsString = function (array) {
  "use strict";
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    array(i) = `${i + 1}` - `${array[i]}`;
  }

  console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
  console.log(getItemsString([5, 10, 15]));
};
