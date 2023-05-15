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

const sequence = (begin, end, step) => {
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

// How much would a rental cost given variables and discounts? Transportation on vacation

function rentalCarCost(d) {
  const total = d * 40;
  if (d > 6){
    return total - 50;
  } else if (d > 2){
    return total - 20;
  } else {
    return total}
}

// REGEX Replace - google - struggling with regex

function removeExclamationMarks(s) {
  return s.replace(/\!/g, '')
}

// Count by x

function countBy(x, n) {
  let z = [];
    for (i=1; i <= n; i++){
      z.push(x * i)
    }
  return z;
}

// In milliseconds

function past(h, m, s){
  return ((h * 60 * 60) + (m * 60) + s) * 1000
}

// You only need one beginner

// Incorrect answer

function check(a, x) {
  for (let i = 0; i < a.length; i++){
    if (a[i] === x){
      return true;
    } else {
      return false;
    }
  }
}

// Correct answer

function check(a, x) {
  for (let i = 0; i < a.length; i++){
    if (a.includes(x)){
      return true;
    } else {
      return false;
    }
  }
}

// Double character

function doubleChar(str) {
  let string = ''
  for (let i = 0; i < str.length; i++){
   string += str[i] + str[i]
  } return string
}

// Double the integer

function doubleInteger(i) {
  return i * 2;
}

// Change the string depending on amount of hoops mades

function hoopCount (n) {
  if (n >= 10){
    return 'Great, now move on to tricks'
  } else {
    return 'Keep at it until you get it'
  }
}

// Odd or even

function testEven(n) {
  if (n%2 == 0){
    return true
  } else {
    return false
  }
}

// Return School Paperwork

function paperwork(n, m) {
  if (n < 0 || m < 0){
      return 0
  } else {
    return n * m
  }
}

// Return indices of sum equal to target - INCORRECT ATTEMPT

function twoSum(numbers, target) {
  for (i=0; i < numbers.length; i++){
    for (j=0; j < numbers.length; j++){
      if (numbers[i] + numbers[j] == target){
        return [numbers[i], numbers[j]]
      }
    }
  }
}

// Return indices of sum equal to target - CORRECTION (NOT FULLY CORRECT - EDGE CASES)

function twoSum(numbers, target) {
  let indices = [];
  for (i=0; i < numbers.length; i++){
    for (j= i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
        indices.push(i);
        indices.push(j);
      } 
    }
  } return indices;
}

// Return indices of sum equal to target - WORKBOOK (poor solution)

function twoSum(numbers, target) {
  let indices = [];
  let twoIndices = []
  for (i=0; i < numbers.length; i++){
    for (j= i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
        indices.push(i);
        indices.push(j);
      } 
    }
  } if (indices.length < 2){
    return indices
  } else if (indices.length > 2){
      twoIndices.push(indices[0])
      twoIndices.push(indices[1])
      return twoIndices;
    } 
  }

  // Fake Binary - WRONG ATTEMPT - not an array .push

  function fakeBin(x){
    let newString = ''
    for (i=0; i < x.length; i++){
      if (x[i] < 0){
        newString.push('0');
      } else if (x[i] >= '0'){
        newString.push('1')
      }
    } return newString;
  }

  // Fake binary - ANSWER

  function fakeBin(x){
    let newString = ''
    for (i=0; i < x.length; i++){
      if (x[i] < 5){
        newString += '0'
      } else {
        newString += '1'
      }
    } return newString;
  }

  // Square argument

  const square = (x) => {
    return x * x
  }

  // Parse nice int from char problem

  function getAge(inputString){
    return Number(inputString.charAt(0))
  }

  // Arithmetic 

  function arithmetic(a, b, operator){
    if (operator == 'add'){
      return a + b
    } else if (operator == 'subtract'){
      return a - b
    } else if (operator == 'multiply'){
      return a * b
    } else if (operator == 'divide'){
      return a / b
    }
  }

  // Saving a problem I could not solve - Build a pile of Cubes

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  const total = 0;
  const n = 0;
    while (total < m){
      
    }
}

