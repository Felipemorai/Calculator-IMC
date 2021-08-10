
const calculate = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').valeu;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {
        alert ('value filled!')
    }
    else {
        alert ('fill all!!!')
    }
}

calculate.addEventListener('click', imc); 