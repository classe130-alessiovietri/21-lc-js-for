/* 
    Voglio stampare in console i numeri da 1 a 5
*/

/* Soluzione 1 */
console.log('Soluzione 1:');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log('---------------------');

/* Soluzione 2 */
console.log('Soluzione 2:');
let numOne = 1;
console.log(numOne);
numOne = numOne + 1;
console.log(numOne);
numOne = numOne + 1;
console.log(numOne);
numOne = numOne + 1;
console.log(numOne);
numOne = numOne + 1;
console.log(numOne);
numOne = numOne + 1;
console.log('---------------------');

/* Soluzione 3 */
console.log('Soluzione 3:');
let numTwo = 1;
console.log(numTwo);
numTwo += 1;
console.log(numTwo);
numTwo += 1;
console.log(numTwo);
numTwo += 1;
console.log(numTwo);
numTwo += 1;
console.log(numTwo);
numTwo += 1;
console.log('---------------------');

/* Soluzione 4 */
console.log('Soluzione 4:');
let numThree = 1;
console.log(numThree);
numThree++;
console.log(numThree);
numThree++;
console.log(numThree);
numThree++;
console.log(numThree);
numThree++;
console.log(numThree);
numThree++;
console.log('---------------------');

/* Soluzione 5 */
console.log('Soluzione 5:');

// for (let i = 0; i < 5; i++) {
//     console.log(numThree);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

console.log('---------------------');

console.log('---------------------------------------------------------------');

/* 
    Voglio stampare in console i numeri da 5 a 1
*/

/* Soluzione 1 */
console.log('Soluzione 1:');
let numFour = 5;
console.log(numFour);
numFour--;
console.log(numFour);
numFour--;
console.log(numFour);
numFour--;
console.log(numFour);
numFour--;
console.log(numFour);
numFour--;
console.log('---------------------');

/* Soluzione 2 */
console.log('Soluzione 2:');

// for (let i = 5; i > 0; i--) {
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log('---------------------');

console.log('---------------------------------------------------------------');

/* 
    Voglio stampare in console i numeri da 15 a 10
*/

/* Soluzione 1 */
console.log('Soluzione 1:');
let numFive = 15;
console.log(numFive);
numFive--;
console.log(numFive);
numFive--;
console.log(numFive);
numFive--;
console.log(numFive);
numFive--;
console.log(numFive);
numFive--;
console.log(numFive);
numFive--;
console.log('---------------------');

console.log('---------------------------------------------------------------');

/* 
    Voglio stampare in console i numeri da 1 a 10 e al 3 scrivi "Salvatore" in console
*/

// for (let i = 1; i == 10; i++) {     // Inizializza i a 1 e incrementa i finché i ha un valore PARI a 10 -> 0 esecuzioni
for (let i = 1; i <= 10; i++) {     // Inizializza i a 1 e incrementa i finché i ha un valore che sia minore o uguale a 10 -> 10 esecuzioni
    if (i == 3) {
        console.log('Salvatore');
    }
    else {
        console.log(i);
    }
}

console.log('---------------------');



/* Salta 10 volte */
for (let numeroSalti = 0; numeroSalti < 10; numeroSalti = numeroSalti + 1) {
    /* 
        Eseguo
        il
        codice
        per
        saltare
    */
}

/* Stampa in console i numeri da 20 a 60 ogni 2 */
for (let j = 20; j <= 60; j = j + 3) {
    console.log('j:', j);
}


/* 
    Tabelline
*/
/* 
    Tabellina del 9
*/
for (let j = 9; j <= 90; j += 9) {
    console.log(j);
}

for (let j = 1; j <= 10; j++) {
    console.log(j * 9);
}

/* 
    TUTTE LE TABELLINE
*/
let i;
for (i = 1; i <= 10; i++) {
    console.log('-----------');
    console.log('Tabellina del ' + i + ':');

    for (let j = 1; j <= 10; j++) {
        console.log(i * j);
    }

    console.log('-----------');
}

console.log('Ho eseguito: ' + (i - 1) + ' iterazioni');

/* 
    Stampa in pagina la lista della tabellina del 9
*/
const myUl = document.querySelector('ul');
// const myOl = document.querySelector('ol');
for (let i = 1; i <= 10; i++) {
    // myUl.innerHTML += '<li class="test-class" style="color: red;">' + (i * 9) + '</li>';
    /* OPPURE */
    const newLi = document.createElement('li');
    newLi.classList.add('test-class');
    newLi.style.color = 'red';
    newLi.addEventListener('click', function () {
        alert('Ciao');
    });
    // newLi.append(i * 9);
    newLi.innerHTML += i * 9;
    myUl.append(newLi);
    // myOl.append(newLi);
}


const x = 18;
const y = 6;
console.log(x + ' è multiplo di ' + y + '? -> DEVO VEDERE SE IL RESTO DELLA DIVISIONE FRA x E y è 0');

console.log(x % y);
if (x % y == 0) {
    console.log('Si, è multiplo')
}

// if (47 è multiplo di 7?) {
if (47 % 7 == 0) {
    console.log('Si, 47 è multiplo di 7');
}
else {
    console.log('No, 47 NON è multiplo di 7');
}

if (56 % 8 == 0) {
    console.log('Si, 56 è multiplo di 8');
}
else {
    console.log('No, 56 NON è multiplo di 8');
}