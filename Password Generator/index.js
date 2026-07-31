const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=,./~!@#$%^&*()_+<>?:";
const passwordLength = 12;
let password = "";
for (
    let i = 0;
    i < passwordLength;
    i++
){
    const randomIndex = Math.floor(Math.random()* chars.length) 
    const randomChar = chars[randomIndex];
    password += randomChar;
}
console.log (password)