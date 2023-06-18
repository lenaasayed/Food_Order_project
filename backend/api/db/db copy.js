const { MongoClient } = require("mongodb");

// async function main() {
const uri = "mongodb://127.0.0.1:27017/provider_db";
[
  {
    slug: "cat",
    title: "Cat",
    phrases: [
      { type: "❤️", phrase: "I like cats." },
      { type: "🐈", phrase: "Can we get a cat as pet?" },
      { type: "🍲", phrase: "I need to feed my cat." },
      { type: "🧼", phrase: "I need to clean my cat." },
      { type: "📿", phrase: "I need to take my cat for a walk." },
      { type: "👀", phrase: "I saw a cat." },
      { type: "🔊", phrase: "What noise does a cat make?" },
    ],
  },
  {
    slug: "dog",
    title: "Dog",
    phrases: [
      { type: "❤️", phrase: "I like dog." },
      { type: "🐕", phrase: "Can we get a dog as pet?" },
      { type: "🍲", phrase: "I need to feed my dog." },
      { type: "🧼", phrase: "I need to clean my dog." },
      { type: "📿", phrase: "I need to take my dog for a walk." },
      { type: "👀", phrase: "I saw a dog." },
      { type: "🔊", phrase: "What noise does a dog make?" },
    ],
  },
  {
    slug: "fish",
    title: "Fish",
    phrases: [
      { type: "❤️", phrase: "I like fish." },
      { type: "🐠", phrase: "Can we get a fish as pet?" },
      { type: "🍲", phrase: "I need to feed my fish." },
      { type: "🧼", phrase: "I need to clean my fish." },
      { type: "👀", phrase: "I saw a fish." },
      { type: "🔊", phrase: "What noise does a fish make?" },
    ],
  },
  {
    slug: "rabbit",
    title: "Rabbit",
    phrases: [
      { type: "❤️", phrase: "I like rabbits." },
      { type: "🐇", phrase: "Can we get a rabbit as pet?" },
      { type: "🍲", phrase: "I need to feed my rabbit." },
      { type: "🧼", phrase: "I need to clean my rabbit." },
      { type: "👀", phrase: "I saw a rabbit." },
      { type: "🔊", phrase: "What noise does a rabbit make?" },
    ],
  },
  {
    slug: "butterfly",
    title: "Butterfly",
    phrases: [
      { type: "❤️", phrase: "I like butterflies." },
      { type: "👀", phrase: "I saw a butterfly." },
      { type: "🔊", phrase: "What noise does a butterfly make?" },
    ],
  },
  {
    slug: "kangaroo",
    title: "Kangaroo",
    phrases: [
      { type: "❤️", phrase: "I like kangaroos." },
      { type: "👀", phrase: "I saw a kangaroo." },
      { type: "🔊", phrase: "What noise does a kangaroo make?" },
    ],
  },
  {
    slug: "turtle",
    title: "Turtle",
    phrases: [
      { type: "❤️", phrase: "I like turtles." },
      { type: "👀", phrase: "I saw a turtle." },
      { type: "🔊", phrase: "What noise does a turtle make?" },
    ],
  },
  {
    slug: "giraffe",
    title: "Giraffe",
    phrases: [
      { type: "❤️", phrase: "I like giraffes." },
      { type: "👀", phrase: "I saw a giraffe." },
      { type: "🔊", phrase: "What noise does a giraffe make?" },
    ],
  },
  {
    slug: "frog",
    title: "Frog",
    phrases: [
      { type: "❤️", phrase: "I like frogs." },
      { type: "👀", phrase: "I saw a frog." },
      { type: "🔊", phrase: "What noise does a frog make?" },
    ],
  },
  {
    slug: "swan",
    title: "Swan",
    phrases: [
      { type: "❤️", phrase: "I like swans." },
      { type: "👀", phrase: "I saw a swan." },
      { type: "🔊", phrase: "What noise does a swan make?" },
    ],
  },
  {
    slug: "spider",
    title: "Spider",
    phrases: [
      { type: "❤️", phrase: "I like spiders." },
      { type: "👀", phrase: "I saw a spider." },
      { type: "🔊", phrase: "What noise does a spider make?" },
    ],
  },
  {
    slug: "cow",
    title: "Cow",
    phrases: [
      { type: "❤️", phrase: "I like cows." },
      { type: "👀", phrase: "I saw a cow." },
      { type: "🔊", phrase: "What noise does a cow make?" },
    ],
  },
  {
    slug: "duck",
    title: "Duck",
    phrases: [
      { type: "❤️", phrase: "I like ducks." },
      { type: "👀", phrase: "I saw a duck." },
      { type: "🔊", phrase: "What noise does a duck make?" },
    ],
  },
  {
    slug: "horse",
    title: "Horse",
    phrases: [
      { type: "❤️", phrase: "I like horses." },
      { type: "👀", phrase: "I saw a horse." },
      { type: "🔊", phrase: "What noise does a horse make?" },
    ],
  },
  {
    slug: "chicken",
    title: "Chicken",
    phrases: [
      { type: "❤️", phrase: "I like chickens." },
      { type: "👀", phrase: "I saw a chicken." },
      { type: "🔊", phrase: "What noise does a chicken make?" },
    ],
  },
  {
    slug: "bee",
    title: "Bee",
    phrases: [
      { type: "❤️", phrase: "I like bees." },
      { type: "👀", phrase: "I saw a bee." },
      { type: "🔊", phrase: "What noise does a bee make?" },
    ],
  },
  {
    slug: "pig",
    title: "Pig",
    phrases: [
      { type: "❤️", phrase: "I like pigs." },
      { type: "👀", phrase: "I saw a pig." },
      { type: "🔊", phrase: "What noise does a pig make?" },
    ],
  },
  {
    slug: "dove",
    title: "Dove",
    phrases: [
      { type: "❤️", phrase: "I like doves." },
      { type: "👀", phrase: "I saw a dove." },
      { type: "🔊", phrase: "What noise does a dove make?" },
    ],
  },
  {
    slug: "crab",
    title: "Crab",
    phrases: [
      { type: "❤️", phrase: "I like crabs." },
      { type: "👀", phrase: "I saw a crab." },
      { type: "🔊", phrase: "What noise does a crab make?" },
    ],
  },
  {
    slug: "penguin",
    title: "Penguin",
    phrases: [
      { type: "❤️", phrase: "I like penguins." },
      { type: "👀", phrase: "I saw a penguin." },
      { type: "🔊", phrase: "What noise does a penguin make?" },
    ],
  },
  {
    slug: "elephant",
    title: "Elephant",
    phrases: [
      { type: "❤️", phrase: "I like elephants." },
      { type: "👀", phrase: "I saw an elephant." },
      { type: "🔊", phrase: "What noise does an elephant make?" },
    ],
  },
  {
    slug: "zebra",
    title: "Zebra",
    phrases: [
      { type: "❤️", phrase: "I like zebras." },
      { type: "👀", phrase: "I saw a zebra." },
      { type: "🔊", phrase: "What noise does a zebra make?" },
    ],
  },
  {
    slug: "panda",
    title: "Panda",
    phrases: [
      { type: "❤️", phrase: "I like pandas." },
      { type: "👀", phrase: "I saw a panda." },
      { type: "🔊", phrase: "What noise does a panda make?" },
    ],
  },
  {
    slug: "monkey",
    title: "Monkey",
    phrases: [
      { type: "❤️", phrase: "I like monkeys." },
      { type: "👀", phrase: "I saw a monkey." },
      { type: "🔊", phrase: "What noise does a monkey make?" },
    ],
  },
  {
    slug: "camel",
    title: "Camel",
    phrases: [
      { type: "❤️", phrase: "I like camels." },
      { type: "👀", phrase: "I saw a camel." },
      { type: "🔊", phrase: "What noise does a camel make?" },
    ],
  },
  {
    slug: "mouse",
    title: "Mouse",
    phrases: [
      { type: "❤️", phrase: "I like mice." },
      { type: "👀", phrase: "I saw a mouse." },
      { type: "🔊", phrase: "What noise does a mouse make?" },
    ],
  },
  {
    slug: "tiger",
    title: "Tiger",
    phrases: [
      { type: "❤️", phrase: "I like tigers." },
      { type: "👀", phrase: "I saw a tiger." },
      { type: "🔊", phrase: "What noise does a tiger make?" },
    ],
  },
  {
    slug: "jellyfish",
    title: "Jellyfish",
    phrases: [
      { type: "❤️", phrase: "I like jellyfishes." },
      { type: "👀", phrase: "I saw a jellyfish." },
      { type: "🔊", phrase: "What noise does a jellyfish make?" },
    ],
  },
  {
    slug: "crocodile",
    title: "Crocodile",
    phrases: [
      { type: "❤️", phrase: "I like crocodiles." },
      { type: "👀", phrase: "I saw a crocodile." },
      { type: "🔊", phrase: "What noise does a crocodile make?" },
    ],
  },
  {
    slug: "koala",
    title: "Koala",
    phrases: [
      { type: "❤️", phrase: "I like koalas." },
      { type: "👀", phrase: "I saw a koala." },
      { type: "🔊", phrase: "What noise does a koala make?" },
    ],
  },
  {
    slug: "ostrich",
    title: "Ostrich",
    phrases: [
      { type: "❤️", phrase: "I like ostriches." },
      { type: "👀", phrase: "I saw an ostrich." },
      { type: "🔊", phrase: "What noise does an ostrich make?" },
    ],
  },
  {
    slug: "racoon",
    title: "Racoon",
    phrases: [
      { type: "❤️", phrase: "I like racoons." },
      { type: "👀", phrase: "I saw a racoon." },
      { type: "🔊", phrase: "What noise does a racoon make?" },
    ],
  },
  {
    slug: "bat",
    title: "Bat",
    phrases: [
      { type: "❤️", phrase: "I like bats." },
      { type: "👀", phrase: "I saw a bat." },
      { type: "🔊", phrase: "What noise does a bat make?" },
    ],
  },
  {
    slug: "eagle",
    title: "Eagle",
    phrases: [
      { type: "❤️", phrase: "I like eagles." },
      { type: "👀", phrase: "I saw an eagle." },
      { type: "🔊", phrase: "What noise does an eagle make?" },
    ],
  },
  {
    slug: "hippopotamus",
    title: "Hippopotamus",
    phrases: [
      { type: "❤️", phrase: "I like hippopotamus." },
      { type: "👀", phrase: "I saw a hippopotamus." },
      { type: "🔊", phrase: "What noise does a hippopotamus make?" },
    ],
  },
  {
    slug: "seal",
    title: "Seal",
    phrases: [
      { type: "❤️", phrase: "I like seals." },
      { type: "👀", phrase: "I saw a seal." },
      { type: "🔊", phrase: "What noise does a seal make?" },
    ],
  },
  {
    slug: "walrus",
    title: "Walrus",
    phrases: [
      { type: "❤️", phrase: "I like walruses." },
      { type: "👀", phrase: "I saw a walrus." },
      { type: "🔊", phrase: "What noise does a walrus make?" },
    ],
  },
  {
    slug: "seahorse",
    title: "Seahorse",
    phrases: [
      { type: "❤️", phrase: "I like seahorses." },
      { type: "👀", phrase: "I saw a seahorse." },
      { type: "🔊", phrase: "What noise does a seahorse make?" },
    ],
  },
  {
    slug: "bull",
    title: "Bull",
    phrases: [
      { type: "❤️", phrase: "I like bulls." },
      { type: "👀", phrase: "I saw a bull." },
      { type: "🔊", phrase: "What noise does a bull make?" },
    ],
  },
  {
    slug: "pelican",
    title: "Pelican",
    phrases: [
      { type: "❤️", phrase: "I like pelicans." },
      { type: "👀", phrase: "I saw a pelican." },
      { type: "🔊", phrase: "What noise does a pelican make?" },
    ],
  },
  {
    slug: "beaver",
    title: "Beaver",
    phrases: [
      { type: "❤️", phrase: "I like beavers." },
      { type: "👀", phrase: "I saw a beaver." },
      { type: "🔊", phrase: "What noise does a beaver make?" },
    ],
  },
  {
    slug: "goldfish",
    title: "Goldfish",
    phrases: [
      { type: "❤️", phrase: "I like goldfishes." },
      { type: "👀", phrase: "I saw a goldfish." },
      { type: "🔊", phrase: "What noise does a goldfish make?" },
      { type: "🐠", phrase: "Can we get a goldfish as pet?" },
    ],
  },
  {
    slug: "rhinoceros",
    title: "Rhinoceros",
    phrases: [
      { type: "❤️", phrase: "I like rhinoceros." },
      { type: "👀", phrase: "I saw a rhinoceros." },
      { type: "🔊", phrase: "What noise does a rhinoceros make?" },
    ],
  },
  {
    slug: "snake",
    title: "Snake",
    phrases: [
      { type: "❤️", phrase: "I like snakes." },
      { type: "👀", phrase: "I saw a snake." },
      { type: "🔊", phrase: "What noise does a snake make?" },
    ],
  },
  {
    slug: "lion",
    title: "Lion",
    phrases: [
      { type: "❤️", phrase: "I like lions." },
      { type: "👀", phrase: "I saw a lion." },
      { type: "🔊", phrase: "What noise does a lion make?" },
    ],
  },
  {
    slug: "squid",
    title: "Squid",
    phrases: [
      { type: "❤️", phrase: "I like squids." },
      { type: "👀", phrase: "I saw a squid." },
      { type: "🔊", phrase: "What noise does a squid make?" },
    ],
  },
  {
    slug: "whale",
    title: "Whale",
    phrases: [
      { type: "❤️", phrase: "I like whales." },
      { type: "👀", phrase: "I saw a whale." },
      { type: "🔊", phrase: "What noise does a whale make?" },
    ],
  },
  {
    slug: "beetle",
    title: "Beetle",
    phrases: [
      { type: "❤️", phrase: "I like beetles." },
      { type: "👀", phrase: "I saw a beetle." },
      { type: "🔊", phrase: "What noise does a beetle make?" },
    ],
  },
  {
    slug: "dolphin",
    title: "Dolphin",
    phrases: [
      { type: "❤️", phrase: "I like dolphins." },
      { type: "👀", phrase: "I saw a dolphin." },
      { type: "🔊", phrase: "What noise does a dolphin make?" },
    ],
  },
  {
    slug: "starfish",
    title: "Starfish",
    phrases: [
      { type: "❤️", phrase: "I like starfishes." },
      { type: "👀", phrase: "I saw a starfish." },
      { type: "🔊", phrase: "What noise does a starfish make?" },
    ],
  },
  {
    slug: "parakeet",
    title: "Parakeet",
    phrases: [
      { type: "❤️", phrase: "I like parakeets." },
      { type: "👀", phrase: "I saw a parakeet." },
      { type: "🔊", phrase: "What noise does a parakeet make?" },
    ],
  },
  {
    slug: "owl",
    title: "Owl",
    phrases: [
      { type: "❤️", phrase: "I like owls." },
      { type: "👀", phrase: "I saw an owl." },
      { type: "🔊", phrase: "What noise does an owl make?" },
    ],
  },
  {
    slug: "sheep",
    title: "Sheep",
    phrases: [
      { type: "❤️", phrase: "I like sheeps." },
      { type: "👀", phrase: "I saw a sheep." },
      { type: "🔊", phrase: "What noise does a sheep make?" },
    ],
  },
];

const client = new MongoClient(uri);
module.exports = client
  .connect()
  .then((result) => {
    console.log("Successful connnection ! ", result);
  })
  .catch((err) => console.log(err));

// try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     await listDatabases(client);

// } catch (e) {
//     console.error(e);
// } finally {
//     // Close the connection to the MongoDB cluster
//     await client.close();
// }
// }

// main().catch(console.error);

// /**
//  * Print the names of all available databases
//  * @param {MongoClient} client A MongoClient that is connected to a cluster
//  */
// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// module.exports =  client

// const mongoose = require("mongoose");

// //connection URI to MongoDB
// const uri = "mongodb://127.0.0.1:27017/provider_db";

// //Make db connection (asynchronously)
// module.exports =  mongoose
//   .connect(uri)
//   .then((result) => {
//     console.log("Successful connnection ! ", result);
//   })
//   .catch((err) => console.log(err));
// module.exports =  mongoose

const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017/provider_db";
  // const client = new MongoClient(uri);
  // module.exports =  client.connect()
  // .then((result) => {
  //   console.log("Successful connnection ! ", result);
  // })
  // .catch((err) => console.log(err));
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
