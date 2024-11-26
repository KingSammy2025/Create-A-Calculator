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
let lightmode = document.getElementById("light-mode");
let darkmode = document.getElementById("dark-mode");
register.addEventListener("click", placeOrder);

// Process
function placeOrder() {
  let total = 0;

  let smallFriesQuantity = Number(document.getElementById("small-fries").value);
  let smallFriesCost = smallFriesQuantity * 5;
  total += smallFriesCost;

  let mediumFriesQuantity = Number(
    document.getElementById("medium-fries").value
  );
  let mediumFriesCost = mediumFriesQuantity * 13;
  total += mediumFriesCost;

  let largeFriesQuantity = Number(document.getElementById("large-fries").value);
  let largeFriesCost = largeFriesQuantity * 20;
  total += largeFriesCost;

  let waterQuantity = Number(document.getElementById("water").value);
  let waterCost = waterQuantity * 1;
  total += waterCost;

  let coldDrinksQuantity = Number(document.getElementById("cold-drinks").value);
  let coldDrinksCost = coldDrinksQuantity * 4;
  total += coldDrinksCost;

  let stuffedMushroomsQuantity = Number(
    document.getElementById("stuffed-mushrooms").value
  );
  let stuffedMushroomsCost = stuffedMushroomsQuantity * 9;
  total += stuffedMushroomsCost;

  let salmonQuantity = Number(document.getElementById("salmon").value);
  let salmonCost = salmonQuantity * 25;
  total += salmonCost;

  let lobstersQuantity = Number(document.getElementById("lobsters").value);
  let lobstersCost = lobstersQuantity * 30;
  total += lobstersCost;

  let friedShrimpQuantity = Number(
    document.getElementById("fried-shrimp").value
  );
  let friedShrimpCost = friedShrimpQuantity * 8.99;
  total += friedShrimpCost;

  let friedLobsterQuantity = Number(
    document.getElementById("fried-lobster").value
  );
  let friedLobsterCost = friedLobsterQuantity * 9.99;
  total += friedLobsterCost;

  let fishAndChipsQuantity = Number(
    document.getElementById("fish-and-chips").value
  );
  let fishAndChipsCost = fishAndChipsQuantity * 10.95;
  total += fishAndChipsCost;

  let crabQuantity = Number(document.getElementById("crab").value);
  let crabCost = crabQuantity * 20;
  total += crabCost;

  let perlChickenBurgerQuantity = Number(
    document.getElementById("perl-chicken-burger").value
  );
  let perlChickenBurgerCost = perlChickenBurgerQuantity * 11.94;
  total += perlChickenBurgerCost;

  let beefBurgerQuantity = Number(document.getElementById("beef-burger").value);
  let beefBurgerCost = beefBurgerQuantity * 6.99;
  total += beefBurgerCost;

  let chickenBurgerQuantity = Number(
    document.getElementById("chicken-burger").value
  );
  let chickenBurgerCost = chickenBurgerQuantity * 7.99;
  total += chickenBurgerCost;

  let cheeseBurgerQuantity = Number(
    document.getElementById("cheese-burger").value
  );
  let cheeseBurgerCost = cheeseBurgerQuantity * 8.99;
  total += cheeseBurgerCost;

  let beefBaconQuantity = Number(document.getElementById("beef-bacon").value);
  let beefBaconCost = beefBaconQuantity * 7.99;
  total += beefBaconCost;

  let veggieBurgerQuantity = Number(
    document.getElementById("veggie-burger").value
  );
  let veggieBurgerCost = veggieBurgerQuantity * 6.99;
  total += veggieBurgerCost;

  let chickenAndRiceBowlQuantity = Number(
    document.getElementById("chicken-and-rice-bowl").value
  );
  let chickenAndRiceBowlCost = chickenAndRiceBowlQuantity * 14.7;
  total += chickenAndRiceBowlCost;

  let wingsAndSaladQuantity = Number(
    document.getElementById("wings-and-salad").value
  );
  let wingsAndSaladCost = wingsAndSaladQuantity * 20.35;
  total += wingsAndSaladCost;

  let vegetableSaladQuantity = Number(
    document.getElementById("vegetable-salad").value
  );
  let vegetableSaladCost = vegetableSaladQuantity * 20;
  total += vegetableSaladCost;

  let friedCalmariQuantity = Number(
    document.getElementById("fried-calmari").value
  );
  let friedCalmariCost = friedCalmariQuantity * 16;
  total += friedCalmariCost;

  let bruschettaQuantity = Number(document.getElementById("bruschetta").value);
  let bruschettaCost = bruschettaQuantity * 15;
  total += bruschettaCost;

  let grilledSalmonQuantity = Number(
    document.getElementById("grilled-salmon").value
  );
  let grilledSalmonCost = grilledSalmonQuantity * 20;
  total += grilledSalmonCost;

  let orangeIceCreamQuantity = Number(
    document.getElementById("orange-ice-cream").value
  );
  let orangeIceCreamCost = orangeIceCreamQuantity * 15;
  total += orangeIceCreamCost;

  let oreoBallQuantity = Number(document.getElementById("oreo-ball").value);
  let oreoBallCost = oreoBallQuantity * 10;
  total += oreoBallCost;

  let kidsIceCreamQuantity = Number(
    document.getElementById("kids-ice-cream").value
  );
  let kidsIceCreamCost = kidsIceCreamQuantity * 5;
  total += kidsIceCreamCost;

  let appleDumplingQuantity = Number(
    document.getElementById("apple-dumpling").value
  );
  let appleDumplingCost = appleDumplingQuantity * 5;
  total += appleDumplingCost;

  let coconutCakeQuantity = Number(
    document.getElementById("cocunut-cake").value
  );
  let coconutCakeCost = coconutCakeQuantity * 6;
  total += coconutCakeCost;

  let cheeseCakeQuantity = Number(document.getElementById("cheese-cake").value);
  let cheeseCakeCost = cheeseCakeQuantity * 7;
  total += cheeseCakeCost;
  total = Math.round(total);
  let output = `please proceed to the register to pay. Thank you for choosing Samuel's Restaurant`;

  // Output
  price.innerHTML = total + ` $, ` + output;

  // Clear Inputs
  document.getElementById("small-fries").value = "";
  document.getElementById("medium-fries").value = "";
  document.getElementById("large-fries").value = "";
  document.getElementById("water").value = "";
  document.getElementById("cold-drinks").value = "";
  document.getElementById("stuffed-mushrooms").value = "";
  document.getElementById("salmon").value = "";
  document.getElementById("lobsters").value = "";
  document.getElementById("fried-shrimp").value = "";
  document.getElementById("fried-lobster").value = "";
  document.getElementById("fish-and-chips").value = "";
  document.getElementById("crab").value = "";
  document.getElementById("perl-chicken-burger").value = "";
  document.getElementById("beef-burger").value = "";
  document.getElementById("chicken-burger").value = "";
  document.getElementById("cheese-burger").value = "";
  document.getElementById("beef-bacon").value = "";
  document.getElementById("veggie-burger").value = "";
  document.getElementById("chicken-and-rice-bowl").value = "";
  document.getElementById("wings-and-salad").value = "";
  document.getElementById("vegetable-salad").value = "";
  document.getElementById("fried-calmari").value = "";
  document.getElementById("bruschetta").value = "";
  document.getElementById("grilled-salmon").value = "";
  document.getElementById("orange-ice-cream").value = "";
  document.getElementById("oreo-ball").value = "";
  document.getElementById("kids-ice-cream").value = "";
  document.getElementById("apple-dumpling").value = "";
  document.getElementById("cocunut-cake").value = "";
  document.getElementById("cheese-cake").value = "";
}

// Change light background
lightmode.addEventListener("click", lightBackground);
function lightBackground() {
  document.getElementById("the-html").style.background = "white";
  document.getElementById("the-body").style.background = "black";
  document.getElementById("h1-1").style.background = "green";
  document.getElementById("h1-2").style.background = "lightblue";
}

// Change dark background
darkmode.addEventListener("click", darkBackground);
function darkBackground() {
  document.getElementById("the-html").style.background = "black";
  document.getElementById("the-body").style.background = "white";
  document.getElementById("h1-1").style.background = "lightblue";
  document.getElementById("h1-2").style.background = "green";
  document.getElementById("request").style.background = "black";
  document.getElementById("order").style.background = "black";
  document.getElementById("your-total").style.background = "black";
  document.getElementById("register").style.background = "blue";
}
