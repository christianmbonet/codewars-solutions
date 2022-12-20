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