// Grasshopper - Terminal game move forward

function move (position, roll) {
  return (roll * 2) + position
}

// Ternary operator

function saleHotdogs(n){
  return n * (n<5 ? 100 : n >= 5 && n < 10 ? 95 : 90)
}

// Quarter of the year

const quarterOf = (month) => {
  if(month < 4){
    return 1;
  } 
  if(month < 7){
    return 2;
  }
  if(month < 10){
    return 3;
  }
    else {
      return 4;
    }
 }

 // You're a square - math.sqrt takes square root... if divided by one and remainder equal zero

 var isSquare = function(n){
  return Math.sqrt(n) % 1 == 0;
}

// Calculate BMI 

function bmi(weight, height) {
  const bm = weight / (height * height)
  if (bm <= 18.5){
  return "Underweight";
    } else if (bm <= 25.0){
  return "Normal";
    } else if (bm <= 30.0){
  return "Overweight";
    } else if (bm > 18.5){
  return "Obese";
    }
}

// Return everything before the anchor

function removeUrlAnchor(url){
  return url.split('#')[0]
 }

 // Whats the real floor - ternary

 function getRealFloor(n) {
  return n <= 0 ? n : n > 13 ? n-2 : n-1;
}

// Reverse Words

function reverseWords(str) {
  return str.split('')
.reverse()
.join('')
.split(' ')
.reverse()
.join(' ');
}

// Split at every character to make array
// Reverse whole array
// Join all characters
// Words flipped but reversed
// Split words anywhere there's a space
// Reverse them back into order
// Join anywhere theres a space

// Ones and Zeros - understand the function but syntax?

const binaryArrayToNumber = arr => 
  parseInt(arr.join(''),2)
  
// Reverse list order

function reverseList(list) {
  return list.reverse();
}

// Exes and Ohs

function XO(str) {
  let countX = 0;
  let countO = 0;
  for (i=0; i < str.length; i++){
    if (str[i] == 'x' || str[i] == 'X'){
      countX = countX + 1;
    } else if (str[i] == 'o' || str[i] == 'O'){
      countO = countO + 1;
    }
  }
  if (countO != countX){
    return false;
  } else {
    return true;
  }
}

// Student's final grade

function finalGrade (exam, projects) {
  if (exam > 90 || projects >  10){
    return 100;
  } else if (exam > 75 && projects >= 5){
    return 90;
  } else if (exam > 50 && projects >= 2){
    return 75;
  } else {
    return 0;
  }
}

// Will there be enough space?

function enough(cap, on, wait) {
  return (on + wait) >= cap ? (on + wait) - cap : 0
}

// Century from year - Math.ceil rounds up

function century(year) {
  return Math.ceil( year / 100)
}

// Grosshopper Debug

function sayHello(name) {
  return `Hello, ${name}`
}

// Convert boolean to string

function boolToWord( bool ){
  if (bool == true){
    return "Yes"
  } else {
    return "No"
  }
}

// twice age

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let double = dadYearsOld - sonYearsOld * 2;
  return double < 0 ? double * (-1) : double;
}

// Descending order

function descendingOrder(n){
  let str = n.toString()
   .split('')
   .sort(function(a, b) {
       return b - a;
     })
     .join('');
 return parseInt(str);
}

// Money money money
function calculateYears(principal, interest, tax, desired) {
  let years = 0  
  while (principal < desired){
      principal += (principal * interest - (principal * interest * tax))
     years++;
    } return years
}

// Filter list

function filter_list(l) {
  let newList = [];
  for (i=0; i < l.length; i++){
    if (Number.isInteger(l[i])){
      newList.push(l[i])
    }
  } return newList
}

// Multiply

function simpleMultiplication(number) {
  if (number % 2 == 0){
    return number * 8
  } else {
    return number * 9
  }
}

