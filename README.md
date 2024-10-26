# Real-Time Data Processing System for Weather Monitoring - Frontend Setup

## Overview
This is the frontend application for the Real-Time Data Processing System for Weather Monitoring, built using **React.js** and styled with **Tailwind CSS**. The application provides a user interface to view current weather, 10-day forecasts, and monthly summaries for different locations. Additionally, the system includes **histographical charts** to visualize data aggregations, helping users track trends and patterns over time, such as daily, weekly, and monthly weather data.

## Features
1. System Setup
 API Connection: The application initiates a connection to the OpenWeatherMap API using a valid API key, ensuring secure and authorized access to real-time weather data.
2. Data Retrieval
 Configurable API Calls: Weather data is retrieved at configurable intervals of 5 mins, allowing users to frequently access updates with new data.
Location-Based Weather Retrieval: The system retrieves and correctly parses weather data for specified locations, ensuring accurate local weather reporting.
3. Temperature Conversion
Kelvin to Celsius/Fahrenheit: Temperature values are converted from Kelvin to either Celsius or Fahrenheit based on user preference, providing a flexible and user-friendly display.
4. Daily Weather Summary
Daily Aggregates: The system calculates and displays daily weather summaries, including average, maximum, minimum temperatures, and the dominant weather condition.
Multi-Day Simulation: Supports a sequence of weather updates over multiple days, ensuring that daily summaries and aggregates remain accurate over time.
5. Alerting Thresholds
Configurable Thresholds: currently implemented thresholds for rapid increase ir decrease in temperature.
Threshold-Based Alerts: The system monitors weather data for threshold violations and triggers alerts only when a threshold is breached,using a toaster.
6. Additional Weather Parameters: The system supports humidity, wind speed, and other weather metrics, which are included in daily roll-ups and aggregates to provide a comprehensive view of weather conditions.
Weather Forecast and Summaries: Extends functionality to retrieve and display weather forecasts, generating summaries based on predicted weather conditions for proactive weather planning.

## Repository
- GitHub Repository of Backend WeatherApp : [WeatherApp-Backend](https://github.com/nandkishorr/WeatherApp-Backend.git)

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository
To begin, clone the repository to your local machine and navigate to the frontend directory:
```bash
git clone <repository_url>
cd WeatherApp-frontend

# With npm
npm install

# With yarn
yarn install

# .env
VITE_API_KEY='<your_oper_weather_Api_key>'
VITE_API_URL=http://localhost:3000
```
## Project Structure
```
/WeatherApp-frontend
├── /public                   # Static files
│   ├── index.html            # HTML template
│   └── ...
├── /src                      # Source files
│   ├── /components           # Reusable UI components
│   ├── /pages                # Main application pages
│   ├── App.js                # Main App component
│   └── index.js              # Entry point
├── package.json              # Project dependencies and scripts
└── .env                      # Environment variables
```
## Tools Used
- **React.js**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

