let numb1Input = document.getElementById("numb1");
let numb2Input = document.getElementById("numb2");


numb1Input.addEventListener("input", calculateSum);
numb2Input.addEventListener("input", calculateSum);

function calculateSum() {
    let numb1 = parseFloat(numb1Input.value) || 0;
    let numb2 = parseFloat(numb2Input.value) || 0;

    let sum = numb1 + numb2;

    document.getElementById("sumResult").innerHTML = "Sum: " + sum;
}
