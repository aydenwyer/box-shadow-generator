// CHANGE SECTION FUNCTIONALITY

const shadowSelector = document.getElementById('shadow-selector');
const boxSelector = document.getElementById('box-selector');
const shadowContainer = document.querySelector('.shadow-container');
const boxContainer = document.querySelector('.box-container');

shadowSelector.addEventListener('click', () => {
    shadowContainer.classList.remove('hidden');
    boxContainer.classList.add('hidden');
    shadowSelector.classList.add('selected');
    boxSelector.classList.remove('selected');
})

boxSelector.addEventListener('click', () => {
    boxContainer.classList.remove('hidden');
    shadowContainer.classList.add('hidden');
    boxSelector.classList.add('selected');
    shadowSelector.classList.remove('selected');
})

// CHANGING CSS

const root = document.documentElement;

// X-OFFSET

const horizontalOffset = document.getElementById('x-offset');
const horizontalOffsetValue = document.getElementById('x-offset__value');

horizontalOffsetValue.value = horizontalOffset.value;
if(horizontalOffset.value === undefined) {
    horizontalOffsetValue.value = 0;
}
horizontalOffset.addEventListener('input', (e) => {
    horizontalOffsetValue.value = e.target.value;
    root.style.setProperty('--x-offset', e.target.value + 'px');
});

// Y-OFFSET

const verticalOffset = document.getElementById('y-offset');
const verticalOffsetValue = document.getElementById('y-offset__value');

verticalOffsetValue.value = verticalOffset.value;
if(verticalOffset.value === undefined) {
    verticalOffsetValue.value = 0;
}
verticalOffset.addEventListener('input', (e) => {
    verticalOffsetValue.value = e.target.value;
    root.style.setProperty('--y-offset', e.target.value + 'px');
})

// BLUR-RADIUS

const blurRadius = document.getElementById('blur-radius');
const blurRadiusValue = document.getElementById('blur-radius__value');

blurRadiusValue.textContent = blurRadius.value;
if(blurRadius.value === undefined) {
    blurRadiusValue.value = 50;
}
blurRadius.addEventListener('input', (e) => {
    blurRadiusValue.value = e.target.value;
    root.style.setProperty('--blur-radius', e.target.value + 'px');
})

// SPREAD-RADIUS

const spreadRadius = document.getElementById('spread-radius');
const spreadRadiusValue = document.getElementById('spread-radius__value');

spreadRadiusValue.value = spreadRadius.value;
if(spreadRadius.value === undefined) {
    spreadRadiusValue.value = 0;
}
spreadRadius.addEventListener('input', (e) => {
    spreadRadiusValue.value = e.target.value;
    root.style.setProperty('--spread-radius', e.target.value + 'px');
})

// SHADOW-COLOR

const shadowColorInput = document.getElementById('shadow-color');
var shadowColorValue;

shadowColorValue = shadowColorInput.value
shadowColorInput.addEventListener('keyup', (e) => {
    shadowColorValue = e.target.value;

    root.style.setProperty('--shadow-color', shadowColorValue);
})

// BOX-COLOR

const boxColorInput = document.getElementById('box-color');
var boxColorValue;

boxColorValue = boxColorInput.value
boxColorInput.addEventListener('keyup', (e) => {
    boxColorValue = e.target.value;

    root.style.setProperty('--box-color', boxColorValue);
});

// BG-COLOR

const bgColorInput = document.getElementById('background-color');
var bgColorValue;

bgColorValue = bgColorInput.value
bgColorInput.addEventListener('keyup', (e) => {
    bgColorValue = e.target.value;

    root.style.setProperty('--bg-color', bgColorValue);
});

// BORDER-COLOR 

const borderColorInput = document.getElementById('border-color');
var borderColorValue;

borderColorValue = borderColorInput.value
borderColorInput.addEventListener('keyup', (e) => {
    borderColorValue = e.target.value;

    root.style.setProperty('--border-color', borderColorValue);
});

// BORDER-THICKNESS

const borderThickness = document.getElementById('border-thickness');
const borderThicknessValue = document.getElementById('border-thickness__value');

borderThicknessValue.value = borderThickness.value;
if(borderThickness.value === undefined) {
    borderThicknessValue.value = 0;
}
borderThickness.addEventListener('input', (e) => {
    borderThicknessValue.value = e.target.value;
    root.style.setProperty('--border-thickness', e.target.value + 'px');
})

// BORDER-RADIUS

const borderRadius = document.getElementById('border-radius');
const borderRadiusValue = document.getElementById('border-radius__value');

borderRadiusValue.value = borderRadius.value;
if(borderRadius.value === undefined) {
    borderRadiusValue.value = 0;
}
borderRadius.addEventListener('input', (e) => {
    borderRadiusValue.value = e.target.value;
    root.style.setProperty('--radius', e.target.value + 'px');
})

// GENERATE CODE BUTTON

const generateCode = document.getElementById('generate-code');
const generatedCodeOutput = document.getElementById('generated-code-output');
const modal = document.querySelector('#modal');
var completedStyle;

generateCode.addEventListener('click', () => {
    completedStyle = 'box-shadow: ' + horizontalOffsetValue.value + 'px ' + verticalOffsetValue.value + 'px ' + blurRadiusValue.value + 'px ' + spreadRadiusValue.value + 'px ' + shadowColorValue + ';';

    generatedCodeOutput.setAttribute('value', completedStyle);

    modal.showModal();
});

const closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', () => {
    modal.close();
})

// COPY CODE

const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedCodeOutput.value);

    generatedCodeOutput.setAttribute('value', 'Code copied to clipboard!')
    setTimeout(() => {
        generatedCodeOutput.setAttribute('value', completedStyle)
    }, 2000);
});