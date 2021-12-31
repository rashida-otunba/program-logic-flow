//conditionals can be nested inside each other 

let password='hello kitty';



if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {   //string contains a space to ensure the user has not entered a password with a space ; -1 means it is not indexed and thus no space 
        console.log('valid password!');
    }else{
        console.log('password is long enough but cannot contain spaces')
    }

} else {
    console.log('password must be longer ')
}

