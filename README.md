
Project Description:
The Air Quality Monitoring System is a portable device designed to measure various air quality parameters, including particulate matter, volatile organic compounds (VOCs), and carbon dioxide levels. The system aims to provide real-time data on indoor or outdoor air quality, which can be crucial for individuals, especially the elderly and those with respiratory conditions. The device will offer valuable insights into the air quality and help users make informed decisions about their environment.

Features:
1. Real-Time Data Display: The system will display real-time air quality data, allowing users to track the air quality continuously.
2. Portability: The device will be compact and portable, enabling users to carry it easily to different locations.
3. Integration with Smartphones: The system will have the capability to connect with smartphones, enabling users to access air quality data remotely.
4. Home Automation Integration: The device can integrate with home automation systems to automate actions based on air quality levels.
5. AQI Calculation: The system will calculate the Air Quality Index (AQI) to provide an overall assessment of air quality.
6. Cloud Connectivity: The data collected by the system can be stored and accessed through cloud connectivity, ensuring data availability and security.

Components Required:
ESP8266 NodeMCU: The ESP8266 NodeMCU is a popular development board based on the ESP8266 microcontroller. It features built-in Wi-Fi capabilities, making it suitable for IoT projects. The NodeMCU board provides GPIO pins for connecting external sensors and modules.

![esp](https://github.com/shivamuppal2318/air-quality-monitoring-/assets/156002273/c657d01a-79ca-4491-b035-5029ae20b72c)


MQ135 Air Quality Sensor: The MQ135 is a gas sensor that is sensitive to a wide range of harmful gases, including ammonia, nitrogen oxides, benzene, and carbon monoxide. It operates on the principle of conductivity changes in the presence of these gases. The output of the MQ135 sensor can be analog or digital, depending on the specific module used.

![gassensor](https://github.com/shivamuppal2318/air-quality-monitoring-/assets/156002273/02783e06-abfa-4ec5-90a6-09adc19b0517)



DHT11 Temperature and Humidity Sensor: The DHT11 is a low-cost sensor that provides temperature and humidity measurements. It consists of a capacitive humidity sensor and a thermistor for temperature measurement. The DHT11 sensor provides digital output, making it easy to interface with microcontrollers like the NodeMCU.

![dht](https://github.com/shivamuppal2318/air-quality-monitoring-/assets/156002273/d11046a8-efdb-42dc-83df-c742e937696d)

Here's how these components are typically connected in the hardware setup:

Power Supply: The NodeMCU board and sensors require a stable power supply. This can be provided through a USB connection to a computer or a USB power adapter.

Wiring Connections:

The MQ135 sensor typically has three pins: VCC (power), GND (ground), and OUT (analog or digital output). Connect the VCC pin to a 5V power source, the GND pin to the ground, and the OUT pin to one of the analog or digital pins on the NodeMCU board.
The DHT11 sensor also has three pins: VCC, GND, and DATA. Connect the VCC pin to a 3.3V power source (NodeMCU's 3.3V pin), the GND pin to the ground, and the DATA pin to another digital pin on the NodeMCU board.
Ensure that the power supply can adequately power both sensors and the NodeMCU board simultaneously.

Benefits:
1. Health Monitoring: The system will help individuals monitor air quality and take necessary precautions for their health.
2. Environmental Awareness: Users can gain insights into the surrounding air quality, contributing to overall environmental awareness.
3. Smart Decision Making: Real-time data will enable users to make informed decisions about indoor and outdoor activities based on air quality conditions.
4. User-Friendly: The system will be designed for easy use and accessibility, catering to individuals of all age groups.
n the project we have used models like RNN(LSTM) for predicting AQI content. RNN stands for
Recurrent Neural Network, and LSTM stands for Long Short-Term Memory. These are types of neural
networks that are great for processing sequential data, like time series data.
Now, let's talk about the other models you mentioned, KNN classifier and SVM. KNN stands for k-
Nearest Neighbors, and it's a simple yet effective algorithm for classification. It works by finding the k
nearest neighbors to a given data point and assigns it to the majority class among those neighbors.
SVM, which stands for Support Vector Machine, is another powerful algorithm used for classification
and regression tasks. It works by finding the best possible hyperplane that separates different classes
in the data. It's great for handling non-linear data and can handle higher-dimensional feature spaces.
