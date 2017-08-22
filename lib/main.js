const zipCodeDemo =['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
const frame = '|';

function checkDash(input) {
    let digit = input.split('');
    if(digit.includes('-')){
        digit.splice(digit.indexOf('-'),1);
    }
    return digit;
}

function getDigitWithCD(digit){
    let sum = 0;
    digit.forEach((i)=>sum += i);
    let CD = sum % 10
    digit.push(CD);
    return digit;
}

function encoding(digitArr){
    let result = '';
    digitArr.map((i)=>{
        i = zipCodeDemo[i];
        result += i;
    });
    return result = frame + result + frame;
}

function zipCoding(input) {
    let digit = checkDash(input);
    let digitArr = getDigitWithCD(digit);
    return encoding(digitArr);
}

function splitCode(input){
    let arr = input.split('');
    arr.pop();
    arr.shift();
    let str = arr.join('');
    let codeArr = [];
    for(let i = 0;i < str.length;i+=5){
        codeArr.push(str.substr(i,5))
    }
    return codeArr;
}

function decoding(codeArr){ 
    let digit = [];
    for(let i of codeArr) {
        let index = zipCodeDemo.indexOf(i);
        if(index === -1){
            console.log('Error Code!');
            return;
        }
        digit.push(index);
    }
    digit.pop();
    return digit;
}

function buildDigitcode(digit){
    if(digit.length === 9) {
        digit.splice(5,0,'-');
    }
    return digit.join('');
}

function postCoding(input){
    let codeArr = splitCode(input);
    let digitArr = decoding(codeArr);
    return buildDigitcode(digitArr);
}

function main(input){
    if(input.includes('|')){
         return postCoding(input);
    }
    return zipCoding(input);
}

module.exports = main;
