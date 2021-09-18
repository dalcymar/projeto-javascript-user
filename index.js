/*let a = 10;
const b = "10";

console.log(a == b && typeof a == 'string');
*/

/*let n = 5;

for (let i = 0; i < 10; i++) {
    console.log(`${i} x ${n} = ${i*n}`);
}*/

let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(1, 2, "*");

console.log(resultado);