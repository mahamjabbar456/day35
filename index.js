// Question 103
function ReturnBoolean() {
    let num = Math.random();
    if (num > 0.5) {
        return true;
    }
    return false;
}
console.log(ReturnBoolean());
// Question 104
function HexaDecimalNumber() {
    // let num:any = 0123456789ABCDEF;
    const color = `# ` + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return color;
}
console.log(HexaDecimalNumber());
// Question 105
function DiceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(DiceRoll());
export {};
