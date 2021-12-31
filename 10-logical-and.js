//logical operators modify other boolean expressions 

//AND (&&); can only be true if both sides are true

// 1<=4 && 'a'==='a'; //true 
// 9>10&& 9>=9; //false 
// 'abc'.length===3 && 1+1===4; //false 


// let password='chickenGal';

// if (password.length>=8 && password.indexOf(' ')===-1){
//     console.log('valid password!');

// }else {console.log("INVALID PASSWORD ")}


//check if number is in a specific range 

let num =3 ; 
if (num>=1&&num<=10){
console.log("number is between 1 and 10!")
}else {
    console.log("number is greater than 10")
}