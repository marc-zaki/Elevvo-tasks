const API_KEY = 'e5d1d462241521b2fa4f39999a33b381';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

async function getWeather(city) {
    document.getElementById('loading').classList.remove('hidden');
    
    try {
        const [weather, forecast] = await Promise.all([
            fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`).then(r => r.json()),
            fetch(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`).then(r => r.json())
        ]);
        
        document.getElementById('cityName').textContent = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('temperature').textContent = `${Math.round(weather.main.temp)}°C`;
        document.getElementById('feelsLike').textContent = `Feels like ${Math.round(weather.main.feels_like)}°C`;
        document.getElementById('description').textContent = weather.weather[0].description;
        document.getElementById('humidity').textContent = `${weather.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `${weather.wind.speed} m/s`;
        document.getElementById('pressure').textContent = `${weather.main.pressure} hPa`;
        document.getElementById('visibility').textContent = `${(weather.visibility / 1000).toFixed(1)} km`;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        
        const forecastContainer = document.getElementById('forecastContainer');
        forecastContainer.innerHTML = '';
        const days = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 3);
        
        days.forEach(day => {
            const card = document.createElement('div');
            card.className = 'forecast-card';
            card.innerHTML = `
                <div>${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" />
                <div>${Math.round(day.main.temp)}°C</div>
                <div>${day.weather[0].description}</div>
            `;
            forecastContainer.appendChild(card);
        });
        
        document.getElementById('weatherContainer').classList.remove('hidden');
        
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'City not found';
        document.getElementById('error').classList.remove('hidden');
    }
    
    document.getElementById('loading').classList.add('hidden');
}

async function getWeatherByCoords(lat, lon) {
    document.getElementById('loading').classList.remove('hidden');
    
    try {
        const [weather, forecast] = await Promise.all([
            fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(r => r.json()),
            fetch(`${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(r => r.json())
        ]);
        
        document.getElementById('cityName').textContent = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('temperature').textContent = `${Math.round(weather.main.temp)}°C`;
        document.getElementById('feelsLike').textContent = `Feels like ${Math.round(weather.main.feels_like)}°C`;
        document.getElementById('description').textContent = weather.weather[0].description;
        document.getElementById('humidity').textContent = `${weather.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `${weather.wind.speed} m/s`;
        document.getElementById('pressure').textContent = `${weather.main.pressure} hPa`;
        document.getElementById('visibility').textContent = `${(weather.visibility / 1000).toFixed(1)} km`;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        
        const forecastContainer = document.getElementById('forecastContainer');
        forecastContainer.innerHTML = '';
        const days = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 3);
        
        days.forEach(day => {
            const card = document.createElement('div');
            card.className = 'forecast-card';
            card.innerHTML = `
                <div>${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" />
                <div>${Math.round(day.main.temp)}°C</div>
                <div>${day.weather[0].description}</div>
            `;
            forecastContainer.appendChild(card);
        });
        
        document.getElementById('weatherContainer').classList.remove('hidden');
        
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'Location not found';
        document.getElementById('error').classList.remove('hidden');
    }
    
    document.getElementById('loading').classList.add('hidden');
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('searchInput').value.trim();
    if (city) getWeather(city);
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = document.getElementById('searchInput').value.trim();
        if (city) getWeather(city);
    }
});

document.getElementById('locationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            getWeatherByCoords(position.coords.latitude, position.coords.longitude);
        });
    }
});

getWeather('Cairo');
