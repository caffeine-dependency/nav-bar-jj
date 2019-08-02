const path = "https://arcteryx.amazonaws.com"
const fs = require('fs');

const categories = [
  "Belt",
  "Shirt",
  "Hoody",
  "Boxer Short",
  "Pants",
  "Jacket",
  "Cardigan",
  "Crew Neck Shirt",
  "Vest",
  "Short",
  "Gloves",
  "Polo",
  "Beanie",
  "Backpack",
  "Shoe",
  "Coat",
  "Parka",
  "Fleece Pullover",
  "Hat",
  "Bag",
  "Boot",
  "Tank",
  "Cardigan",
  "Sweater",
  "Trench Coat"
];

const materials = [
  "Breathable",
  "GORE-TEX",
  "Synthetic Fibre",
  "Natural Fibre",
  "Nylon",
  "Fleece",
  "Lightweight",
  "Coreloft",
  "Down Fill",
  "Phasic",
  "Synthetic Insulation",
  "Softshell",
  "Wool Blend",
  "Insulated",
  "Composite construction"
];

const colors = [
  "Red",
  "Pink",
  "Orange Red",
  "Orange",
  "Gold",
  "Yellow",
  "Lavender",
  "Purple",
  "Indigo",
  "Seagreen",
  "Forest Green",
  "Green",
  "Dark Green",
  "Olive",
  "Royal Blue",
  "Blue",
  "Beige",
  "Dark Blue",
  "Navy",
  "Light Gray",
  "Silver",
  "Dark Gray",
  "Gray",
  "Blue Gray",
  "Brwon",
  "Slate Gray",
  "White",
  "Black",
];

const activities = [
  "Around Town",
  "All Round",
  "Hiking",
  "Trekking",
  "Alpine Climbing",
  "Travel/Commute",
  "Running",
  "Ice Climbing",
  "Rock Climbing",
  "Ski/Snowboard",
  "Training/Fitness",
  "Backcountry Skiing",
  "Ski Alpinism",
  "Big Mountain Skiing",
  "Expedition",
  "Nordic/Snowshoeing",
  "Mixed Climbing",
  "Freeride & Freeride Touring",
];

const adjectives = [
  "Dunsinane",
  "Lochnagar",
  "Slieve Croob",
  "Slieve Donard",
  "Snowdon",
  "Soufrière",
  "Iztaccíhuatl",
  "Denali",
  "Mount Elbert",
  "Mount Fairweather",
  "Mount Frissell",
  "Granite Peak",
  "Guadalupe Peak",
  "Haleakala",
  "High Point",
  "Mount Hood",
  "Hualalai",
  "Humphreys Peak",
  "Mount Katahdin",
  "Kilauea",
  "Kings Peak",
  "Lassen Peak",
  "Mauna Kea",
  "Mauna Loa",
  "Mount Mitchell",
  "Mount Monadnock",
  "Mount Nebo",
  "Mount Rainier",
  "Mount Rogers",
  "Mount Rushmore",
  "Mount Saint Elias",
  "San Francisco Peaks",
  "Sassafras Mountain",
  "Mount Shasta",
  "Mount Aconcagua",
  "Maipo Volcano",
  "Cerro Mercedario",
  "Mount Tupungato",
  "Bandeira Peak",
  "Mount Corcovado",
  "Neblina Peak",
  "Sugar Loaf",
  "Chimborazo",
  "Cotopaxi",
  "Double Crested Cormorant",
  "Great Blue Heron",
  "Great Egret",
  "Mute Swan",
  "Canada Goose",
  "Mallard",
  "Turkey Vulture",
  "Osprey",
  "Bald Eagle",
  "Sharp-Shinned Hawk",
  "Red-Tailed Hawk",
  "American Kestrel",
  "Peregrine Falcon",
  "Wild Turkey",
  "Killdeer",
  "Sanderling",
  "Laughing Gull",
  "Herring Gull",
  "Common Tern",
  "Rock Dove",
  "Mourning Dove",
  "Great Horned Owl",
  "Eastern Screech Owl",
  "Downy Woodpecker",
  "Red-Bellied Woodpecker",
  "Northern Flicker",
  "Tree Swallow",
  "Blue Jay",
  "American Crow",
  "Black-capped Chickadee",
  "Tufted Titmouse",
  "Eastern Bluebird",
  "American Robin",
  "Gray Catbird",
  "Northern Mockingbird",
  "Red-Eyed Vireo",
  "Yellow-rumped Warbler",
  "Northern Mockingbird",
  "Northern Cardinal",
  "White-Throated sparrow",
  "Song Sparrow",
  "Dark-Eyed Junco",
  "Red-Winged Blackbird",
  "Common Grackle",
  "House Finch",
  "American Goldfinch",
  "House Sparrow",
  "European Starling",
  "Apple and Pear",
  "Ash",
  "Aspen and Cottonwood and Poplar",
  "Basswood",
  "Birch",
  "Buckeye",
  "Buckthorn",
  "California-laurel",
  "Catalpa",
  "Cedar",
  "Cherry and Plum",
  "Chestnut",
  "Chinkapin",
  "Cottonwood and Poplar and Aspen",
  "Cypress",
  "Dogwood",
  "Douglas-fir",
  "Elm",
  "Fir",
  "Filbert and Hazel",
  "Giant Sequoia",
  "Hawthorn",
  "Hazel and Filbert",
  "Hemlock",
  "Honeylocust",
  "Holly",
  "Horsechestnut",
  "Incense-cedar",
  "Juniper",
  "Larch",
  "Locust",
  "Madrone",
  "Maple",
  "Mountain-ash",
  "Mountain-mahogany",
  "Oak",
  "Oregon-myrtle",
  "Pear and Apple",
  "Pine",
  "Plum and Cherry",
  "Poplar and Aspen and Cottonwood",
  "Redcedar/Arborvitae",
  "Redwood",
  "Russian-olive",
  "Spruce",
  "Sweetgum",
  "Sycamore",
  "Tanoak",
  "True Cedar",
  "True Fir",
  "Walnut",
  "White-cedar",
  "Willow",
  "Yellow-poplar",
  "Yew"
];

const genders = ['F', 'M', 'U']

function generateSingleProduct() {
  const category = categories[Math.floor(Math.random() * (25))]
  const adjInd = Math.floor(Math.random() * (147));
  const gender = genders[Math.floor(Math.random() * (3))];
  const color = colors[Math.floor(Math.random() * (28))];
  let product = {
    name: color + ' ' + adjectives[adjInd] + ' ' + category,
    price: (Math.random() * (1001)).toFixed(2),
    category,
    gender,
    image: path + '/' + gender + '/' + category,
    rating: Math.floor(Math.random() * (101)),
    numRatings: "(" + Math.floor(Math.random() * (50)) + ")",
    color,
    activities: [activities[Math.floor(Math.random() * (18))]],
    materials: [materials[Math.floor(Math.random() * (15))]]
  };
  return product;
};

var stream = fs.createWriteStream(__dirname + '/products.json', {flags: 'a'});
function writeTenM() {
  let i = 10000000;
  write()
  function write() {
    let cont = true;
    do {
      let product = generateSingleProduct();
      i--;
      if (i === 0) {
        stream.write(JSON.stringify(product) + ']');
      } else if (i === 9999999) {
        stream.write('[' + JSON.stringify(product) + ',');
      } else {
        cont = stream.write(JSON.stringify(product) + ',');
      }
    } while (i > 0 && cont);
    if (i > 0) {
      stream.once('drain', write);
    }
  }
}

writeTenM();

module.exports = { categories }