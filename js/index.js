
//let a = 20;
//let b = 20;


/*if (b =="20") {
}
    console.log("banan");
if (a =="10") {
    console.log("apple");
}
*/

//om a är större än b skriv ut a
//om b är större än a skriv ut b

let a = 40;
let b = 30;


if (a > b) {
    console.log("apple");
}
else if (b > a) {
    console.log("pear");
}

if (a !== b) {
    console.log(40); //skriver ut 40 om a är samma som b
}


/*function add(numberOne, numberTwo) {
    console.log("numberOne är: ", numberOne);
    console.log("numberTwo är: ", numberTwo);
    let sum = numberOne + numberTwo;

    console.log("Summan blir " + sum);
} */

/*const number1 = prompt("Välj första nummer");
console.log("Första nummer: ", number1);
const number2 = prompt("Välj andra nummer");
console.log("Andra nummer: ", number2);

if (Number(number1) > Number(number2)) {
    console.log("Största siffran är: " + number1);
}
else if (Number(number2) > Number(number1)) {
    console.log("Största siffran är: " + number2);
} */
//add(6,11);
//add(25, 55);


//en ruta att skriva in en längd
const lenght = prompt("Skriv in längd i meter");
//en ruta att skriva in en vikt
const weight = prompt("Skriv in din vikt i kg");
//bmi är samma som vikten * längden i meter
const bmi = Number(weight) / (Number(lenght) * Number(lenght));
//om bmi är mindre än 18.5 skriv ut underviktig
if (bmi < 18.5) {
    console.log("Du är underviktig enligt BMI " + bmi);
}
if (bmi > 18.5 && bmi < 24.9) {
    console.log("Du är normalviktig enligt BMI " + bmi);
}
if (bmi > 25 && bmi < 29.9) {
    console.log("Du är överviktig enligt BMI " + bmi);
}
if (bmi > 30) {
    console.log("Du har fetma enligt BMI " + bmi);
}
//om vikten delat med längden i meter är mellan 18.5 och 24.9 då är du normalviktig
//om vikten delat med längden i meter är mellan 25 och 29.9 då är du överviktig
//om vikten delat med längden i meter är över 30 då är du överviktig