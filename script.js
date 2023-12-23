const rotatingImage = document.getElementById('rotatingImage');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');

let rotationSpeed = 5; 

rotatingImage.style.animation = `rotate ${10 / rotationSpeed}s linear infinite`; 

const randomTexts = document.querySelectorAll('.random-text');

function updateRandomTextRotationSpeed() {
    randomTexts.forEach((text, index) => {
        const textRotationSpeed = rotationSpeed * (index + 1); 
        text.style.animation = `rotate ${10 / textRotationSpeed}s linear infinite`;
    });
}

speedSlider.addEventListener('input', function () {
    rotationSpeed = parseInt(this.value);
    speedValue.textContent = rotationSpeed;

    rotatingImage.style.animation = `rotate ${10 / rotationSpeed}s linear infinite`;

    updateRandomTextRotationSpeed();
});

updateRandomTextRotationSpeed();
