const inputValue = document.querySelector('#inputValue');
const outputTitle1 = document.querySelector('.output-title-1');
const outputTitle2 = document.querySelector('.output-title-2');
const outputTitle3 = document.querySelector('.output-title-3');
const output1 = document.querySelector('.output-1');
const output2 = document.querySelector('.output-2');
const output3 = document.querySelector('.output-3');

check = () => {
    const radioValue = document.querySelectorAll('.radio-button')
    
    for(let i = 0; i < radioValue.length; i++){

        if (radioValue[i].checked) {
            if (radioValue[i].value === 'pound') {
                pound();                
            } else if(radioValue[i].value === 'kg'){
                kilogram();
            } else if(radioValue[i].value === 'ounces'){
                ounces();
            }
        }
    }
}
resetValues = () => {
    inputValue.value = "";
    output1.innerHTML = "";
    output2.innerHTML = "";
    output3.innerHTML = "";
}
function pound(){
    resetValues();
    inputValue.placeholder = 'Enter Pounds';
    outputTitle1.innerHTML = 'Grams:';
    outputTitle2.innerHTML = 'Kilograms:';
    outputTitle3.innerHTML = 'Ounces:';
    inputValue.addEventListener('input', function (e){
        const lbs = e.target.value;
        output1.innerHTML = (lbs/0022046).toFixed(2)+"g";
        output2.innerHTML = (lbs/2.2046).toFixed(2)+"kg";
        output3.innerHTML = (lbs*16).toFixed(2)+"oz";
        console.log(e.target);

    });


}
function kilogram(){
    resetValues();
    inputValue.placeholder = 'Enter Kilograms';
    outputTitle1.innerHTML = 'Grams:';
    outputTitle2.innerHTML = 'Pounds:';
    outputTitle3.innerHTML = 'Ounces:';
    inputValue.addEventListener('input', function (e){
        const lbs = e.target.value;
        output1.innerHTML = (lbs*1000).toFixed(2)+"g";
        output2.innerHTML = (lbs*2.20462).toFixed(2)+"p";
        output3.innerHTML = (lbs*35.274).toFixed(2)+"lbs";

    });


}
function ounces(){
    resetValues();
    inputValue.placeholder = 'Enter Ounces';
    outputTitle1.innerHTML = 'Grams:';
    outputTitle2.innerHTML = 'Kilograms:';
    outputTitle3.innerHTML = 'Pound:';
    inputValue.addEventListener('input', function (e){
        const lbs = e.target.value;
        output1.innerHTML = (lbs*1000).toFixed(2)+"g";
        output2.innerHTML = (lbs*2.20462).toFixed(2)+"kg";
        output3.innerHTML = (lbs*35.274).toFixed(2)+"lbs";

    });


}