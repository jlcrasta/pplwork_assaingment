
/*
To solve this problem, first every dot in the email should be removed for storing 
email in database as this doen't affect while sending email, because gmail treats similar 
email with dots and without dots as same

when new user registers then the email should be checked with DB after removing dots

*/

let email = 'sa.lma.nk.ha.n@gmail.com';

let newEmail = [];
let emailDomain = email.slice(email.indexOf('@'), email.length)//here string of email domain is stored

for (let i = 0; i < email.indexOf('@'); i++) {//this loop is executed to remove dots
    if (email[i] !== '.') {
        newEmail.push(email[i])
    }

}

console.log(newEmail.join('').concat(emailDomain))//here email array is converted and then concatenated.