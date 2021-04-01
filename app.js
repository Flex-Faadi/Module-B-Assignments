//--------ASSIGNMENT "1"-------------

//------------DESTRUCTRING OF ARRAY/NESTED ARRAY--------------

// let arr_1=["Fahad","Khan",21,"Front-end Developer",["Work for the Best"]]
// let [firstName,lastName,age,experties,[moto]] = arr_1;
// console.log(firstName,lastName,age,experties,moto);


//-------------EXTRACTING OF KEYS AND VALUES FROM AN OBJECT--------------

// let obj={
//     fullName:"Fahad khan",
//     age:21,
//     experties:"Front-end Developer",
//     nestedObj:{
//         moto:"Work for the Best"
//     }
// }
// let {fullName,age,experties,nestedObj:{moto}} = obj; //object destructuring
// console.log(fullName,age,experties,moto) 
// console.log(Object.values(obj)); //For values
// console.log(Object.keys(obj)); //For keys


//--------ASSIGNMENT "2"-------------

//1- overwrite value while making new object using Object.assign
// let obj={
//     fullName:"Fahad Khan",
//     fatherName:"Sajid Hameed Khan",
// }
// let obj2={
//     age:22,
//     profession:"Web Development",
//     hobbyObject:{
//         hobbies:"Cricket"
//     }
// }

// Object.assign(obj,obj2);

// obj2.hobbyObject.hobbies="football"
// console.log(obj2)
// console.log(obj)

//2- nested ternary operator
// function nestedTernary() {
//     let number=22;
//     let result=  number < 10 ? "This value is under 10"
//          : number == 10 ? "This value Equal to 10"
//          : number > 10 && number < 20 ? "This value is greather than 10 and under 20"
//          : "This is unknown value";
//          console.log(result)
// }
// nestedTernary();



//for in and for of loop
// const student = {
//     name: 'FAHAD',
//     class: 13,
//     age: 21
// }
// //FOR-IN LOOP
// for ( let key in student ) {

//     console.log(`${key} => ${student[key]}`);
// }

//For-OF Loop
// let obj=[21,22,33,44,55]
// for (let key of obj) {
//     console.log(key);
// }

// What is arrow function?
// nestedTernary = () => {
//     let number=22;
//     let result=  number < 10 ? "This value is under 10"
//          : number == 10 ? "This value Equal to 10"
//          : number > 10 && number < 20 ? "This value is greather than 10 and under 20"
//          : "This is unknown value";
//          console.log(result)
// }
// nestedTernary();


//--------ASSIGNMENT "3"-------------
//1- How to unique, sort an array in ascending order?
// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5];
// arr.sort(function(a, b){return a-b});
// console.log([...new Set(arr)]);

//2- Print values using for loop in the following sequence
// let num = 5;
// let j;
// let i;
// for (i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i)
//         console.log("")
        
//     }
// }

//3- Sum the folliwg number using for loop
// let num = prompt("Enter your number");
// JSON.parse(num)
// let total = 0;
// for (let i = 0; i < num.length; i++) {
//     total += Number(num[i]); 
    
// }

// console.log(total)


//4- Find the third highest number in array using Set, sort and reverse
// const arr = [1,210,5,7,65,5,20,8,210,65];
// arr.sort(function(a, b){return a-b});
// let newArr=[...new Set(arr)];
// newArr.reverse();
// console.log(newArr[2])//RETURN THIRD HIGHEST NUMBER OF ARRAY
