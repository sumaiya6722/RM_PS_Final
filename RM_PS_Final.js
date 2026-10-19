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






 /** 5.
  * @param {number} number
  * @return {number}
  */
var opposite = function(number) {
 	return number<0 ? Math.abs(number) : -Math.abs(number);
 };






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







 /** 7.
  * @param {boolean} weekday
  * @param {boolean} vacation
  * @return {boolean}
  */
var sleepIn = function(weekday, vacation) {
 	if(!weekday || vacation){
    return true;
  }else{
    return false;
  }
 };








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





/** 11.
  * @param {boolean} talking
  * @param {number} hour
  * @return {boolean}
  */
var parrotTrouble = function(talking, hour) {
 	if(talking){
    if(hour<7 || hour>20){
      return false;
    }else{
      return true;
    }
  }else{
    return false;
  }
 };





/** 12.
  * @param {number} a
  * @param {number} b
  * @return {boolean}
  */
var makes10 = function(a, b) {
 	if(a === 10 || b ===10){
    return true;
  }else{
    if(a+b === 10){
      return true;
    }else{
      return false;
    }
  }
 };




/** 13.
  * @param {number} n
  * @return {boolean}
  */
var nearHundred = function(n) {
 	if (Math.abs(100-n)<=10 || Math.abs(200-n)<=10){
    return true;
  }else{
    return false;
  }
 };





/** 14.
  * @param {number} a
  * @param {number} b
  * @param {boolean} negative
  * @return {boolean}
  */
var posNeg = function(a, b, negative) {
 	if(negative){
    if(a<0 && b<0){
      return negative;
    }else{
      return !negative;
    }
  }else{
    if((a<0 && b>0) || (a>0 && b<0)){
      return true;
    }else{
      return false;
    }
  }
 };





/** 15.
  * @param {string} str
  * @return {string}
  */
var notString = function(str) {
 	if((str == 'not') || str.startsWith('not')){
    return str;
  }else{
    return 'not'+ " " + str;
  }
 };





/** 16.
  * @param {number[]} a
  * @param {number[]} b
  * @return {number[]}
  */
var compareTriplets = function(a, b) {
  let aPoint = 0;
  let bPoint = 0;
 	for (let i=0;i<a.length;i++){
    if(a[i]>b[i]){
      aPoint++;
    }else if(a[i]<b[i]){
      bPoint++;
    }
  }
  return [aPoint, bPoint];
 };






/** 17.
  * @param {number[]} ar
  * @return {number}
  */
var aVeryBigSum = function(ar) {
  let sum = 0;
 	for(let i = 0; i<ar.length; i++){
    sum = sum + ar[i];
  }
  return sum;
 };




/** 18.
  * @param {number} n
  * @return {string}
  */
var staircase = function(n) {
 	let result = '';
  for(let i=1; i<=n; i++){
    let line = '';
    for(let s=0; s<n-i; s++){
      line = line + " ";
    }
    for(let h=0; h<i; h++){
      line = line + "#";
    }
    if(i<n){
      line = line + '\n';
    }
    result = result + line;
  }
  return result;
 };





/** 19.
  * @param {number[]} grades
  * @return {number[]}
  */
var gradingStudents = function(grades) {
  let row = [];
 	for(let i=0; i<grades.length; i++){
    if((grades[i]%5 < 3) || grades[i]<38){
      row.push(grades[i]);
    }else{
      let remainder = grades[i] % 5;
      let addNeeded = 5-remainder;
      row.push(grades[i] + addNeeded);
    }
  }
  return row;
 };





/** 20.
  * @param {string} s
  * @return {string}
  */
var timeConversion = function(s) {
 	let word = s.split(':');
  let newStr = Number(word[0]) + 12;
  word[0] = newStr.toString();
  let result = word.join(':');
  return result;
 };





/** 21.
  * @param {number} n
  * @param {string} s
  * @return {string}
  */
var repeatStr = function(n, s) {
 	let word = '';
  for (let i=0; i<n; i++){
    word = word+s;
  }
  return word;
 };





/** 22.
  * @param {string} str
  * @return {string}
  */
var solution = function(str) {
 	let word = '';
  for (let i=str.length-1; i>=0; i--){
    word = word + str[i];
  }
  return word;
 };





/** 23.
  * @param {number[]} arr
  * @return {number}
  */
var positiveSum = function(arr) {
 	let sum = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]> 0){
      sum = sum + arr[i];
    }
  }
  return sum;
 };






/** 24.
  * @param {number} num
  * @return {number}
  */
var summation = function(num) {
 	let sum = 0;
  for(let i=1; i<=num; i++){
    sum =sum + i;
  }
  return sum;
 };





/** 25.
  * @param {boolean} b
  * @return {string}
  */
var booleanToString = function(b) {
 	if (b){
    return b.toString();
  }
  else{
    return b.toString();
  }
 };
console.log(booleanToString(true));