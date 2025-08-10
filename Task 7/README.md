# Real-Time Weather Dashboard

A clean and minimal weather dashboard that displays real-time weather data for any city worldwide.

## Features

- **Real-time weather data** from OpenWeatherMap API
- **Current weather** with temperature, humidity, wind speed, and more
- **3-day forecast** with daily predictions
- **Search functionality** for any city
- **Current location support** using geolocation
- **Responsive design** for all devices
- **Loading states** and error handling
- **Clean, minimal UI** with smooth animations

## Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+)
- OpenWeatherMap API
- Font Awesome icons
- Google Fonts (Inter)

## Setup Instructions

1. **Get an API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

2. **Configure the API Key**
   - Open `scripts.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

3. **Run the Dashboard**
   - Simply open `index.html` in your web browser
   - No server setup required

## Usage

### Search for Weather
- Type a city name in the search box and press Enter or click the search button
- Examples: "London", "New York", "Tokyo"

### Use Current Location
- Click the location icon (📍) to automatically detect and display weather for your current location

### Keyboard Shortcuts
- **Ctrl + →**: Next city in default list
- **Ctrl + ←**: Previous city in default list

## API Endpoints Used

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

## Features Breakdown

### Current Weather Display
- City name and country
- Current date
- Temperature (°C)
- Weather description
- Weather icon
- "Feels like" temperature
- Visibility
- Humidity
- Wind speed
- Atmospheric pressure

### 3-Day Forecast
- Date for each day
- Weather icon
- Temperature prediction
- Weather description


### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interface

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Optimizations

- Async/await for API calls
- Promise.all for parallel requests
- Efficient DOM manipulation
- CSS animations for smooth UX
- Responsive images

## Future Enhancements

- Temperature unit toggle (°C/°F)
- Multiple city comparison
- Weather maps
- Dark/light theme toggle

## License

This project is open source and available under the MIT License.
