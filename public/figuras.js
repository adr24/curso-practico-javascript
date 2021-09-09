


// Square//
const $input_square_side = document.getElementById('inp_square_side');
const $btn_square_perimeter = document.getElementById('btn_square_perimeter');
const $btn_square_area = document.getElementById('btn_square_area');
const $span_square = document.getElementById('spn_square');

// Clean input square side

$input_square_side.addEventListener('click', () => {
    $input_square_side.value = ""
});

// Perimeter
$btn_square_perimeter.addEventListener("click", () => {
    const perimeter = CalcularCuadrado('', $input_square_side.value);
    $span_square.textContent = `Perimeter = ${perimeter} u`
});

// Area

$btn_square_area.addEventListener('click', () => {
    const area = CalcularCuadrado("area", $input_square_side.value);
    $span_square.textContent = `Area = ${area} u^2`
})



// Triangle

const $inp_triangle_side1 = document.getElementById('inp_triangle_side1');
const $inp_triangle_side2 = document.getElementById('inp_triangle_side2');
const $inp_triangle_side3 = document.getElementById('inp_triangle_side3');
const $btn_triangle_perimeter = document.getElementById('btn_triangle_perimeter');
const $btn_triangle_area = document.getElementById('btn_triangle_area');
const $span_triangle = document.getElementById('spn_triangle');

// Clean input triangle side
const triangle_inputs = [$inp_triangle_side1, $inp_triangle_side2, $inp_triangle_side3];

for (const input of triangle_inputs) {
    input.addEventListener('click', () => input.value = '')
}


// Perimeter
$btn_triangle_perimeter.addEventListener("click", () => {
    const perimeter = CalcularTriangulo('', $inp_triangle_side1.value, $inp_triangle_side2.value, $inp_triangle_side3.value);
    $span_triangle.textContent = `Perimeter = ${perimeter} u`
});

// Area

$btn_triangle_area.addEventListener('click', () => {
    const area = CalcularTriangulo("area", $inp_triangle_side1.value, $inp_triangle_side2.value, $inp_triangle_side3.value);
    $span_triangle.textContent = `Area = ${area.toFixed(2)} u^2`
})

// Circle

const $inp_circle_radio = document.getElementById('inp_circle_radio');
const $btn_circle_perimeter = document.getElementById("btn_circle_perimeter");
const $btn_circle_area = document.getElementById("btn_circle_area");
const $span_circle = document.getElementById('span_circle');

// Clear Input

$inp_circle_radio.addEventListener('click', () => {
    $inp_circle_radio.value = "";
})

// Perimeter
$btn_circle_perimeter.addEventListener('click', () => {
    const perimeter = CalcularCirculo("", $inp_circle_radio.value);
    $span_circle.textContent = `Perimeter = ${perimeter.toFixed(2)} u`
})

// Area
$btn_circle_area.addEventListener('click', () => {
    const area = CalcularCirculo("area", $inp_circle_radio.value);
    $span_circle.textContent = `Area = ${area.toFixed(2)} u^2`
})




// Functions
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





// // Cuadrado
// console.group('Cuadrado');

// let cuadrado = CalcularCuadrado('area', 5);
// console.log('Area ' + cuadrado + " cm2");
// let cuadrado2 = CalcularCuadrado('', 5);
// console.log('Perimetro ' + cuadrado2 + " cm");

// console.groupEnd()

// // Triangulo
// console.group('Triangulo');

// let triangulo = CalcularTriangulo('area', 4, 10, 12,);
// console.log('Area ' + triangulo.toFixed(2) + ' cm2');
// let triangulo2 = CalcularTriangulo('', 5, 7, 9,);
// console.log('Perimetro ' + triangulo2 + ' cm');
// console.groupEnd()

// // Circulo
// console.group('Circulo');

// let circulo = CalcularCirculo('area', 5);
// console.log('Area ' + circulo.toFixed(2) + ' cm2');
// let circulo2 = CalcularCirculo('', 7);
// console.log('Perimetro ' + circulo2.toFixed(2) + ' cm');
// console.groupEnd()

