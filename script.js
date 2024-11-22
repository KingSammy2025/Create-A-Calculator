let smallFriesQuantity = document.getElementById("small-fries");
let smallFriesCost = smallFriesQuantity * 5;

let mediumFriesQuantity = document.getElementById("medium-fries");
let mediumFriesCost = mediumFriesQuantity * 13;

let largeFriesQuantity = document.getElementById("large-fries");
let largeFriesCost = largeFriesQuantity * 20;

let waterQuantity = document.getElementById("water");
let waterCost = waterQuantity * 1;

let coldDrinksQuantity = document.getElementById("cold-drinks");
let coldDrinksCost = coldDrinksQuantity * 4;

let stuffedMushroomsQuantity = document.getElementById("stuffed-mushrooms");
let stuffedMushroomsCost = stuffedMushroomsQuantity * 9;

let salmonQuantity = document.getElementById("salmon");
let salmonCost = salmonQuantity * 25;

let lobstersQuantity = document.getElementById("lobsters");
let lobstersCost = lobstersQuantity * 30;

let friedShrimpQuantity = document.getElementById("fried-shrimp");
let friedShrimpCost = friedShrimpQuantity * 8.99;

let friedLobsterQuantity = document.getElementById("fried-lobster");
let friedLobsterCost = friedLobsterQuantity * 9.99;

let fishAndChipsQuantity = document.getElementById("fish-and-chips");
let fishAndChipsCost = fishAndChipsQuantity * 10.95;

let crabQuantity = document.getElementById("crab");
let crabCost = crabQuantity * 20;

let perlChickenBurgerQuantity = document.getElementById("perl-chicken=burger");
let perlChickenBurgerCost = perlChickenBurgerQuantity * 11.94;

let beefBurgerQuantity = document.getElementById("beef-burger");
let beefBurgerCost = beefBurgerQuantity * 6.99;

let chickenBurgerQuantity = document.getElementById("chicken-burger");
let chickenBurgerCost = chickenBurgerQuantity * 7.99;

let cheeseBurgerQuantity = document.getElementById("cheese-burger");
let cheeseBurgerCost = cheeseBurgerQuantity * 8.99;

let beefBaconQuantity = document.getElementById("beef-bacon");
let beefBaconCost = beefBaconQuantity * 7.99;

let veggieBurgerQuantity = document.getElementById("veggie-burger");
let veggieBurgerCost = veggieBurgerQuantity * 6.99;

let chickenAndRiceBowlQuantity = document.getElementById(
  "chicken-and-rice-bowl"
);
let chickenAndRiceBowlCost = chickenAndRiceBowlQuantity * 14.7;

let wingsAndSaladQuantity = document.getElementById("wings-and-salad");
let wingsAndSaladCost = wingsAndSaladQuantity * 20.35;

let vegetableSaladQuantity = document.getElementById("vegetable-salad");
let vegetableSaladCost = vegetableSaladQuantity * 20;

let friedCalmariQuantity = document.getElementById("fried-calmari");
let friedCalmariCost = friedCalmariQuantity * 16;

let bruschettaQuantity = document.getElementById("bruschetta");
let bruschettaCost = bruschettaQuantity * 15;

let grilledSalmonQuantity = document.getElementById("grilled-salmon");
let grilledSalmonCost = grilledSalmonQuantity * 20;

let orangeIceCreamQuantity = document.getElementById("orange-ice-cream");
let orangeIceCreamCost = orangeIceCreamQuantity * 15;

let oreoBallQuantity = document.getElementById("oreo-ball");
let oreoBallCost = oreoBallQuantity * 10;

let kidsIceCreamQuantity = document.getElementById("kids-ice-cream");
let kidsIceCreamCost = kidsIceCreamQuantity * 5;

let appleDumplingQuantity = document.getElementById("apple-dumpling");
let appleDumplingCost = appleDumplingQuantity * 5;

let coconutCakeQuantity = document.getElementById("cocunut-cake");
let coconutCakeCost = coconutCakeQuantity * 6;

let cheeseCakeQuantity = document.getElementById("cheese-cake");
let cheeseCakeCost = cheeseCakeQuantity * 7;

let order = document.getElementById("order-here");
let price = document.getElementById("your-total");
let register = document.getElementById("register");
register.addEventListener("click", placeOrder);

// Process
function placeOrder() {
  let salmonQuantity = Number(document.getElementById("salmon").value);
  let salmonCost = salmonQuantity * 25;

  // Output
  let total = (price.innerHTML = total);
  console.log(total);
}

// Output
