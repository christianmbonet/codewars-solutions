// Multiply

function multiply(a, b){
    return a * b
  }

// String ends with

function solution(str, ending){
  return str.endsWith(ending);
}

const solution = (str, ending) => {
    return str.endsWith(ending)
}

// Vowel Count

function getCount(str) {
  var vowelsCount = 0;
     for (var i=0;i<str.length;i++){
        if (str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
            {vowelsCount+=1;}
    }
      
  return vowelsCount;
}

// Return names that have exactly 4 letters

function friend(friends){
  return friends.filter(i => i.length === 4);
    }

// Reverse a string

function solution(str){
  return str.split("").reverse().join("")
} 

// Convert string to a number

var stringToNumber = function(str){
  return Number(str)
}

// Remove spaces

function noSpace(x){
  return x.split(' ').join('')
}

// Convert number to string

function numberToString(num) {
  return num.toString()
}

// Returning strings

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Rock Paper Scissors

const rps = (p1, p2) => {
  if ( p1 === 'rock' && p2 === 'scissors'){
    return "Player 1 won!"
  } else if ( p1 === 'scissors' && p2 === 'paper'){
    return "Player 1 won!"
  } else if ( p1 === 'paper' && p2 === 'rock'){
    return "Player 1 won!"
  } else if ( p1 === 'scissors' && p2 === 'rock'){
    return "Player 2 won!"
  } else if ( p1 === 'paper' && p2 === 'scissors'){
    return "Player 2 won!"
  } else if ( p1 === 'rock' && p2 === 'paper'){
    return "Player 2 won!"
  } else if ( p1 === 'rock' && p2 === 'rock'){
    return "Draw!"
  } else if ( p1 === 'paper' && p2 === 'paper'){
    return "Draw!"
  } else if ( p1 === 'scissors' && p2 === 'scissors'){
    return "Draw!"
  }
};

// Reverse sequence

const reverseSeq = n => {
  let arr = [];
  for (i=n; i > 0; i--){
    arr.push(i)
  }
  return arr
};

// Even or Odd

function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even"
  } else {
    return "Odd"
  }
}

// Smallest integer

  function findSmallestInt(args) {
    return Math.min(...args)
  } 

// Converting kmph to cm per second

function cockroachSpeed(s) {
  return Math.floor(s * 27.78);
 }

 // Return personalized message

 function greet (name, owner) {
  if (name === owner){
    return "Hello boss"
  } else {
    return "Hello guest"
  }
}

// NOT CODEWARS MAKE TRIANGLE

function makeLine(length) {
  var line = "";
  for (var i = 1; i <= length; i++) {
    for (var j = 1; j <= i; j++) {
      line += "* "
    }
    line += "\n";
  }
  return line
}

// Is it a triangle

function isTriangle(a,b,c){
  if ( a === 0 || b === 0 || c === 0){
    return false;
  } 
  else if (a + b < c || a + c < b || b + c < a || b + a < c){
    return false;
  } else {
    return true;
  }
}

// Convert a string into an array

function stringToArray(string){
  return string.split(" ")
}

// Return class average and check if your grade is better

function betterThanAverage(classPoints, yourPoints) {
  const classAverage = classPoints.reduce((a, b) => a + b)/classPoints.length
  if (classAverage > yourPoints){
    return false
  } else {
    return true}
}

// Grasshopper grade book -- Find and average and give a grade

function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3)/3
  if (avg >= 90){
    return 'A';
  } else if (avg >= 80 && avg < 90){
    return 'B';
  } else if (avg >= 70 && avg < 80){
    return 'C';
  } else if (avg >= 60 && avg < 70){
    return 'D';
  } else if (avg <= 60){
    return 'F'
  }
}

// Calculate average, if no items in array return 0

function find_average(array) {
  if (array.length < 1){
    return 0
  } else {
    return array.reduce((a, b)=>a+b)/array.length
  }
}

// Calculate area or perimeter depending on if rectangle or square

const areaOrPerimeter = (l , w) => {
  if (l == w){
    return l * w;
  } else {
    return ((l + w) * 2)
  }
};

//WRONG but good example of error for above solution

const areaOrPerimeterWrong = function(l , w) {
  if (l == w){
    return l * w;
  } else if (l > w){
    return ((l + w) * 2)
  }
};

// DNA to RNA conversion // regex

function DNAtoRNA(dna) {
  return dna.replace(/T/g,"U")
}

// Basic mathematical operations

function basicOp(operation, value1, value2)
{
  if (operation == "*"){
    return value1 * value2
  } else if (operation == "/"){
    return value1 / value2
  } else if (operation == "+"){
    return value1 + value2
  } else if (operation == "-"){
    return value1 - value2
  }
}

// Remove every other item in array

function removeEveryOther(arr){
  for (i = 0; i < arr.length; i++){
    arr.splice(i + 1, 1)
} return arr
}

// Find the stray number 

function stray(numbers) {
  for (i=0; i < numbers.length; i++){
    if (numbers.indexOf(numbers[i])===numbers.lastIndexOf(numbers[i])){
      return numbers[i]
      }
    }
  }

// Explanation for above solution

// creating a loop to iterate through numbers
// while iterating, if a certain condition is true
// return number[i]

// Return negative number

function makeNegative(num) {
  if (num < 0){
    return num
  } else if (num === 0){
    return num
  } else {
    return num * -1
  }
}

