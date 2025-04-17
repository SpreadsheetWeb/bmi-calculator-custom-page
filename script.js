document.addEventListener("DOMContentLoaded", () => {
  // Element references
  const heightSlider = document.getElementById("height");
  const weightSlider = document.getElementById("weight");
  const heightValue = document.getElementById("heightValue");
  const weightValue = document.getElementById("weightValue");
  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");

  // === Configuration ===
  const API_URL = "https://YOUR-SERVER-DOMAIN/api/calculations/calculatesinglesimple";
  const WORKSPACE_ID = "YOUR_WORKSPACEID";
  const APPLICATION_ID = "YOUR-APPLICATIONID";

  /**
   * Updates the background size of a slider to create a fill effect.
   * @param {HTMLInputElement} slider 
   */
  function setSliderBackground(slider) {
    const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundSize = percent + '% 100%';
  }

  /**
   * Debounces a function to delay its execution.
   * Useful for limiting API requests when sliders are dragged.
   * @param {Function} func 
   * @param {number} delay 
   * @returns {Function}
   */
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Debounced update function attached to input events
  const debouncedUpdateUI = debounce(updateUI, 300);
  heightSlider.addEventListener("input", debouncedUpdateUI);
  weightSlider.addEventListener("input", debouncedUpdateUI);

  /**
   * Updates slider values on the UI and calls the API to fetch the BMI result.
   */
  function updateUI() {
    const height = Number(heightSlider.value);
    const weight = Number(weightSlider.value);
    heightValue.textContent = height;
    weightValue.textContent = weight;
    setSliderBackground(heightSlider);
    setSliderBackground(weightSlider);
    fetchBMI(height, weight);
  }

  /**
   * Sends height and weight data to the SpreadsheetWeb API and updates the result.
   * @param {number} height 
   * @param {number} weight 
   */
  function fetchBMI(height, weight) {
    const body = {
      request: {
        workspaceId: WORKSPACE_ID,
        applicationId: APPLICATION_ID,
        inputs: {
          Height: height.toString(),
          Weight: weight.toString()
        },
        outputs: ["BMI", "BMIDescription"]
      }
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => {
      const bmi = parseFloat(result.response?.outputs?.BMI || "0").toFixed(2);
      const desc = result.response?.outputs?.BMIDescription || "No description";
      bmiCategory.textContent = desc;
      bmiValue.textContent = bmi;
    })
    .catch(() => {
      bmiValue.textContent = "--";
      bmiCategory.textContent = "API Error";
    });
  }

  // Initial UI setup
  updateUI();
});