// Repeat string

function repeatStr (n, s) {
  return s.repeat(n);
}

// Sort ascending

function solution(nums){
  return nums !== null ? nums.sort((a,b)=> a-b) : []
  }

// Shortest word

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(s => s.length))
}

// Occurences of letter in str

function strCount(str, letter){  
  let count = 0;
  for (i=0; i < str.length; i++){
    if (str[i] == letter){
      count = count + 1;
    }
  } return count
}


// Remove the minimum

function removeSmallest(numbers) {
  let newNum = numbers.slice(0);
  let small = numbers.indexOf(Math.min(...numbers));
  numbers.splice(small, 1);
  return numbers;
}

function removeSmallest(numbers) {
  let newNum = numbers.slice(0);
  let small = numbers.indexOf(Math.min(...numbers));
  newNum.splice(small, 1);
  return newNum;
}

// Plural

function plural(n) {
  if (n == 1){
    return false
  } else {
    return true
  }
}

// Sum the strings - not correct, does not account for empty string edge case

function sumStr(a,b) {
  let numA = parseInt(a);
  let numB = parseInt(b);
  if (a == 'zero'){
    return (0 + numB).toString();
  } else if (b == 'zero'){
    return (0 + numA).toString()
  } else {
    return (numA + numB).toString();
  }
}

// Correct answer 

function sumStr(a,b) {
  return String(+a + +b);
}

// Round to next multiple of 5

function roundtonext5(x) {
    return Math.ceil(x/5)*5;
}

// Remove first and last character from string

function removeChar(str){
  return str.slice(1, -1)
};

// Sort the odds - wrong solution - attempt - only sorted odd

function sortArray(array) {
  let newArr = [];
  for (i=0; i < array.length; i++){
    if (array[i] % 2 != 0){
      newArr.push(array[i])
    }
  } return newArr.sort((a, b) => a - b)
}

// Sort the odds - correct solution

function sortArray(array) {
  const oddArr = [];
  const evenArr = [];
  const result = [];for (let i = 0; i < array.length; i += 1) {
    if (array[i]%2 === 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }  oddArr.sort((a, b) => a - b);  for (let i = 0; i < array.length; i += 1) {
    if (array[i]%2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }  return result;
}

// Drink about

function peopleWithAgeDrink(old) {
  if (old < 14){
    return 'drink toddy'
  } else if (old < 18){
    return 'drink coke'
  } else if (old < 21){
    return 'drink beer'
  } else if (old >= 21){
    return 'drink whisky'
  }
};

// Hex to decimal 

function hexToDec(hexString){
  return parseInt(hexString, 16)
}

// Name shuffler

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let newArr = [0,0];
  if (input == null || input.length < 1){
    return [];
  }
  for (i=0; i < input.length; i++){
    if (input[i] > 0){
      newArr[0] = newArr[0] + 1;
    } else if (input[i] < 0){
      newArr[1] = newArr[1] + input[i];
    } 
  } return newArr
}

// Small enough? Beginner

function smallEnough(a, limit){
  for (i=0; i < a.length; i++){
    if (a[i] > limit){
      return false
    }
  } return true
}

// Square(n) Sum

function squareSum(numbers){
  let sum = 0;
  for (i=0; i < numbers.length; i++){
    sum += numbers[i] **2
  } return sum
}

// Addition to binary

function addBinary(a,b) {
  let sum = a + b;
  return sum.toString(2)
}

// Convert number to reversed string

function digitize(n) {
  return n.toString().split('').reverse().map(Number)
}

// Grasshopper combat

function combat(health, damage) {
  let newHealth = health - damage;
  if (newHealth < 0){
    return 0
  } else {
    return newHealth
  }
}

// Opposites attract

function lovefunc(flower1, flower2){
  if (flower1 % 2 == 0 && flower2 % 2 == 0){
    return false
  } else if (flower1 % 2 != 0 && flower2 % 2 != 0){
    return false
  } else {
    return true
  }
}

// Multiplication table - correct but not correct

function multiTable(number) {
  for (i=1; i <= 10; i++){
    let total = i * number
  return `${i} * ${number} = ${total}\n`
}}

// Multiplication table - correct

function multiTable(number) {
  let answer = ''
  for (i=1; i <= 10; i++){
    let total = i * number
    answer += `${i} * ${number} = ${total}\n`
} return answer.trim('\n')
}

// Training JS Types

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = 50,   
      b = 50;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  200, //set number value to a
      b =  100; //set number value to b
  return a - b;
}

