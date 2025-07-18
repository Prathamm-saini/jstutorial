const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form refresh

  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100; // cm to meters

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  const bmi = weight / (height * height);
  const result = document.getElementById('results');
  result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

  if (bmi < 18.6) {
    result.textContent += " (Underweight)";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    result.textContent += " (Normal weight)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.textContent += " (Overweight)";
  } else {
    result.textContent += " (Obesity)";
  }

  result.style.display = 'block';
});
