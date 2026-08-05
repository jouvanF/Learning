import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function tanya (pertanyaan){
    return new Promise ((resolve)=> rl.question(pertanyaan, resolve))
}
let secretNumber = Math.floor(Math.random() * 100) + 1;
let userAttempt = 0;
let running = true
async function main(){
    console.log("======================")
    console.log("PERMAINAN TEBAK ANGKA")
    console.log("======================")
    console.log("Saya sudah memilih angka 1-100.")
    while(running){
    const userNumber = parseInt (await(tanya ("Masukkan tebakan anda: ")))
    if (isNaN(userNumber)){
        console.log("Input harus berupa angka!")
        continue;
    } if (userNumber > 100 || userNumber < 1){
        console.log("Angka yang harus dimasukkan hanya 1-100!")
        continue;
    }userAttempt++; 
    if (userNumber < secretNumber){
        console.log("Terlalu kecil!")
    } else if (userNumber > secretNumber){
        console.log("Terlalu besar!")
    } else {
        console.log(`Selamat tebakan anda benar! Angkanya adalah ${secretNumber} dan anda berhasil pada percobaan ${userAttempt} kali!`)
            running = false
    }
}rl.close();
}
main();