const lirik = [
    "You know it's true",
    "Yeah i miss you..",
    "You know it's true",
    "So what if i call",
    "And you pick up the phone...",
    "And i use this holiday",
    "To make my way to your ghost",
    "Oh what if you're lonely"
];
process.stdout.write("\x1Bc");
process.stdout.write("\x1B[?25l");
    function delay(ms){
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        });
    }
    const checkpoint = {
        "You know it's": 1100, 
        "You know it's true": 3300,
        "Yeah i": 500,
        "Yeah i miss": 300,
        "Yeah i miss you..": 2900,
        "You know it's": 400,
        "You know it's true": 2500,
        "So what if i call": 3300,
        "And you pick up the phone...": 2900,
        "And i use this ho": 600,
        "And i use this holiday": 700,
        "To make": 300,
        "To make my": 500,
        "To make my way": 400,
        "To make my way to your ghost": 3100,
        "Oh what if you're": 300,
        "Oh what if you're lonely": 4000

    };
    async function main() {
for (let baris of lirik){
    let hasil = "";
    for (let huruf of baris){
        hasil += huruf;
        process.stdout.write("\r" + hasil);
        await delay(60)
        if (checkpoint[hasil]){
            await delay(checkpoint[hasil]);
        }
    }
    process.stdout.write("\n")
}
process.stdout.write("\x1B[?25h");
}
main();
