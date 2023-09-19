const accountId = 12345
let accountEmail = "pradip@google.com"
var accountPassword = "12345"
let accountState;

accountCity = "Palanpur"

// change the value   

// accountId = 2 // Not allowed
accountEmail = "Pradip@gmail.com"
accountPassword = "54321"
accountCity = "Dhota"

console.log(accountId)
console.table([accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var 
beacause of isssue in block scope and functional scope
*/