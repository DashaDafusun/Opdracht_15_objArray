'use strict'

// Deel 1

let persoon = {
    name: "Dasha",
    age: 39,
    };

console.log(persoon.name);
console.log(persoon.age);
console.log(persoon['name']);
console.log(persoon['age']);

persoon.evaluations = [7, 10, 9];

console.log(persoon.evaluations);


// Deel 2

let arr = [];
arr[0] = 'white';
arr[1] = 'black';
arr[2] = 'pink';

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr.push('orange'));
console.log(arr.push(55));

let obj = {
    greetings: "hi ik ben een object"
}
arr.push(obj);
console.log(arr[5]);


// Deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

console.log(catBreeds[2].name);
console.log(catBreeds[0].energy_level);
console.log(catBreeds[1].temperament[0]);
console.log(catBreeds[2].temperament[4]);
console.log(catBreeds[2].food.favourite_food);