// function for finding input value and convert it to number(following the DRY method)

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const InputNumber = parseFloat(inputValue);
    return InputNumber;
}


// function for finding value from html text and convert it to number(following the DRY method)

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textToNumber = parseFloat(textValue);
    return textToNumber;
}