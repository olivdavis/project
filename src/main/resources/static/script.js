function validateNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, '');

    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16); 
    }

   
}
function validateCode(input) {
    input.value = input.value.replace(/[^0-9]/g, '');

    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4); 
    }


}
