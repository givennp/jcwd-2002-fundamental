// conditions

const benar = true
const salah = false

const password = "password"

//booleans
// true dan false -> false
// false dan false -> true
// true atau false -> true
//false atau false -> false

//dan &&
//atau ||

//jika password lebih dari 8 char -> strong password
//jika password sama dengan 8 char -> medium password
//jika password kurang dari 8 char -> weak password

if (password.length > 8) {
    console.log("strong password")
} else if (6 < password.length && password.length <= 8) {
    console.log("medium password")
} else {
    console.log("weak password");
}