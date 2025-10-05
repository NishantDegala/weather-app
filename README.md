# 🌤️ Weather App — ASE Challenge (Frontend Project)

A clean, responsive React application that displays real-time weather information and a 5-day forecast for any city using the OpenWeatherMap API.

---

## 🧭 Overview

This project was built as part of the **Associate Software Engineer (ASE) Challenge by Verto**.  
It demonstrates frontend skills such as **React component design**, **API integration**, **state management**, and **clean UI development**.

The app allows users to:
- Search for any city.
- View **current temperature**, **weather condition**, and **humidity**.
- See a **5-day forecast** with daily weather details.
- Automatically reload the **last searched city** using `localStorage`.
- Get **loading indicators** and **error messages** when fetching data.

---

## ⚙️ Tech Stack

| Category | Tools |
|-----------|--------|
| **Frontend** | React |
| **Styling** | CSS |
| **API** | OpenWeatherMap |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Storage** | localStorage |

---

## 🧩 Project Structure

weather-app/
┣ src/
┃ ┣ components/
┃ ┃ ┣ Header.js
┃ ┃ ┣ WeatherDisplay.js
┃ ┃ ┗ ForecastDisplay.js
┃ ┃ ┗ Footer.js
┃ ┣ App.js
┃ ┣ App.css
┃ ┗ Index.js
┃ ┗ back.jpg
┣ public/
┣ package.json
┗ README.md

---

## 🚀 Getting Started

### 🧰 Prerequisites
- Node.js (v16+ recommended)  
- npm 
- OpenWeatherMap API key (free tier)

### 🔧 Installation Steps

1. Clone the repository
   ```  
   git clone https://github.com/NishantDegala/weather-app.git
   cd weather-app
   
2. Install dependencies
   ```
   npm install

3. Start the development server
   ```
   npm start
   
4.Opens in your browser  
   http://localhost:3000

 ---  
🧠 Features

✅ Search any city by name
✅ Shows temperature, weather condition, and humidity
✅ Displays a loading spinner during API calls
✅ Error message if city not found
✅ Responsive, minimal UI for all screen sizes

✨ Bonus Features:

Saves last searched city in localStorage

Includes a 5-day forecast section

💡 Design Decisions

OpenWeatherMap API used for global coverage and simplicity.

React Hooks manage state locally for lightweight code.

Responsive design ensures usability on desktop and mobile.

Temperature shown in metric units (°C).

🔐 Note on API Key Usage

For the purpose of this challenge and easy reviewer access:

The OpenWeatherMap API key is temporarily included in the code.

This key will be revoked and deleted after 10th October 2025 (if selected 14th).

In a real-world setup, API keys should always be stored securely in .env files and never committed to Git.

📸 Screenshots
<img width="1917" height="915" alt="image" src="https://github.com/user-attachments/assets/980a4c56-10c8-4a2e-a528-6b7a9707179a" />

🧑‍💻 Author

👋 Nishant Degala
📍 India
💼 https://github.com/NishantDegalal | www.linkedin.com/in/nishant-degala
📧 nishant.degala@gmail.com

