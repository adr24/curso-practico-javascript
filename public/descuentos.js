// Discounts
const disscounts = {
    'AA': 10,
    'BB': 20,
    'CC': 50
}
const default_disscount = 0;

// HTML Variables
const $btn_calc_discount = document.getElementById('btn_calc_discount');
const $span_item_price = document.getElementById('span_item_price');
const $span_dsc_price = document.getElementById('span_dsc_price');
const $inp_dsc_code = document.getElementById('inp_dsc_code');
const $subtotal = document.getElementById('subtotal');
const $disscount = document.getElementById('disscount');
const $total = document.getElementById('total');

// On load

$subtotal.textContent = $span_item_price.textContent;
$total.textContent = $span_item_price.textContent;

// Events
$btn_calc_discount.addEventListener('click', () => {
    CalcDiscount();
})

// Functions
function CalcDiscount() {
    let item_price = ($span_item_price.textContent).replace('$', '');
    const dsc_value = disscounts[$inp_dsc_code.value] || default_disscount;
    const dsc = Discount(item_price, dsc_value);

    $disscount.textContent = `$${dsc[1]}`
    $total.textContent = `$${dsc[0]}`


}

function Discount(price, discount) {
    let dscValues = []
    let totalAmount = ((price * (100 - discount)) / 100);
    totalAmount = roundNumber(totalAmount, 2);

    let totalDisscount = (price - totalAmount);
    totalDisscount = roundNumber(totalDisscount, 2);

    dscValues.push(totalAmount);
    dscValues.push(totalDisscount);

    return dscValues;
}

function roundNumber(num, scale) {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        var arr = ("" + num).split("e");
        var sig = ""
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
}

