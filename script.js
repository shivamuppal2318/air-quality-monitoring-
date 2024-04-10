document.addEventListener('DOMContentLoaded', function() {
  const refreshBtn = document.getElementById('refresh-btn');
  const humidityValue = document.getElementById('humidity-value');
  const aqiValue = document.getElementById('aqi-value');
  const moistureValue = document.getElementById('moisture-value');

  // Function to fetch sensor data (replace with your API endpoint)
  function fetchSensorData() {
    // Simulating fetching data from an API
    // Replace this with your actual API call to fetch sensor data
    const fakeHumidity = Math.floor(Math.random() * 100); // Generates random humidity value for demonstration
    const fakeAQI = Math.floor(Math.random() * 500); // Generates random AQI value for demonstration
    const fakeMoisture = Math.floor(Math.random() * 100); // Generates random moisture value for demonstration
    return Promise.resolve({ humidity: fakeHumidity, aqi: fakeAQI, moisture: fakeMoisture });
  }

  // Function to update sensor values on the webpage
  function updateSensorValues() {
    fetchSensorData().then(data => {
      humidityValue.textContent = data.humidity;
      aqiValue.textContent = data.aqi;
      moistureValue.textContent = data.moisture;
    }).catch(error => {
      console.error('Error fetching sensor data:', error);
      humidityValue.textContent = 'N/A'; // Display N/A if there's an error
      aqiValue.textContent = 'N/A'; // Display N/A if there's an error
      moistureValue.textContent = 'N/A'; // Display N/A if there's an error
    });
  }

  // Initial update of sensor values when the page loads
  updateSensorValues();

  // Event listener for the refresh button
  refreshBtn.addEventListener('click', updateSensorValues);
});