function equal3(){
  let a =  50, //set number value to a
      b =  2; //set number value to b
  return a * b;
}

function equal4(){
  let a =  100, //set number value to a
      b =  1; //set number value to b
  return a / b;
}

function equal5(){
  let a =  250, //set number value to a
      b =  150; //set number value to b
  return a % b;
}

// Grasshopper - Factor of base

function checkForFactor (base, factor) {
  if (base % factor == 0){
    return true
  } else {
    return false
  }
}

// Wide mouthed frog

function mouthSize(animal) {
  if (animal == 'alligator' || animal == 'ALLIGATOR'){
    return 'small'
  } else {
    return 'wide'
  }
}

// The feast of many beasts

function feast(beast, dish) {
  if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]){
    return true;
  } else {
    return false;
  }
 }

 // Hello Name or World

 function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase()  + name.slice(1).toLowerCase() : "World"}!`;
}

// Sum of a sequence 

const sequenceSum = (begin, end, step) => {
  let count = 0;
  if (begin > end){
    return 0
  } else {
    for (let i = begin; i <= end; i += step) {
    count = count + i
  } return count
}}

// Grasshopper - Messi Goals

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// Correct the mistakes of the character 

function correct(string)
{
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}

// If you cant sleep just count sheep

var countSheep = function (num){
  let sheep = '';
  for (var i = 0; i < num; i++) {
    sheep += (i+1) + ' sheep...';
  }
  return sheep;
}

// The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

// Find the middle element

function gimme (triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

// Filling an array

const arr = N => {
  const arr = []
  for (i=0; i <= N-1; i++){
    arr.push(i)
  } return arr
  }

  // Hello World

  function greet() {
    return "hello world!"
}

// Grasshopper Basic Function Fix

function addFive(num) {
  var total = num + 5
  return total
}

// Bin to dec

binToDec = (bin) => parseInt(bin, 2)

// Exlamation marks at the end

const remove = (string) => {
  if (string[string.length - 1] === "!") {
        return string.slice(0, string.length - 1);
    } else {
        return string
    }
}

// Invert values

function invert(array) {
  let newArr = [];
   for (i = 0; i < array.length; i++){
     if (array[i] < 0){
       newArr.push (array[i] * -1)
     } else if (array[i] > 0){
       newArr.push (array[i] * -1)
     } else {
       newArr.push (array[i] * -1)
     }
   } return newArr
}

// Invert values - refactor

function invert(array) {
  let newArr = [];
   for (i = 0; i < array.length; i++){
     newArr.push(array[i] * -1)
   } return newArr
}

// Odd or Even

function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even"
  } else {
    return "Odd"
  }
}

// Find the min and max

var min = function(list){
  return Math.min(...list)
}

var max = function(list){
  return Math.max(...list)
}

// Sentence smash 

function smash (words) {
  return words.join(' ')
};

// Mumbling 

function accum(s) {
  const ans = []
  const lowercase = s.toLowerCase()

  for(let i = 0; i < lowercase.length; i++) {
    let str = lowercase[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowercase[i]
    }
    ans.push(str)
  }

  return ans.join("-")
}

// Two sum

function twoSum(numbers, target) {
  for(let i = 0; i<numbers.length; i++){
    for(let j = i+1; j<numbers.length; j++){
      let res = numbers[i] + numbers[j]
      if(res == target) return [i,j]
    }
  }
}


// Find the unique number

function findUniq(arr) {
  return arr.find(
     (item) => arr.indexOf(item) === arr.lastIndexOf(item) //
   );
 }
 

// How many light sabers do you own

function howManyLightsabersDoYouOwn(name) {
  if (name === 'Zach'){
    return 18
  } else {
    return 0
  }
}

// Testing 123

var number=function(array){
  return array.map((element, index) => `${index + 1}: ${element}`)
}

// Count by x

function countBy(x, n) {
  let z = [];
    for (i=1; i <= n; i++){
      z.push(x * i)
    }
  return z;
}

// Summation - grasshopper

var summation = function (num) {
  let sum = 0;
  for (i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

// Whats the real floor

function getRealFloor(n) {
  return n <= 0 ? n : n > 13 ? n-2 : n-1;
}

// Replace vowels with exclamation

function replace(s){
  return s.replace(/[aeiou]/gi, "!")
 }

 // Categorize new members

 function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

// Fix your code 

function rainAmount(mm){
  if (mm < 40) {
       return `You need to give your plant ${40 - mm}mm of water`
  }
  else {
       return "Your plant has had more than enough water for today!"
  }
}

// Super duper easy

function problem(x){
  if (typeof x == "string"){
    return "Error"
  } else {
    return (x * 50) + 6
  }
}

// Training Arrays

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

// High and low

function highAndLow(numbers){
  const num = numbers.split(" ");
  return `${Math.max(...num)} ${Math.min(...num)}`
}

// Replace vowels again

function shortcut (string) {
  return string.replace(/[aeiou]/gi, '')
//   for (i=0; i < string.length; i++){
//     if (i == "A" || i == "a" || i == "e" || i == "E" || i == "i" || i == "I" || i == "O" || || i == "o" || || i == "U" || i == "U")
//   }
}

// create js function

function helloWorld(){
  const str = 'Hello World!'
  console.log(str)
  }

// Sum of mixed data types

function sumMix(x){
  let sum = 0;
  for(let i = 0; i < x.length; i++) {
  if (typeof x[i] === 'string') {
    sum += Number(x[i])
  } else {
    sum += x[i]
  } 
} return sum
}

//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  let str = '';
  for(let i = 0; i< this.length; i++){
    if (this[i] == this[i].toLowerCase()){ 
      str += this[i].toUpperCase();
    } else {
      str += this[i].toLowerCase();
    }
  }
  return str
}

// Pre-fizz

function preFizz(n) {
  let ans = []
  for (let i = 1; i <= n; i++){
    ans.push(i)
  } return ans
}

// Return 5 without numbers

function unusualFive() {
  let arr = ["cat", "dog", "rat", "horse", "dolphin"]
  return arr.length;
}

// Number to binary

function toBinary(n){
  return Number(n.toString(2));
}

// Sum of two lowest numbers

function sumTwoSmallestNumbers(numbers) {  
  let [a, b] = numbers.sort((a, b) => a - b)
  return a + b
}

// Twice as old (repeat/different way)

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let double = dadYearsOld - sonYearsOld * 2;
  if (double < 0){
    return double * (-1)
  } else {
    return double
  }
}

// first way
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let double = dadYearsOld - sonYearsOld * 2;
//   return double < 0 ? double * (-1) : double;
// }

// Complimentary DNA

function DNAStrand(dna){
  let str = '';
  for (i=0; i < dna.length; i++) {
     if (dna[i] == 'A'){
      str = str + "T"
    } else if (dna[i] == 'T'){
      str = str + "A"
    } else if (dna[i] == 'G'){
      str = str + "C"
    } else if (dna[i] == 'C'){
      str = str + "G"
    }
  }
  return str
  }

// Add length

function addLength(str) {
  let newStr = str.split(" ").map((e) => `${e} ${e.length}`)
  return newStr
  }

  // I love you ...

  function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    for (i=0; i <= nbPetals; i++){
      arr.push(arr[i])
    } return arr[nbPetals - 1]
  //   return ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][nbPetals % 6]
  }

// Alan Partridge II

function apple(x){
  if (x**2 > 1000){
    return "It's hotter than the sun!!"
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }
}

// simple fun reverse letter

function reverseLetter(str) {
  return str.replace(/[^a-z]/gi,'').split('').reverse().join(''); 
 }

 // still not fully understanding regex

// Plural

function plural(n) {
  if (n == 1){
    return false
  } else {
    return true
  }
}

// Grasshopper syntax

function main (verb, noun){
  return verb + noun
}

// Powers of two

function powersOfTwo(n){
  let arr = [];
  for (let i=0; i<=n; i++){
    arr.push(2**i);
  }
  return arr
}

// Ball type

var Ball = function(ballType) {
  this.ballType = ballType || "regular"
};

// Determine gender

function chromosomeCheck(sperm) {
  if (sperm.includes('Y')){
    return `Congratulations! You're going to have a son.`
  } else {
    return `Congratulations! You're going to have a daughter.`
  }
}

