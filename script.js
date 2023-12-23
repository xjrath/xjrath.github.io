const rotatingImage = document.getElementById('rotatingImage');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');

let rotationSpeed = 5; // Default rotation speed

rotatingImage.style.animation = `rotate ${10 / rotationSpeed}s linear infinite`; // Set initial animation

const randomTexts = document.querySelectorAll('.random-text');

function updateRandomTextRotationSpeed() {
    randomTexts.forEach((text, index) => {
        const textRotationSpeed = rotationSpeed * (index + 1); // Adjust the multiplier as needed
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
