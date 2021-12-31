//OR || <-- pipe character not lowercase L 
// only one side needs to be true! 
//if one side is true, then the whole thing is true 

// 1 !==1 || 10===10 // true because 10 is equal to 10 
// 10/2===5||null //true because 10/2 is 5 
// 0||undefined //false because neither side is true 


// //example; children under the age of 6 get in for free and adults over 65 get in for free as well 

// let age = 75;

// if(age<6||age >=65){
//     console.log ("You get in for free!");
// }else{
//     console.log("You must pay $10 for entry ")
// }

let color="green";

if (color==='purple'||color==='violet'||color==='lilac'){
    console.log("GREAT CHOICE");
}else{
    console.log("get some taste")
}