//NOT only has one character (!)
//! expression returns true if the expression is false 
//operated on a single expression, unlike the other two 

// !null //true because this is a falsey value 
// !(0===0) //false 
// !(3<=4) //false 

let loggedInUser; 

//if there isnt a logged in user, then do something 

if (!loggedInUser){//with the !not operator there is no need for the else
console.log("Get out of here !")

}

let flavor ='orange';

// if (flavor !== 'grape' && flavor !== 'cherry'){
//     console.log("we do not have that flavor !");
// }

//this can be shortened with the below code using the ! expression 

if (!(flavor==='grape'||flavor==='cherry')){//or operator if one is true then the whole thing is true; with ! expression if one is false then the otehr is falzw
    console.log("we do not have that flavor")
}



