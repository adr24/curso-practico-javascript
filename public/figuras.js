
function CalcularCuadrado(operacion, lado) {

    if (operacion == "area") {
        const area = lado * lado;
        return area
    } else {
        const perimetro = lado * 4;
        return perimetro;
    }

}

function CalcularTriangulo(operacion, lado1, lado2, lado3) {
    if (operacion == 'area') {
        const semiPerimetro = (lado1 + lado2 + lado1) / 2;
        const area = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))
        return area;

    } else {
        const perimetro = lado1 + lado2 + lado3;
        return perimetro;
    }
}

function CalcularCirculo(operacion, radio) {
    if (operacion = 'area') {
        const area = Math.PI * (radio ** 2);
        return area;
    } else {
        const perimetro = 2 * Math.PI * radio;
        return perimetro;
    }
}

// Cuadrado
console.group('Cuadrado');

let cuadrado = CalcularCuadrado('area', 5);
console.log('Area ' + cuadrado + " cm2");
let cuadrado2 = CalcularCuadrado('', 5);
console.log('Perimetro ' + cuadrado2 + " cm");

console.groupEnd()

// Triangulo
console.group('Triangulo');

let triangulo = CalcularTriangulo('area', 4, 10, 12,);
console.log('Area ' + triangulo.toFixed(2) + ' cm2');
let triangulo2 = CalcularTriangulo('', 5, 7, 9,);
console.log('Perimetro ' + triangulo2 + ' cm');
console.groupEnd()

// Circulo
console.group('Circulo');

let circulo = CalcularCirculo('area', 5);
console.log('Area ' + circulo.toFixed(2) + ' cm2');
let circulo2 = CalcularCirculo('', 7);
console.log('Perimetro ' + circulo2.toFixed(2) + ' cm');
console.groupEnd()