// uppercase?

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}

// Abbreviate names

function abbrevName(name){
  return name.split(' ')
  .map((thing) => thing[0].toUpperCase())
  .join('.')
}

// Reverse 

function solution(str){
  return str.split("").reverse().join("")
} 

// Whats between

function between(a, b) {
  let between = [];
  for(let i = a; i <= b; i++){
   between.push(i);
}
  return between
}

// Sentence smash

function smash (words) {
  return words.join(' ')
};

// Two to one

function longest(s1, s2) {
  let a = [... new Set(s1.split(""))];
  let b = [... new Set(s2.split(""))];
  for (let i=0; i<b.length; i++){
  	a.push(b[i]);
  }
  let combo = [... new Set(a)];
  let final = combo.sort().join("");
  return final;
}

// Lario and Muigi

function pipeFix(numbers){
  let nums = [];
  for (i=numbers[0]; i <= numbers[numbers.length - 1]; i++){
    nums.push(i)
  }
  return nums
}

// Basic data types - objects

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// Sum of three numbers

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

  // Beginner sum of three numbers correct

  function getSum( a,b )
{
  let min = Math.min(a,b)
  let max = Math.max(a,b)
  return (max - min + 1) * (max + min) / 2
}

// Factorial

function factorial(n){
  if (n < 0) 
        return -1;
  else if (n == 0) 
      return 1;
  else {
      return (n * factorial(n - 1));
  }
}

