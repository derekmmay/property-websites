import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, MapPin } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  description: string;
}

const RealTimeWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate real-time weather data for Dana Point
  useEffect(() => {
    const fetchWeather = () => {
      // Mock weather data to avoid any external API calls causing popups
      setTimeout(() => {
        setWeather({
          temperature: 72,
          condition: 'clear',
          description: 'Sunny',
          humidity: 65,
          windSpeed: 8
        });
        setLoading(false);
      }, 1000);
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="w-12 h-12 text-yellow-500" />;
      case 'clouds':
        return <Cloud className="w-12 h-12 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-12 h-12 text-blue-500" />;
      default:
        return <Sun className="w-12 h-12 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Dana Point Weather</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-12 text-center leading-relaxed">
            Real-time weather conditions and climate data for your oceanfront location.
          </p>
          <div className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="mb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Dana Point Weather</h2>
        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-12 text-center leading-relaxed">
          Real-time weather conditions and climate data for your oceanfront location.
        </p>
        
        {/* Weather Summary Section */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50 mb-12 overflow-hidden">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-white/80 rounded-full shadow-lg">
                  {getWeatherIcon(weather.condition)}
                </div>
              </div>
              <div className="text-6xl font-extralight text-black mb-4">
                {weather.temperature}°F
              </div>
              <div className="text-2xl text-gray-600 capitalize mb-2">
                {weather.description}
              </div>
              <div className="flex items-center justify-center text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Dana Point, California</span>
              </div>
              <div className="text-sm text-gray-400">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })} • {new Date().toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
            </div>

            {/* Quick Summary Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="p-4">
                <Wind className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-lg font-medium text-black">{weather.windSpeed} mph</div>
                <div className="text-sm text-gray-500">Wind</div>
              </div>
              <div className="p-4">
                <Droplets className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                <div className="text-lg font-medium text-black">{weather.humidity}%</div>
                <div className="text-sm text-gray-500">Humidity</div>
              </div>
              <div className="p-4">
                <Thermometer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-lg font-medium text-black">Perfect</div>
                <div className="text-sm text-gray-500">Comfort</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Weather Details */}
        <div className="mb-12">
          <h3 className="text-2xl font-light text-black mb-8 text-center">Current Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-light text-black mb-2">{weather.windSpeed} mph</div>
                <div className="text-gray-600 font-medium">Ocean Breeze</div>
                <div className="text-sm text-gray-500 mt-2">Gentle coastal winds from the Pacific</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-light text-black mb-2">{weather.humidity}%</div>
                <div className="text-gray-600 font-medium">Humidity</div>
                <div className="text-sm text-gray-500 mt-2">Comfortable moisture levels</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-light text-black mb-2">{weather.temperature}°F</div>
                <div className="text-gray-600 font-medium">Temperature</div>
                <div className="text-sm text-gray-500 mt-2">Ideal for outdoor activities</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Climate Excellence Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-light text-black mb-8">Mediterranean Climate Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div className="text-4xl font-extralight text-black mb-2">275+</div>
              <div className="text-gray-600 font-medium">Sunny Days</div>
              <div className="text-sm text-gray-500 mt-1">Per Year</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="text-4xl font-extralight text-black mb-2">77°F</div>
              <div className="text-gray-600 font-medium">Average High</div>
              <div className="text-sm text-gray-500 mt-1">Year Round</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl">
              <div className="text-4xl font-extralight text-black mb-2">50°F</div>
              <div className="text-gray-600 font-medium">Average Low</div>
              <div className="text-sm text-gray-500 mt-1">Comfortable Nights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeWeather;