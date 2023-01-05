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

window.onkeyup = keyup;

var shadowColorValue;

function keyup(e) {
    shadowColorValue = e.target.value;

    root.style.setProperty('--shadow-color', shadowColorValue);
};