const accountId = 1445533
let accountEmail = "prahladmandal324@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "Rekha324@gmail.com"
accountPassword = "PainKiller"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);
/*
Prefer not use to var
Because of issue in block scope and functional scop
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