// Index of capital letters

var capitals = function (word) {
	let ind = [];
  for (i=0; i < word.length; i++){
    if (word[i] == word[i].toUpperCase()){
      ind.push(i)
    }
  } return ind
};

// L1 Bartender, Drinks

// My answer - wrong

function getDrinkByProfession(param){
  let peop = param.toLowerCase();
  if (peop == "jabroni"){
    return "Patron Tequila"
  } else if (peop == "school counselor"){
    return "Anything with Alcohol"
  } else if (peop == "programmer"){
    return "Hipster Craft Beer"
  } else if (peop == "bike gang member"){
    return "Moonshine"
  } else if (peop == "politician"){
    return "Your tax dollars"
  } else if (peop == "rapper"){
    return "Cristal"
  } else {
    return "Beer"
  }
}

// Why? Figured it out ()

// Sort and star

function twoSort(s) {
const sorted = s.sort(); 
  return sorted[0] 
    .split("")
    .join("***"); 
}

// Sum of differences

function sumOfDifferences(arr) {
  let array = arr.sort((a,b) => b - a);
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    sum += array[i] - array[i + 1];
} return sum
}

// Grasshopper array mean

var findAverage = function (nums) {
  return (nums.reduce((a, b) => a + b, 0)/nums.length)
}

// Holiday VIII

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / normPrice / discount * 100)
 }

 // Check the exam

 function checkExam(array1, array2) {
  let score = 0
   for (i=0; i < array1.length; i++){
     if (array1[i] === array2[i]){
       score = score + 4
     } else if (array2[i] === ""){
       score = score - 0
     }
     else if (array1[i] !== array2[i]){
       score = score - 1
     }
   } if (score < 0){
     score = 0
   } return score
 }

 // Javascript array - incorrect

 function getEvenNumbers(numbersArray){
  numbersArray.filter(val => {
    if(value%2==0)
      return val
  })
}

