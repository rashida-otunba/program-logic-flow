//Not (!) has a higher precedence than && and 
//and && has a higher precendence than ||
// ! && ||
//this precedence can be altered using parenthesis ()


let x = 7 ; 
x==7 || x===3 && x>10;
// true    (false     false )

//false or true; you need only one side to be true 

//although there are two false values, the answer is actually true because the AND && operator takes precedence over OR ||

let x = 7 ; 
(x==7 || x===3) && x>10;
// true                false 
//this makes it false because the parentheses take precedent over the AND && 