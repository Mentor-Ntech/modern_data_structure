'use-strict';

//////////////////////////////////
// DESTRUCTURING OF ARRAY
//////////////////////////////

// const myNums = [2, 4, 6, 8];

// const [w,x, y, z] = myNums;
// console.log(w, x, y, z);

// const [a, , c, d] = myNums;
// console.log(a, c, d);

// console.log(myNums)


// const restaurant = {
//     companyName: 'Item7 Party Jollof',
//     location: 'Plot 10, Taiwo Road, Ilorin, Nigeria',
//     categories: ['local', 'standard', 'premium', 'organic'],
//     starterMenu: ['Rice', 'Crocker Fish', 'Chicken', 'Spaghetti', 'Cream Salad', 'Beef'],
//     mainMenu: ['Jollof', 'Sharwamma', 'Meat pie'],

//    order: function(startIndex, mainIndex) {
//        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
//     //    const menu1 = this.starterMenu[startIndex];
//     //    const menu2 = this.mainMenu[mainIndex];
//     //    return [menu1, menu2]
//    }
     
// }
// console.log(restaurant.order(2, 1));
// console.log(restaurant.order(4, 2));
 
//Destruction of array ⬇
// const [menu1, menu2] = restaurant.order(3, 1);
// // console.log(menu1, menu2);



// const [cat1, cart2] = restaurant.categories;
// console.log(cat1, cart2);

// let [, start1, , start2, start3 ] = restaurant.starterMenu;
// console.log(start1, start2, start3);

// [start2, start1, start3] = [start1,start2, start3];
// console.log(start1, start2, start3);

// let [main1, main2] = restaurant.mainMenu;
// console.log(main1, main2);

// How To Inter-Change
// [main2, main1] = [main1, main2];
// console.log(main1, main2);

// NESTED ARRAYS
// const localPin = [111, 222, 333, [777,888]];

// const[single, , , married] = localPin;
// console.log(single);
// console.log(married);

// const[, Bob, , [Bola,sola]] = localPin;
// console.log(Bob, Bola, sola);

// const yearsOfIndpnt = [1776, 1958];
// const[america,ghana, nigeria] = yearsOfIndpnt;
// console.log(america,ghana, nigeria)

// Setting Default value

// const[america, ghana, nigeria = 1960] = [1776, 1957];
// console.log(america,ghana, nigeria)


//////////////////////////////////
// DESTRUCTURING OF OBJECT
//////////////////////////////

// const eatery = {
//     companyName: 'Item7 Party Jollof',
//     address: 'Plot 10, Taiwo Road, Ilorin, Nigeria',
//     categories: ['local', 'standard', 'premium', 'organic'],
//     starterMenu: ['Rice', 'Crocker Fish', 'Chicken', 'Spaghetti', 'Cream Salad', 'Beef'],
//     mainMenu: ['Jollof', 'Sharwamma', 'Meat pie'],
//     openingHours: {
//         thu: {open: 10,
//              close: 21
//             },
//         fri: {open: 11,
//              close: 22
//             },
//         sat: {open: 0,
//              close: 24
//             },
    
//     }, 

//    order: function(startIndex, mainIndex) {
//        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
    
//    },
//    totalMenuFn: function () {
//        this.totalMenu = [...this.starterMenu, ...this.mainMenu];
//     for (let i = 0; i < this.totalMenu.length; i++) {
//         console.log((i +1) + ':' +this.totalMenu[i])

//         // console.log(i +1)               //To add number to index Array Element
//         // console.log((i +1) + ':' +this.totalMenu[i])      // 🔙e.g
// }
//    },

//    orderDelivery: function(time, addy, startIndex, mainIndex) {
//        console.log(`This food contains ${startIndex} and ${mainIndex} and it was delivered to ${addy} at ${time} pm`)
//    },
//    orderFavorite: function(favMenu, ingredient) {
//        console.log(`Here is your favourite ${favMenu} with ${ingredient[0]},${ingredient[1]} and ${ingredient[2]} Enjoy! 🥂🍵`)
//    }

     
// }

// const favMeal = eatery.mainMenu[1];

// const ingredientArr = [prompt(`Input your Ingredient-1`), prompt(`Input your Ingredient-2`), prompt(`Input your Ingredient-1`)];
// console.log(ingredientArr);

// eatery.orderFavorite(favMeal, ingredientArr)
// // const { companyName, address} = eatery;
// console.log(companyName);
// console.log(address);

// eatery.totalMenuFn();
// console.log(eatery.totalMenu);




// const {openingHours: {fri}} = eatery;
// console.log(fri);

// const {open, close} = fri;
// console.log(open, close)
// const {openingHours: {fri:{open, close}}} = eatery;
// console.log(open, close)

// How to RENAME from the previous name 
// const {openingHours: {fri:{open: startTime, close: endTime}}} = eatery;
// console.log(startTime, endTime)

// eatery.orderDelivery({
//     time:2,
//     addy: '69 Via Rail Avenue',
//     startIndex: 'sharwarma',
//     mainIndex: 'chicken'
// })