// Javascript array - incorrect

function getEvenNumbers(numbersArray){
  let newArr = [];
  for (i=0; i < numbersArray.length; i++){
    if (numbersArray[i] % 2 == 0){
      newArr.push(i)
    } else if (numbersArray.length == 0){
      newArr = []
    }
  } return newArr
}

// Enumerable magic

function include(arr, item){
  return arr.includes(item)
}

// Grasshopper - summation

var summation = function (num) {
  return num * (num + 1) / 2
}

// Predict your age - this feels like bad code but it works

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let res = []
  res.push(age1 * age1)
  res.push(age2 * age2)
  res.push(age3 * age3)
  res.push(age4 * age4)
  res.push(age5 * age5)
  res.push(age6 * age6)
  res.push(age7 * age7)
  res.push(age8 * age8)
  let next = res.reduce((a, b) => a + b, 0)
  let follow = Math.sqrt(next)
  let fin = follow/2
  return Math.floor(fin)
}

// Find the remainder

function remainder(n, m){
  if (m == 0){
    return NaN
  } else if (n == 0){
    return NaN
  }
  else if (m > n){
    return m % n
  } else if (n > m){
    return n % m
  }
  
}

// String increment - wrong and bad code 

function incrementString (strng) {
  for (i=0; i < strng.length; i++){
    if (strng.length-1 == 1){
      return `${strng}+1`
    } else {
      let newStr = strng.slice[strng.length - 1]
      let arr = strng.split('');
      let add = strng[strng.length - 1];
      let newAdd = parseInt(add) + 1
      return newStr.concat(newAdd)
    }
  }
}

// Training JS #3 Basic data types string

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 +e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// Sum mixed arrays - duplicate

function sumMix(x){
  let sum = 0;
  for(let i = 0; i < x.length; i++) {
  if (typeof x[i] === 'string') {
    sum += Number(x[i])
  } else {
    sum += x[i]
  } 
} return sum
}

//Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  if (a == true && b == false){
    return true
  } else if (a == false && b == true){
    return true
  } else {
    return false
  }
}

// Beginner series cockroach - repeat

function cockroachSpeed(s) {
  return Math.floor(s * 27.78);
 }

// Unique in Order

var uniqueInOrder=function(iterable){
  return [...iterable].filter((element, index) => element != iterable[index + 1])
}

// Find the odd int

function findOdd(A) {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

// Row weights

function rowWeights(array){
  var odd = 0
  var even = 0
    for(var i=0;i<array.length;i++){
      if(i % 2 == 0){
      odd += array[i]
      } else {
      even += array[i]
      }
    }
    return [odd, even]
}

// Printing array

function printArray(array){
  return array.join()
}

// Flatten and sort

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// Find the position 

function position(letter){
  let alpha = "0abcdefghijklmnopqrstuvwxyz"
   return `Position of alphabet: ${alpha.indexOf(letter)}`
 }

 // Repeat - Odd or Even

 function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even"
 }

 // Twice as old - repeat

 function twiceAsOld(dadYearsOld, sonYearsOld) {
  let double = dadYearsOld - sonYearsOld * 2;
  if (double < 0){
    return double * (-1)
  } else {
    return double
  }
}

// Surface area and volume

function getSize(width, height, depth){
  return [(2 * width * height) + (2 * height * depth) + (2 * depth * width), width * height * depth]
}

