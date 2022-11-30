// alert("Sain Baina uu");
// console.log("Hello World")


// let name = "Mars", age; 
// let number_1 = 21 ,number = 3 ; 
// console.log(name);
// console.log(age);

// console.log(typeof name);
// console.log(typeof age);

// console.log(age);
// age = null;
// console.log(age);

// age=number_1-number;

// console.log(age);

// Comments can make code readable
// Javascript lesson begin



/* Comments can 
make code 
readable */


// number, string, boolean, undefined, null
// let number = 17;
// let string = "Sain baina uu?";
// let boolean = true ;
// let underfined = undefined ;
// let bad = null;
// console.log(number, string, boolean, underfined, bad );
// console.log(typeof(number));
// console.log(typeof(string));
// console.log(typeof(boolean));
// console.log(typeof(underfined));
// console.log(typeof(bad));

//TASK6

// let huvisagch;

//task7

// let utga_onooson = "string";

//task8 Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах.  

// let first_name;
// let last_name;
// let marital_status ;
// let country ;
// let age;

// task9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 

// let First_name, Last_name, Marital_status, Country, Age; 

// task10. MyAge, yourAge нэртэй хувьсагч зарлан эхний утгыг оноох 

// const A=12, B=13, C=14;
// let PRIMETR=A+B+C;

// console.log("primetr =" + " " + PRIMETR);

// task22. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

// let number, firstNumber, arr;
// number = prompt("3n orontoi toogoo oruulna uu");
// firstNumber= number%100;
// arr=number-firstNumber
// console.log(arr/100)

// let weekNumber , weekName = "Ta Zuw Utga Oruulna uu.";

// weekNumber=prompt("Ta Toogoo Oruulna Uu?");

// if(weekNumber == 1 ){
//     weekName = "Dawaa";
// }else if(weekNumber == 2 ){
//     weekName = "Myagmar";
// }else if(weekNumber == 3 ){
//     weekName = "Lhagwa";
// }else if(weekNumber == 4 ){
//     weekName= "Purew";
// }else if(weekNumber == 5){
//     weekName = "Baasan";
// }else if(weekNumber == 6 ){
//     weekName= "Byamba";  
// }else if(weekNumber == 7 ){
//     weekName= "Nyam";
// }
// console.log(weekName);    


// let gender = "female", age = 19;

// if(gender=== "male" && age >= 18 ){
//     console.log("Ta nasand hvrsen ergegtei")
// }else{
//     console.log("Ta nasand hvreegui eswel tanii hvis tohirohgui baina")
// }

// let a, b, c, d, sum=0;

// a = prompt("1-dehi toogoo oruulna uu.");
// b = prompt("2-dehi toogoo oruulna uu.");
// c = prompt("3-dehi toogoo oruulna uu.");
// d = prompt("4-dehi toogoo oruulna uu.");


// if(a > 80){
//     sum += Number(a);
// }
// if(b > 80){
//     sum += Number(b);
// }
// if(c > 80){
//     sum += Number(c);
// } 
// if(d > 80){
//     sum += Number(d);
// }

// console.log("80-aas ih toonuudiin niilber = " , sum)

// let a, b, c, d, sum=1;

// a = prompt("1-dehi toogoo oruulna uu.");
// b = prompt("2-dehi toogoo oruulna uu.");
// c = prompt("3-dehi toogoo oruulna uu.");
// d = prompt("4-dehi toogoo oruulna uu.");

// if(a < 5){
//     sum *= Number(a);
// }
// if(b < 5){
//     sum *= Number(b);
// }
// if(c < 5){
//     sum *= Number(c);
// } 
// if(d < 5){
//     sum *= Number(d);
// }

// console.log("5-aas baga toonuudiin vrjwer = " , sum);

// let i = 4 > 3; //true
// let iii = 4 < 3; //false
// let ii = 4 >= 3; //true
// let iv = 4 <= 3; //true
// let v = 4 == 4; // true
// let vi = 4 === 4; // true  
// let vii = 4 != 4; // false
// let iix = 4 !== 4; // false
// let ix = 4 != "4"; // false 
// let x = 4 == "4"; // true
// let xi = 4 === "4"; // false

// console.log(i);
// console.log(iii);
// console.log(ii);
// console.log(iv);
// console.log(v);
// console.log(vi);
// console.log(vii);
// console.log(i);
// console.log(i);
// console.log(i);
// console.log(i);

// let myAge=18, yourAge;

// yourAge = prompt("Ta Nasaa Oruulna uu:");

// if(yourAge > myAge){
//     console.log("Nadaas ah eswel egch yum baina");
// }else if(yourAge < myAge){
//     console.log("Nadaas dvv yum baina");
// }else if(yourAge == myAge){
//     console.log("chitsuu yum baina naizlii");
// }

// let hours, ratePerHours=28, tsalin=0;

// hours = prompt("Ta ajillasan tsagaa oruulna uu:");

// tsalin = hours * ratePerHours;
// console.log("Tanii tsalin:", tsalin , "$" );

let leapYear = 2004, answer;

if(leapYear % 400 === 0){
    answer="It's leapYear";
}else if(!leapYear % 100 == 0 && leapYear % 4 ===0 ){
    answer="It's Leap Year";
}else{
    answer = "It's not Leap Year";
}{
    answer = "It's Not Leap Year";
}
console.log(answer);