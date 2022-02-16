/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


function iceCreamShop(flavors, favorite) {
  let flavor = flavors.pop();
  // console.log(flavor);

  if(flavor === favorite) {
    return true
  } else if (flavor !== favorite) {
    return iceCreamShop(flavors)
  };
return false

}
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
