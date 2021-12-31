//all values in JS have inherent truthy or falsey boolean value 
//falsey values: 
// //false 
// 0
// '' (empty string)
// null 
// undefined
// NaN 
//everything else is truthy! 

//truthy is checking to see if something is there 

let mystery='str';

if (mystery){
    console.log("TRUTHY");
}else {
    console.log("Falsy")
}

let loggedInUser=null;
if (loggedInUser){
    console.log('you are logged in')
}else{
    console.log('please log in')
}