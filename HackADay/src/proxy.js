const restaurants = {
  Mcdonalds: { diet: "normal", cultures: ["america"] },
  Wendys: { diet: "normal", cultures: ["america"] },
  "Burger King": { diet: "normal", cultures: ["america"] },
  "Five Guys": { diet: "normal", cultures: ["america"] },
  Checkers: { diet: "normal", cultures: ["america"] },
  "Taco Bell": { diet: "normal", cultures: ["mexico"] },
  "Panda Express": { diet: ["normal", "vegetarian"], cultures: ["china"] },
  Chikfila: { diet: "normal", cultures: ["america"] },
  KFC: { diet: "normal", cultures: ["america"] },
  Popeyes: { diet: "normal", cultures: ["america"] },
  Sonic: { diet: "normal", cultures: ["america"] },
  Jollibees: { diet: "normal", cultures: ["philipines"] },
  Chipotle: { diet: ["normal", "vegetarian", "vegan"], cultures: ["mexico"] },
  "Lazy Moon": {
    diet: ["normal", "vegan", "vegetarian"],
    cultures: ["italy"]
  },
  "Marks Jamaican Bar and Grill": { diet: "normal", cultures: ["jamaica"] },
  "Spice Indian Grill": {
    diet: ["vegan", "vegetarian", "normal"],
    cultures: "india"
  },
  "Don Julio's": { diet: ["normal", "vegetarian"], cultures: "mexico" },
  "Izziban Korean BBQ and Sushi": { diet: "normal", cultures: "korea" },
  "Meis Kitchen": { diet: "normal", cultures: "china" },
  "Tacos El Rancho": { diet: "normal", cultures: "mexico" },
  "Golden Krust": { diet: "normal", cultures: "jamaica" },
  "Carribean Sunshine Bakery": { diet: "normal", cultures: "jamaica" },
  "Tabla Indian Restauarant": { diet: "normal", cultures: "india" },
  "New Punjab Indian Restaurant": { diet: "normal", cultures: "india" },
  "Flavors of India": { diet: "normal", cultures: "indian" },
  "Khasiyat Indian Restaurant": { diet: "normal", cultures: "india" },
  "Hangry Dobo": { diet: "normal", cultures: "philipines" },
  "Inays Kitchen": { diet: "normal", cultures: "philipines" },
  Chuys: { diet: "normal", cultures: "mexico" },
  "Agave azul": { diet: "normal", cultures: "mexico" },
  "San Angel Inn": { diet: "normal", cultures: "mexico" },
  "Uncle Julios": { diet: "normal", cultures: "mexico" },
  "Top Class Jamaican Bar % Grill": { diet: "normal", cultures: "jamaica" },
  "Negril Jamaican Restaurant": { diet: "normal", cultures: "jamaica" },
  "Justins Caribbean Fusion Restaurant": {
    diet: "normal",
    cultures: "jamaica"
  }
};

export const searchByDiet = (diet) => {
  let matchingRestaurants = [];
  for (const restaurant of Object.keys(restaurants)) {
    if (
      Array.isArray(restaurants[restaurant].diet) &&
      restaurants[restaurant].diet.includes(diet)
    ) {
      matchingRestaurants.push(restaurant);
    } else if (restaurants[restaurant].diet === diet) {
      matchingRestaurants.push(restaurant);
    }
  }
  return matchingRestaurants;
};

export const searchByCulture = (culture) => {
  let matchingRestaurants = [];
  for (const restaurant of Object.keys(restaurants)) {
    if (
      Array.isArray(restaurants[restaurant].cultures) &&
      restaurants[restaurant].cultures.includes(culture)
    ) {
      matchingRestaurants.push(restaurant);
    } else if (restaurants[restaurant].cultures === culture) {
      matchingRestaurants.push(restaurant);
    }
  }
  return matchingRestaurants;
};

export const getRestaurant = (culture, diet) => {
  let matchingRestaurant = [];
  let restaurant1 = searchByCulture(culture);
  let restaurant2 = searchByDiet(diet);
  for (let i = 0; i < restaurant1.length; i++) {
    if (restaurant2.includes(restaurant1[i]))
      matchingRestaurant.push(restaurant1[i]);
  }

  return matchingRestaurant;
};
