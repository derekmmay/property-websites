import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, Eye } from 'lucide-react';

interface WeatherData {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    visibility: number;
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  };
  daily: Array<{
    dt: number;
    temp: {
      max: number;
      min: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

const RealTimeWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>('');

  // Dana Point coordinates
  const lat = 33.4734;
  const lon = -117.7018;

  const fetchWeather = async (key: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial&exclude=minutely,hourly,alerts`
      );
      
      if (!response.ok) {
        throw new Error('Weather data unavailable');
      }
      
      const data = await response.json();
      setWeather(data);
      localStorage.setItem('weather_api_key', key);
    } catch (err) {
      setError('Unable to fetch weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedKey = localStorage.getItem('weather_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      fetchWeather(savedKey);
    } else {
      setLoading(false);
    }
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'clouds':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      fetchWeather(apiKey.trim());
    }
  };

  if (!apiKey || error) {
    return (
      <div className="mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8 text-black">Live Dana Point Weather</h2>
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6">
                Enter your OpenWeatherMap API key to see real-time weather data for Dana Point.
                <br />
                <a 
                  href="https://openweathermap.org/api" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black underline hover:no-underline"
                >
                  Get your free API key here
                </a>
              </p>
              <form onSubmit={handleApiKeySubmit} className="flex gap-3">
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter OpenWeatherMap API key"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Weather
                </button>
              </form>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-8 text-black text-center">Live Dana Point Weather</h2>
          <div className="animate-pulse space-y-4">
            <div className="h-32 bg-gray-200 rounded-xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const currentWeather = weather.current;
  const forecast = weather.daily.slice(1, 5); // Next 4 days

  return (
    <div className="mb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-8 text-black text-center">Live Dana Point Weather</h2>
        
        {/* Current Weather - Large Card */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white mb-8 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {getWeatherIcon(currentWeather.weather[0].main)}
                <div>
                  <div className="text-5xl font-light text-black mb-2">
                    {Math.round(currentWeather.temp)}°F
                  </div>
                  <div className="text-lg text-gray-600 capitalize mb-1">
                    {currentWeather.weather[0].description}
                  </div>
                  <div className="text-sm text-gray-500">
                    Feels like {Math.round(currentWeather.feels_like)}°F
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Dana Point, CA</div>
                <div className="text-sm text-gray-500">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Wind className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <div className="text-lg font-medium text-black">{Math.round(currentWeather.wind_speed)} mph</div>
              <div className="text-xs text-gray-500">Wind Speed</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Droplets className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-lg font-medium text-black">{currentWeather.humidity}%</div>
              <div className="text-xs text-gray-500">Humidity</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <div className="text-lg font-medium text-black">{Math.round(currentWeather.visibility / 1000)} mi</div>
              <div className="text-xs text-gray-500">Visibility</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Thermometer className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <div className="text-lg font-medium text-black">{Math.round(currentWeather.feels_like)}°F</div>
              <div className="text-xs text-gray-500">Feels Like</div>
            </CardContent>
          </Card>
        </div>

        {/* 4-Day Forecast */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {forecast.map((day, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/95 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-gray-600 mb-3">
                  {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className="mb-3">
                  {getWeatherIcon(day.weather[0].main)}
                </div>
                <div className="text-sm font-medium text-black mb-1">
                  {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
                </div>
                <div className="text-xs text-gray-500 capitalize">
                  {day.weather[0].description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealTimeWeather;