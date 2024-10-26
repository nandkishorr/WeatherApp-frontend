# Real-Time Data Processing System for Weather Monitoring - Frontend Setup

## Overview
This is the frontend application for the Real-Time Data Processing System for Weather Monitoring, built using **React.js** and styled with **Tailwind CSS**. The application provides a user interface to view current weather, 10-day forecasts, and monthly summaries for different locations. Additionally, the system includes **histographical charts** to visualize data aggregations, helping users track trends and patterns over time, such as daily, weekly, and monthly weather data.

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


