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

//---------------CLASS 3 CODE------------------
//Combine 2 object in on Object

// let obj_1={
//     firstName:"Fahad",
// }

// let obj_2={
//     lastName:"khan",
//     ageObject:{
//         age:22
//     }
// }
//  let newObj=Object.assign(obj_1,obj_2);

//  obj_2.ageObject.age=false;
//  obj_1.firstName="saad";
// console.log(newObj);
// console.log(obj_2);



//To made true copy of object
// let obj_2={
//     lastName:"khan",
//     ageObject:{
//         age:22
//     }
// }

// let stringify=JSON.parse(JSON.stringify(obj_2))
// stringify.ageObject.age=25;

// console.log(obj_2)
// console.log(stringify)



//take default value in parameter
// function nameCheck(name="osama") {
//     let message= `wellcome to ${name}`
//     console.log(message);
// }

// nameCheck("saad");


//DESTRUCTURE THROUGH FUNNCTION PARAMETER

// function obj({name="fahad Khan",profession="web-developer"}={}) {
//     let msg=`my Name is ${name} and my profession is ${profession}`
//     console.log(msg)
// }
// obj({name:"Maaz",profession:"devops developer"});
// obj();
// console.log("=========================================")

// function obj2({name="fahad Khan",profession="web-developer",...rest}={}) {
//     let msg=`my Name is ${name} and my profession is ${profession}`
//     console.log(msg)
//     console.log(rest)
// }
// obj2({name:"Maaz",profession:"devops developer",val1:12,val2:24});
// obj2();

//SHORT CIRCUIT

// let gender="male";
// let result=gender=="male" && "blue";
// console.log(result);