// Explanation for above solution

// create if/else statement
// if number is less than 0
// return number
// else if number is equal to 0
// return 0
// else return num * -1 (to make negative)

// To Uppercase

function makeUpperCase(str) {
  return str.toUpperCase()
}

// Sum of a mixed array // incorrect answer example

function sumMix(x){
  for (i=0; i < x.length; i++){
    if (typeof x[i] == 'string'){
      return x += Number(x[i])
    } else {
      return x += x[i]
    }
  }
}

// Update traffic light

function updateLight(current) {
  if (current == "green"){
    return "yellow"
  } else if (current == "yellow"){
    return "red"
  } else if (current == "red"){
    return "green"
  }
}

// Expressions matter

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a + b * c,
    (a + b) * c,
    a * b + c,
    a * (b + c)
)
  }

// Sum of numbers (WRONG)

function getSum( a,b )
{
  if (a === b){
    return a
  } else {
    return a + b
  }
}

// Sum of numbers (RIGHT)

function getSum( a,b )
{
  let count = 0
  if (a === b){
    return a
  } else if ( a < b ){
    for (count = 0; a <= b; a++){
      count += a}
    } else if ( b < a){
      count += b
    }
  return count
  }

// Return the opposite number

function opposite(number) {
  return number * -1
}

// Return greeting that matches language

function greet(language) {
	const languages = [{
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}]
  if (languages[0][language] === undefined){
    return 'Welcome'
    } else {
      return languages[0][language]
    }
}

// Grasshopper sum of all numbers

var summation = function (num) {
  let sum = 0;
  for (i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

// Set Alarm

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


function setAlarm(employed, vacation){
  if (employed === true && vacation === true){
    return false;
  }
    else if (employed === false && vacation === true){
      return false;
    } else if (employed === false && vacation === false){
      return false;
    } else {
      return true;
    }
}

// Square every digit

function squareDigits(num){
  let string = num.toString();
  let results = [];
  for (i=0; i < string.length; i++){
    results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
}

squareDigits(2);

// Is it a palindrome

function isPalindrome(x) {
  const palin = x.toLowerCase()
  const drome = x.toLowerCase().split("").reverse().join("");
  if (drome === palin){
    return true;
  } else {
    return false;
  }
}

// Filter out geese

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird))
}

// Sort by string length

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};

// Is he gonna survive

function hero(bullets, dragons){
  if (bullets/2 >= dragons){
    return true;
  } else {
    return false
  }
 }

 // Sum Arrays

 function sum (numbers) {
  if (numbers === 0){
    return 0;
  } else {
    return numbers.reduce((a,b) => a + b, 0)
  }
};

// Boolean to string

function booleanToString(b){
  return b.toString();
}

//Switch it up

function switchItUp(number){
  switch (number) {
    case 0:
      return 'Zero'
    case 1:
      return 'One'
    case 2:
      return 'Two'
    case 3:
      return 'Three'
    case 4:
      return 'Four'
    case 5:
      return 'Five'
    case 6:
      return 'Six'
    case 7:
      return 'Seven'
    case 8:
      return 'Eight'
    case 9:
      return 'Nine'
  }
}

// Calculate Volume

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// Calculate third angle of triangle

function otherAngle(a, b) {
  return 180 - (a + b);
}

// Removing vowels

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .filter(el => vowels.indexOf(el.toLowerCase()) == -1)
    .join('');
}

// Using variables sum

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5
var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// Sum of sequence 

const sequenceSum = (begin, end, step) => {
  let sum = 0
  for (let i = begin; i <= end; i += step) sum += i;
  return sum
};

// Sum of positive numbers

function positiveSum(arr) {
  let sum = 0
  for (i=0; i <arr.length; i++){
    if (arr[i] > 0){
      sum += arr[i]
    }
  }
  return sum
}

// Map multiply * 2

function maps(x){
  const map = x.map(i => i*2)
  return map
}

// Return likes {hard coded} {wrong answer}

function likes(names) {
  if (names.length === 0){
    return 'no one likes this'
  } else if (names.length === 1){
    return 'Peter likes this'
  } else if (names.length === 2){
    return 'Jacob and Alex like this'
  } else if (names.length === 3){
    return 'Max, John and Mark like this'
  } else if (names.length === 4){
    return 'Alex, Jacob and 2 others like this'
  } else {
    let number = names.length - 2
    return 'Alex, Jacob and ${number} others like this'
  }
}

// Return likes {correct}

function likes(names) {
  if (names.length === 0){
    return 'no one likes this'
  } else if (names.length === 1){
    return `${names[0]} likes this`
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length === 4){
    return `${names[0]}, ${names[1]} and 2 others like this`
  } else {
    let number = names.length - 2
    return `${names[0]}, ${names[1]} and ${number} others like this`
  }
}

// Counting sheep

function countSheeps(arrayOfSheep) {
  let counter = 0
  for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) counter += 1
  }
  return counter
}

// Sentence smash

function smash (words) {
  return words.join(' ')
};

// Who plays banjo

function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r"){
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

// Needle in a haystack - google

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`
}

// Array.diff - google

function arrayDiff(a, b) {
  return a.filter( e => !b.includes(e))
}

// Liters of water to drink when given time, rounded number

function litres(time) {
  return Math.floor(time * 0.5);
}