//////////////////////////////////
//SPREAD OPERATOR
//////////////////////////////
// const arr1 = [2, 6, 19, 7];
// // const newArr1 = [3, 5, 14, 8 arr1[0], arr1[1], arr1[2], arr1[3]]
// const newArr1 = [3, 5, 14, 8].concat(arr1);
// console.log(newArr1)


// const arr2 = [4, 7, 11,...newArr1];
// console.log(arr2);

// const person = 'obaluaye';
// console.log([...person])

// const allMenu = [...eatery.starterMenu, ...eatery.mainMenu];
// console.log(allMenu)


// const car1 = ['Benz', 'Toyota', 'camry']
// const car2 = ['Honda', 'Ram', 'Ford', 'Chevrolet', 'crystler']

// const car3 = [...car1, ...car2]
// console.log(car3);

// const foodCenter = Object.assign(eatery);  // spread on object
// const foodCenter = {...eatery};
// foodCenter.companyName = 'foodco yummy Snack';
// foodCenter.address = 'plot 55, Iya mapo Estate, Ilorin, Nigeria';
// console.log(foodCenter.order(4,1))
// console.log(foodCenter)
// console.log(eatery)

//////////////////////////////////
//REST PATTERN & PARAMETERS
//////////////////////////////

// const eatery = {
//     companyName: 'Item7 Party Jollof',
//     address: 'Plot 10, Taiwo Road, Ilorin, Nigeria',
//     categories: ['local', 'standard', 'premium', 'organic'],
//     starterMenu: ['Rice', 'Crocker Fish', 'Chicken', 'Spaghetti', 'Cream Salad', 'Beef'],
//     mainMenu: ['Jollof', 'Sharwamma', 'Meat pie'],
//     openingHours: {
//         thu: {open: 10,
//              close: 21
//             },
//         fri: {open: 11,
//              close: 22
//             },
//         sat: {open: 0,
//              close: 24
//             },
    
//     },
//     orderChicken: function(mainPara, ...otherPara) {
//         console.log(`i want ${this.starterMenu[2]} moimoi ${mainPara} and ${otherPara}, Enjoy! 🥂🍵`)
//     }
// }
// eatery.orderChicken('chips', 'coke', 'bottle water', 'yoghurt', 'meatpie')
// const [rice, , chicken, ...restMenu] = [...eatery.starterMenu];
// console.log(rice);
// console.log(chicken);
// console.log(restMenu);

// const capFirstLetter = (newStr) => {
//     const [firstPar, ...otherPar] = newStr;
//     const finalName = firstPar.toUpperCase().concat(otherPar.join('')); // I[l, o, r, i, n]
//     console.log(finalName);
// }

// capFirstLetter('ilorin');
// capFirstLetter('airport');
// capFirstLetter('naheem');
// capFirstLetter('road');

// const {fri: friday , ...weekdays} = {...eatery.openingHours};
// console.log(friday);    // We can convert the previous name by using  👉🏽 : e.g(from fri to friday < fri:friday)

// const {sat: saturday, ...weekdays} = {...eatery.openingHours};
// console.log(saturday);
// console.log(weekdays);

// const addNums = (x, y, z) => {
//     return x + y + z
// }
// console.log(addNums(5, 6, 7))

// const addIntegers = (...number) => {
//     let sum =0;

//     for (let i = 0; i < number.length; i++) {
//         sum += number[i];
//         console.log(sum)
//     }
// }
// addIntegers(3, 7, 9);

// const newNums = [13, 9, 24, 16, 31, 7];
// addIntegers(...newNums)













// const[firstNum, ...otherNums] = [1, 2, 3, 4, 5,];
// console.log(firstNum);
// console.log(otherNums)


/////////////////////////////////////////////////////////////
//FOR OF LOOP
//////////////////////////////////////////////////////////

// const allMenu = [...eatery.starterMenu, ...eatery.mainMenu];
// for (let i = 0; i < allMenu.length; i++) {
//     console.log(allMenu[i]);              // for loop
// }

// for (const foodItem of allMenu.entries()) {
//     console.log(foodItem)                 // of loop
// }

     // OR this ⬇
// for (const [index,Element] of allMenu.entries()) {
//     console.log(`${index +1}- ${Element}`);      // of loop
                     
// }

const game = {
    players: {
        player1: {
            team1: 'Bayern Munich',
            goalKeeper: ['Neuer'],
            fieldPlayers: ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',]
        },
        player2: {
            team2: 'Borrussia Dortmund',
            goalKeeper: ['Burki'],
            fieldPlayers: ['Schulz', 'Hummels',  'Akanji', 'Hakimi', 'Weigl',  'Witsel', 'Hazard', 'Brandt',  'Sancho', 'Gotze'],
        },
        
    },
     
     
         
}
console.log(game);
const [allPlayers, ...otherPlayer] = [game.players];
console.log(allPlayers);



// 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

