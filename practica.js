let str = "the-stealth_warrior";

function toCamelCase(str){
    if(str.length === 0){
        return str;
    }
    let wordsArray = str.split(/-|_/);
    for(let i = 1; i < wordsArray.length; i++){
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    console.log(wordsArray.join(""));
    return wordsArray.join("");
}

toCamelCase(str);

//====================================================================================================

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