let str = "the-stealth_warrior";

//Convertir la primera letra de cada palabra en mayúscula
function toCamelCase(str){
    if(str.length === 0){
        return str;
    }
    let wordsArray = str.split(/-|_/);
    for(let i = 1; i < wordsArray.length; i++){
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    return wordsArray.join("");
}

toCamelCase(str);

//====================================================================================================

//Función para saber si un número es narcissistico (o sea, un número que es igual a la suma de la potencia de cada número del número)
let value = 153;
function narcissistic(value) {
    // Code me to return true or false
    let strValue = value.toString();
    let valueArr = strValue.split("");
    let length = valueArr.length;
    let sum = 0;

    if(length === 0){
        return false;
    }

    for(let i = 0; i < length; i++){
        sum += Math.pow(valueArr[i], length);
    }

    if(sum === value){
        return true;
    } else {
        return false;
    }
  }

narcissistic(value);


//====================================================================================================

//Función para separar los liquidos de una vaso

let densityChart = {
    'H': 1.36,
    'W': 1.00,
    'A': 0.87,
    'O': 0.80
}
let glass = [['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']]

function separateLiquids(glass) {
    let newGlass = [];
    for(let i = 0; i < glass.length; i++){
        for(let j = 0; j < glass[i].length; j++){
            newGlass.push(glass[i][j]);
        }
    }

    let sortedGlass = newGlass.map(letter => densityChart[letter]).sort();
    
    for(let i = 0; i < sortedGlass.length; i++){
        sortedGlass[i] = Object.keys(densityChart).find(key => densityChart[key] === sortedGlass[i]);
    }

    for(let i = 0; i < glass.length; i++){
        for(let j = 0; j < glass[i].length; j++){
            glass[i][j] = sortedGlass.shift();
        }
    }

    return glass;
  }

  separateLiquids(glass);

//====================================================================================================

//Función para saber si un número es un cuadrado

let n = 3;
let isSquare = function(n){
    if(n < 0){
      return false;
    } else if(n === 0){
      return true;
    } else if(Math.sqrt(n) % 1 === 0){
      return true;
    } else {
      return false;
    }
}

  isSquare(n);

//====================================================================================================

//Funcion para separar string en pares de letras

let string = "abcdfgre";

function solution(string) {
    let strArr = string.split("");
    let result = [];

    for(let i = 0; i < strArr.length; i+=2){
        if(strArr[i + 1]) {
            result.push(strArr[i] + strArr[i + 1]);
        } else {
            result.push(strArr[i] + "_");
        }
    }
    return result;
}

solution(string);

//====================================================================================================

//Funcion para generar un hashtag a partir de un string

let string2 = "las abejas son lindas"

function generateHashtag (string2) {
    if(string2.length === 0 || string2 === "#" || string2.trim() === " "){
      return false;
    }
    let newStr = string2.split(" ");
    for(let i = 0; i < newStr.length; i++){
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    newStr.unshift("#");
    let finalResult = newStr.join("")
    if(finalResult.length > 140){
        return false;
    }
    return finalResult;
}

generateHashtag(string2);

//====================================================================================================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
    let newNum = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++){
      newNum = newNum.replace("x", numbers[i]);
    }
    
    return newNum;
  }
  
  createPhoneNumber(numbers);