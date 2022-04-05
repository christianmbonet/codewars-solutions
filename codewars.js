// Multiply 8kyu

function multiply(a, b){
    return a * b
  }

// Square every digit 7kyu

function squareDigits(num){
    let string = num.toString();
    let results = [];
    for (i=0; i < string.length; i++){
      results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
  }
  
  squareDigits(2);

// String ends with 7kyu

function solution(str, ending){
  return str.endsWith(ending);
}

const solution = (str, ending) => {
    return str.endsWith(ending)
}

