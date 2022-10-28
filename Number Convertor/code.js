const inputDecimal = document.querySelector('.input-decimal'),
      inputBinary = document.querySelector('.input-binary'),
      inputQuaternary = document.querySelector('.input-quaternary'),
      inputOctal = document.querySelector('.input-octal'),
      inputHexadecimal = document.querySelector('.input-hexadecimal');

//Create function to convert input values to different number system
function convert (input, sys, i1, i2, i3, i4, n1, n2, n3, n4) {
    if (input.value.length < 1) {
        return 0;
    }
    const num = parseInt(input.value, sys);
    i1.value = num.toString(n1);
    i2.value = num.toString(n2);
    i3.value = num.toString(n3);
    i4.value = num.toString(n4);
}

//Function to prevent the input of values from the specified array
function limiter (input, array) {
    const arr = array;
    if (arr.some(el => input.value.includes(el))) {
        input.value = input.value.slice(0, -1);
    }
}

inputDecimal.addEventListener('input', () => {
    convert(inputDecimal, 10, inputBinary, inputQuaternary, inputOctal, inputHexadecimal, 2, 4, 8, 16);
});

inputBinary.addEventListener('input', () => {
    limiter(inputBinary, [2,3,4,5,6,7,8,9])
    convert(inputBinary, 2, inputDecimal, inputQuaternary, inputOctal, inputHexadecimal, 10, 4, 8, 16);
});

inputQuaternary.addEventListener('input', () => {
    limiter(inputQuaternary, [4,5,6,7,8,9])
    convert(inputQuaternary, 4, inputDecimal, inputBinary, inputOctal, inputHexadecimal, 10, 2, 8, 16);
});

inputOctal.addEventListener('input', () => {
    limiter(inputOctal, [8,9])
    convert(inputOctal, 8, inputDecimal, inputBinary, inputQuaternary, inputHexadecimal, 10, 2, 4, 16);
});

inputHexadecimal.addEventListener('input', () => {
    limiter(inputHexadecimal, ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~', '<', '{', ':', '>', '"', '}', '_', ')', '(', '*', '^']);
    convert(inputHexadecimal, 16, inputDecimal, inputBinary, inputQuaternary, inputOctal, 10, 2, 4, 8);
});