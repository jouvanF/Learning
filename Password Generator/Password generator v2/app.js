import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function tanya(pertanyaan) {
    return new Promise((resolve) => rl.question(pertanyaan, resolve));
}
async function jalankanPasswordGenerator() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=~!@#$%^&*()_+`;'[]{}<>?,./";
    const passwordLength = parseInt (await tanya("Berapa jumlah Password? "))
    if (passwordLength < 4){
        console.log("Password minimal 4 karakter!")
        rl.close();
        return;
    }
    let password = "";
    for (
        let i = 0;
        i < passwordLength; 
        i++
    ){
        const randomIndex = Math.floor(Math.random()* chars.length);
        const randomChar = chars[randomIndex];
        password += randomChar;
        process.stdout.write(password)
    }
 rl.close();
}
jalankanPasswordGenerator();