// Training JS #8: Conditional statement--switch

function howManydays(month){
  var days;
  switch (month){
    case 1: 
      days=31
      break;
    case 2:
      days=28
      break;
    case 3:
      days=31
      break;
    case 4:
      days=30
      break;
    case 5:
      days=31
      break;
    case 6:
      days=30
      break;
    case 7:
      days=31
      break;
    case 8:
      days=31
      break;
    case 9:
      days=30
      break;
    case 10:
      days=31
      break;
    case 11:
      days=30
      break;
    case 12:
      days=31
      break;
  }
  return days;
}

// simple calculator

calculator = (a,b,sign) => {
    typeof a == 'number' 
  && typeof b == 'number' 
  && ['+', '-', '/', '*'].includes(sign) ? sign == '+' ? a + b : sign == '-' ? a - b : sign == '*' ? a * b : a / b : 'unknown value'
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump <= (fuelLeft * mpg)){
    return true
  } else {
    return false
  }
};

// sum of angles

function angle(n) {
  return (n - 2) * 180
}

// No loops - you only ned one

function check(a,x){
  return a.includes(x)
};

// Two decimal places

function twoDecimalPlaces(n) {
  return +n.toFixed(2)
}

// The highest profit wins

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

// Price of mangoes

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3))
}

// Friend or foe - repeat

function friend(friends){
  return friends.filter(i => i.length === 4);
}

// Grasshopper variable assignment

let a = "dev"
let b = "Lab"

let name = `${a}${b}`

// Reverse string - repeat

function solution(str){
  return str.split("").reverse().join("")
} 

// Take first N elements

function take(arr, n) {
  return arr.slice(0,n)
}

// USD to CNY

function usdcny(usd) {
  let conv = (usd * 6.75).toFixed(2)
  return `${conv} Chinese Yuan`
}

// Remainder - repeat - wrong

function remainder(n, m){
  if (m == 0){
    return NaN
  } else if (n == 0){
    return NaN
  }
  else if (m > n){
    return m % n
  } else if (n > m){
    return n % m
  }
}

// Merge two into one

function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  let fin = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      fin.push(arr[i]);
    }
  } return fin
}

// Welcome to city

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// Remove duplicates

function distinct(a) {
  return [...new Set(a)];
}

// Round next multiple of 5 - wrong

function roundToNext5(n){
  return Math.max(n * 5)
}

// Round next multiple of 5 - right

function roundToNext5(n){
  return Math.ceil(n/5)*5
 }

 // Reversed sequence - repeat

 const Seq = n => {
  let arr = [];
  for (i=n; i > 0; i--){
    arr.push(i)
  }
  return arr
};

// Form the minimum

function minValue(values){
  return +[...new Set(values)].sort().join('')
}

// Fundamentals return

function add(a,b){
  return a + b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a ** b
}
  
function subt(a,b){
  return a - b
}

// Return suits

function defineSuit(card) {
  let suit = card.substr(-1);
   switch(suit){
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      default: return 'spades';
   }}

// If func

function _if(bool, func1, func2) {
  bool ? func1() : func2()
}

// Is the string uppercase

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}

// Reduce but grow

function grow(x){
  return x.reduce((a, b)=> a * b,1)
}

// Even numbers in an array

function evenNumbers(array, number) {
  let arr = [];
  for (i=0; i < array.length; i++){
    if (array[i] % 2 == 0){
      arr.push(array[i])
    }
  } return arr.slice(-number)
}

// Odd or even - repeat

function evenNumbers(array, number) {
  let arr = [];
  for (i=0; i < array.length; i++){
    if (array[i] % 2 == 0){
      arr.push(array[i])
    }
  } return arr.slice(-number)
}

// Greet me 

var greet = function(name) {
  return `Hello ${(name.slice(0,1).toUpperCase())+(name.slice(1).toLowerCase())}!`
};