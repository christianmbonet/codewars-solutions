// Multiply

function multiply(a, b){
    return a * b
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