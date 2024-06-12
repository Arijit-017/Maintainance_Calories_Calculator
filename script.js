document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const age = parseInt(document.querySelector("#age").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height`;
        return;
    } 
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight`;
        return;
    }
    if (isNaN(age) || age <= 0) {
        results.innerHTML = `Please give a valid age`;
        return;
    }

    const bmr = ((10 * weight) + (6.25 * height) - (5 * age) + 5).toFixed(2);
    results.innerHTML = `<span class="btn btn-success m-2">BMR: ${bmr}</span>`;

    calculateCalories(bmr);
});

function calculateCalories(bmr) {
    const activity = document.getElementById('activity');
    const selectedOption = activity.options[activity.selectedIndex];
    const selectedId = parseFloat(selectedOption.value);
    const ans = (bmr * selectedId).toFixed(2);
    const calories = document.querySelector("#calories");
    calories.innerHTML = `<span class="btn btn-success mb-4">Calories needed: ${ans}</span>`;
}

document.getElementById('activity').addEventListener('change', function() {
    const bmrText = document.querySelector("#results").textContent;
    if (bmrText) {
        const bmr = parseFloat(bmrText.replace('BMR: ', ''));
        calculateCalories(bmr);
    }
});