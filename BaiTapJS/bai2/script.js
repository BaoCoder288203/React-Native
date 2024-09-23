document.addEventListener('DOMContentLoaded', () => {
    const mass1 = document.querySelector('.mass1');
    const height1 = document.querySelector('.height1');
    const mass2 = document.querySelector('.mass2');
    const height2 = document.querySelector('.height2');
    const result = document.querySelector('#result');
    const btnChange = document.querySelector('.btn')

    function CalculaterBMI(mass, height) {
        mass = parseFloat(mass.value); // Convert the input values to numbers
        height = parseFloat(height.value);
        return mass / (height * height);
    }

    function markHigherBMI(BMI_Mark, BMI_John) {
        return BMI_Mark > BMI_John ? true : false;
    }

    btnChange.addEventListener('click', () => {

        BMI_1 = CalculaterBMI(mass1, height1)
        BMI_2 = CalculaterBMI(mass2, height2)

        const boolean = markHigherBMI(BMI_1, BMI_2);
        result.innerHTML = boolean ? 'Mark has a higher BMI than John' : 'John has a higher BMI than Mark';
    })
})