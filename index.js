const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]

// q1
const logAllNames = users => users.forEach((user) => console.log(user.name));
// logAllNames(users);

// const logAllNames2 = (arr) => arr.forEach(({ name }) => console.log(name));



// q2
const getAllTags = users => users.forEach((user) => console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!`));
// getAllTags(users);

// // destructing for element in order to simplify the string interpolation names. AKA Object destructuring
// const getAllTags = (arr) => {
// 	arr.forEach(({ name, username }) =>
// 		console.log(`Hi my name is ${name}, and my tag is ${username}!`)
// 	);
// };



// q3
const sumAllFollowers = users => users.reduce((accumulator, currentValue) => accumulator + currentValue.followers, 0);
// console.log(sumAllFollowers(users));

// using Object destructing on the b, which is currentValue. In reduce, A is accumulator, B is CurrentValue
// const sumAllFollowers = (arr) => arr.reduce((a, { followers }) => a + followers, 0);



// q4
const searchUsername = (users, str) => users.filter((user) =>  user.username === str);
// console.log(searchUsername(users, "@passaic_papi"));

// // Destructing the element
// const searchUsername = (users, searchTerm) => {
// 	return users.filter(({ username }) => username === searchTerm);
// };



// q5
const longWinded = users => users.reduce((longest, user) => user.bio.length > longest.bio.length ? user : longest);
// console.log(longWinded(users));

// const longWinded = () => {
//   let longestBioUser = null;
//   let longestLength = 0;
//   users.forEach((user) => {
//     const bioLength = user.bio.length;
//     if (bioLength > longestLength) {
//       longestLength = bioLength;
//       longestBioUser = user;
//     }
//   });
//   return longestBioUser;
// };



// q6
const follower = users => users.sort((a, b) => a.followers - b.followers)
// console.log(follower(users));