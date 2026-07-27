import { parse } from 'path';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function tanya(pertanyaan) {
    return new Promise((resolve) => rl.question(pertanyaan, resolve));
}

async function jalankanKalkulator(){
const input1 = await tanya('Masukkan angka pertama: ')
const angka1 = parseFloat(input1)

const operator = await tanya('1. + \n2. - \n3. * \n4. /\nPilih Operator yang ingin digunakan: ')

const input2 = await tanya('Masukkan angka kedua: ')
const angka2 = parseFloat(input2)

let hasil = 0

if (operator === '+'){
    hasil = angka1 + angka2;
} else if (operator === '-'){
    hasil = angka1 - angka2;
} else if (operator === '*'){
    hasil = angka1 * angka2;
} else if (operator === '/'){
    hasil = angka1 / angka2;
    if (angka2 === 0){
        console.log('Error. Angka ini tidak dapat dibagi dengan 0!')
    } rl.close();
    return;
} else {
    console.log('Error. Operator tidak dikenali!')
}
console.log(`Hasil dari ${angka1} ${operator} ${angka2} = ${hasil}`)
rl.close();
}
jalankanKalkulator();