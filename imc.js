
const calculate = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').valeu;
    const resulted = document.getElementById('resulted');

    if (name !== '' && height !== '' && weight !== '') {
        
        const valueIMC = (weight / (height * height)).toFixed(1);

        let classification = "";

        if (valueIMC < 18.5){
            classification = "you're underweight"
        }

        resulted.textContent = `${name} your IMC is ${valueIMC} and you are ${classification}`;

    }
    else {
        resulted.textContent = 'fill all!!!';
    }
}

calculate.addEventListener('click', imc); 