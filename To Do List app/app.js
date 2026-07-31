import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const todos = [];
function tanya(pertanyaan){
    return new Promise ((resolve) => rl.question(pertanyaan, resolve))
}
let running = true;
function lihatTodo(){
    if (todos.length === 0){
        console.log("Tidak ada todo")
    } else {
        for(let i = 0; i < todos.length; i++){
            console.log(`${i + 1}. ${todos[i]}`)
        }
    }
} async function tambahTodo(){
    const newTodo = await tanya("Masukkan To Do: ")
    todos.push(newTodo)
    console.log(`${newTodo} berhasil ditambahkan`)
    }
async function main(){
    while (running){
        console.log("=== TO DO LIST ===\n 1. Lihat To do\n 2. Tambah To Do\n 3. Keluar\n")
        const pilihan = await tanya("Pilih menu: ")
        if (pilihan === "1"){
            lihatTodo()
        }   else if (pilihan === "2"){
                await tambahTodo()
            }
            else if (pilihan === "3"){ 
                running = false;  
                console.log("Sampai Jumpa!")  
        } else {
            console.log("Pilihan tidak valid")
        }
    }
rl.close();}
main();