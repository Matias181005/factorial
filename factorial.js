function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
const resultado = factorial(numero);
alert("El factorial de " + numero + " es " + resultado);
