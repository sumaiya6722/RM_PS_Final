/** 1.
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var solveMeFirst = function(a, b) {
 	return a + b;
 };




/** 2.
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var multiply = function(a, b) {
 	return a*b;
 };




 /** 3.
  * @param {number} number
  * @return {string}
  */
var evenOrOdd = function(number) {
 	return number%2==0 ? 'Even' : 'Odd';
 };




 /** 4.
  * @param {number} number
  * @return {number}
  */
var makeNegative = function(number) {
 	return number>0 ? `-${number}` : number;
 };

console.log(makeNegative(9));




 /** 5.
  * @param {number} number
  * @return {number}
  */
var opposite = function(number) {
 	return number<0 ? Math.abs(number) : -Math.abs(number);
 };

console.log(opposite(-5));




/** 6.
  * @param {number[]} ar
  * @return {number}
  */
var simpleArraySum = function(ar) {
  let sum = 0;
  for (let i = 0; i<ar.length; i++){
    sum = sum+ar[i];
  };
  return sum;
 };

 console.log(simpleArraySum([5,6,7,8]));





 /** 7.
  * @param {boolean} weekday
  * @param {boolean} vacation
  * @return {boolean}
  */
var sleepIn = function(weekday, vacation) {
 	if(!weekday || vacation){
    return false;
  }else{
    return true;
  }
 };
console.log(sleepIn(false, true));







/** 8.
  * @param {boolean} aSmile
  * @param {boolean} bSmile
  * @return {boolean}
  */
var monkeyTrouble = function(aSmile, bSmile) {
 	if((aSmile && bSmile) || (!aSmile && !bSmile)){
    return true;
  }else{
    return false;
  }
 };
console.log(monkeyTrouble(true, false));




/** 9.
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var sumDouble = function(a, b) {
  if(a === b){
    return (a+b)*2;
  }else{
    return a+b;
  }
 };
console.log(sumDouble(3,4))




/** 10.
  * @param {number} n
  * @return {number}
  */
var diff21 = function(n) {
 	if(n>21){
    return (n-21)*2;
  }else{
    return Math.abs(n-21);
  }
 };

console.log(diff21(11))

