const inputName = document.querySelector('input');
const logName = document.getElementById('res-name');

inputName.addEventListener('input', updateInputValue);

function updateInputValue(e) {
  logName.textContent = e.target.value;
};

const selectGender = document. getElementById('gender');
const logGender = document.getElementById('res-gender');

selectGender.addEventListener('change', updateGenderValue);

function updateGenderValue(e) {
  logGender.textContent = e.target.value;
};



let screenYLog = document.getElementById('mouse-y');
let screenXLog = document.getElementById('mouse-x');

document.addEventListener('mousemove', logXKey);
function logXKey(e) {
  screenXLog.innerText = 
    e.screenX;
};
function logYKey(e) {
  screenYLog.innerText = 
    e.screenY;
};
document.addEventListener('mousemove', logYKey);