
const calculate = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const resulted = document.getElementById('resulted');

    if (name !== '' && height !== '' && weight !== '') {
        
        const valueIMC = (weight / (height * height)).toFixed(1);

        let classification = "";

        if (valueIMC < 18.5){
            classification = " underweight 'skinny'."
        }else
        if (valueIMC < 25){
            classification = " good weight 'normal'."
        }else
        if (valueIMC < 30){
            classification = " slightly overweight 'kinda fat'"
        }else
        if (valueIMC < 35){
            classification = " grade I obesity 'fat'"
        }else
        if (valueIMC < 40){
            classification = " grade II obesity 'really fat'"
        }else {
            classification = " grade III obesity. Be Cautious!!"
        }
        

        resulted.textContent = `${name} your IMC is ${valueIMC} and you are ${classification}`;

    }
    else {
        resulted.textContent = 'fill all!!!';
    }
}

calculate.addEventListener('click', imc); 