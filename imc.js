
const calculate = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').valeu;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {
        
        const valueIMC = (weight / (height * height));

        result.textContent = valueIMC;

    }
    else {
        result.textContent = 'fill all!!!';
    }
}

calculate.addEventListener('click', imc); 