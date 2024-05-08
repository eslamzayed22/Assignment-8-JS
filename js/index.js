// 1- Write a program that allow to user enter number then print it

// var userNum = window.prompt("enter your number")
// console.log(userNum);

// ____________________________________________________________________________________________________________

// 2-  Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var userNum = window.prompt("enter your number") 
// if (userNum %3===0 && userNum %4===0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// ____________________________________________________________________________________________________________

// 3- Write a program that allows the user to insert 2 integers then print the max

// var x = window.prompt("enter your first number")
// var y = window.prompt("enter your second number")
// if (x > y) {
//     console.log(Number = x);
// } else {
//     console.log(Number = y);
// }

// ____________________________________________________________________________________________________________

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var userNum = window.prompt("enter your number")
// if (userNum < 0) {
//     console.log("negative");    
// } else if (userNum == 0) {
//     console.log("zero");
// } else {
//     console.log("positive");
// }

// ____________________________________________________________________________________________________________

// 5- Write a program that take 3 integers from user then print the max element and the min element.

// var x = window.prompt("enter your first number");
// var y = window.prompt("enter your second number");
// var z = window.prompt("enter your third number");
// var max = x;
// var min = x;
// if (y > max) {
//     max = y;
// } else if (y < min) {
//     min = y;
// }
// if (z > max) {
//     max = z;
// } else if (z < min) {
//     min = z;
// }
// console.log("max element=", max);
// console.log("min element=", min);

// ____________________________________________________________________________________________________________

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var userNum = window.prompt("enter your number")
// if (userNum %2 == 0) {
//     console.log("even");
// } 
// else {
//     console.log("odd");
// }

// ____________________________________________________________________________________________________________

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var userChar = window.prompt("enter your Letter")
// if (userChar === "a" || userChar === "e" || userChar === "I" || userChar === "o" || userChar === "u" ) {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }

// ____________________________________________________________________________________________________________

// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var input = window.prompt("enter your number")  
// var i = 1 
// for (  ; i <= input ; i++) {
//     console.log(i);
// }

// ____________________________________________________________________________________________________________

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var userNum = window.prompt("enter your number");
// for (var i = 1; i <= 12 ; i++) {
//     console.log(userNum * i);
// }

// ____________________________________________________________________________________________________________

// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var userNum = window.prompt("enter your number");
// for (var i = 1 ; i  < userNum ; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// ____________________________________________________________________________________________________________

// 12- Write a program that take two integers then print the power

// var num1 = window.prompt("first num")
// var num2 =  window.prompt("second num")
// console.log(num1 ** num2)

// ____________________________________________________________________________________________________________

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var num1 = window.prompt('enter first subject')
// var number1 = parseInt(num1);
// var num2 = window.prompt('enter second subject')
// var number2 = parseInt(num2);
// var num3 = window.prompt('enter third subject')
// var number3 = parseInt(num3);
// var num4 = window.prompt('enter fourth subject')
// var number4 = parseInt(num4);
// var num5 = window.prompt('enter fifth subject')
// var number5 = parseInt(num5);
// console.log(total = (number1 + number2 + number3 + number4 + number5));
// console.log(total / 5);
// console.log((total / 500) * 100 +"%");

// ____________________________________________________________________________________________________________

// 13-Write a program to input month number and print number of days in that month.

// var month = window.prompt("enter tne month")
// if (month == 1 || month == 3 || month == 5 ||month == 7 || month == 8 || month == 10 || month == 12) {
//     console.log("31");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("30");
// } else if (month == 2) {
//     console.log("28");
// } else {
//     console.log("It's not a month");
// }

// ____________________________________________________________________________________________________________

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade


// var num1 = window.prompt('enter Physics subject')
// var Physics = parseInt(num1);
// var num2 = window.prompt('enter Chemistry subject')
// var Chemistry = parseInt(num2);
// var num3 = window.prompt('enter Biology subject')
// var Biology = parseInt(num3);
// var num4 = window.prompt('enter Mathematics subject')
// var Mathematics = parseInt(num4);
// var num5 = window.prompt('enter Computer subject')
// var Computer = parseInt(num5);

// console.log ((precentage = ((Physics + Chemistry + Biology + Mathematics + Computer) / 500) * 100) + '%' ) 
// if(precentage>=90){
//     console.log("Grade A")
// } else if(precentage>=80){
//     console.log("Grade B")
// } else if(precentage>=70){
//     console.log("Grade C")
// } else if(precentage>=60){
//     console.log("Grade D")
// } else if(precentage>=50){
//     console.log("Grade E")
// } else if(precentage>=40){
//     console.log("Grade F")
// }

// ____________________________________________________________________________________________________________

// 15- Write a program to print total number of days in month

// var month = window.prompt("enter your number") 
// switch (month) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//         console.log("31");
//         break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         console.log("30");
//         break;
//     case "2":
//         console.log("28");
//         break;
//     default:
//         console.log("It's not a month")
// }

// ____________________________________________________________________________________________________________

// 16- Write a program to check whether an alphabet is vowel or consonant  (a,e,I,o,u)

// var alph = window.prompt("enter your Letter") 
// switch (alph) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vowel");
//         break;

//     default:
//         console.log("consonant");
//         break;
// }

// ____________________________________________________________________________________________________________

// 17- Write a program to find maximum between two numbers 

// var x = window.prompt("enter your first number")
// var y = window.prompt("enter your second number")
// switch (true) {
//     case x > y:
//         console.log(x);
//         break;
//     case x < y: 
//         console.log (y)
//         break;
//     case x == y: 
//         console.log ('two numbers are the same')
//         break;
//     default:
//         console.log("error");
//         break;
// }

// ____________________________________________________________________________________________________________

// 18- Write a program to check whether a number is even or odd

// var num = window.prompt("enter your number") 
// switch (true) {
//     case num % 2 == 0:
//         console.log("even");
//         break;
//     default:
//         console.log("odd");
//         break;
// }

// ____________________________________________________________________________________________________________

// 19- Write a program to check whether a number is positive or negative or zero

// var num = window.prompt("enter your number") 
// switch (true) {
//     case num > 0:
//         console.log("positive");
//         break;
//     case num == 0:
//         console.log("Zero");
//         break;
//     default:
//         console.log("Negative");
//         break;
// }

// ____________________________________________________________________________________________________________

// 20- Write a program to create Simple Calculator

// var num1 = window.prompt('enter first number');
// var number1 = parseInt(num1);
// var operator = window.prompt('enter the operator ( + , - , * , / )');
// var num2 = window.prompt('enter second number');
// var number2 = parseInt(num2);
// var result;

// switch (operator) {
//     case '+' :
//         console.log(number1 + number2);
//         break;
//     case '-' :
//         console.log(number1 - number2);
//         break;
//     case '*' :
//         console.log(number1 * number2);
//         break;
//     case '/' :
//         console.log(number1 / number2);
//         break;
//     default:
//         console.log('error');
//         break;
// }
