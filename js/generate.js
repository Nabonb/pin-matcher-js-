document.getElementById('btn-generate').addEventListener('click', function generate() {
    const inputFieldGenerate = document.getElementById('input-generate');
    const randomNumber = Math.round((Math.random() * 10000));
    const randomNumberString = randomNumber + '';
    if (randomNumberString.length == 4) {
        inputFieldGenerate.value = randomNumberString;

    }
    else {

        generate();
    }

});

document.getElementById('full-calc-body').addEventListener('click', function (event) {
    const pressedButton = event.target.innerText;
    const inputPressedField = document.getElementById('inp-pressed');
    const inputPressedFieldString = inputPressedField.value;
    


    if (isNaN(pressedButton) == true) {
        if (pressedButton == "C") {
            inputPressedField.value = '';
        }
        else if (pressedButton == "<") {
            const afterSplit = inputPressedFieldString.split('');
            afterSplit.pop();
            const nowJoin = afterSplit.join('');
            inputPressedField.value = nowJoin;
        }
    }
    else {
        const mainInputPressedField = inputPressedFieldString + pressedButton;
        inputPressedField.value = mainInputPressedField;

        
    }
});

document.getElementById('btn-submit').addEventListener('click',function(){
    const inputFieldGenerate = document.getElementById('input-generate');
    const inputFieldGenerateString = inputFieldGenerate.value;

    const inputPressedField = document.getElementById('inp-pressed');
    const inputPressedFieldString = inputPressedField.value;

    const successText = document.getElementById('success');
    const failedText = document.getElementById('failed');

    if(inputFieldGenerateString === inputPressedFieldString){
    
        successText.style.display ='block';
        failedText.style.display ='none';

    }
    else{
        failedText.style.display ='block';
        successText.style.display ='none';
        
    }
    // console.log(inputFieldGenerateString);
});