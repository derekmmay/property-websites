import React from 'react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';
import { Car, ShoppingBag, UtensilsCrossed, Clock, DollarSign, Zap, Plane, Building, GraduationCap, X } from 'lucide-react';

interface MapFiltersProps {
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
  onClose: () => void;
}

const MapFilters: React.FC<MapFiltersProps> = ({ activeFilters, onFilterChange, onClose }) => {
  const filterCategories = [
    {
      title: "Luxury Amenities",
      icon: Building,
      filters: [
        { id: "luxury-hotels", label: "5-Star Hotels", color: "bg-amber-500" },
        { id: "private-clubs", label: "Private Clubs", color: "bg-amber-600" },
        { id: "luxury-spas", label: "Luxury Spas", color: "bg-amber-400" },
        { id: "marinas", label: "Private Marinas", color: "bg-blue-500" }
      ]
    },
    {
      title: "Transportation",
      icon: Car,
      filters: [
        { id: "ev-charging", label: "EV Charging", color: "bg-green-500" },
        { id: "airports", label: "Private Aviation", color: "bg-slate-500" },
        { id: "commute-hubs", label: "Transit Hubs", color: "bg-gray-500" }
      ]
    },
    {
      title: "Lifestyle",
      icon: ShoppingBag,
      filters: [
        { id: "luxury-shopping", label: "High-End Retail", color: "bg-purple-500" },
        { id: "fine-dining", label: "Fine Dining", color: "bg-red-500" },
        { id: "golf-courses", label: "Golf Courses", color: "bg-green-600" }
      ]
    },
    {
      title: "Demographics",
      icon: GraduationCap,
      filters: [
        { id: "high-income", label: "$200K+ Income", color: "bg-yellow-600" },
        { id: "education", label: "Top Schools", color: "bg-indigo-500" },
        { id: "professionals", label: "Executive Areas", color: "bg-gray-700" }
      ]
    }
  ];

  const handleFilterToggle = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(f => f !== filterId)
      : [...activeFilters, filterId];
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-black tracking-wide">Area Insights</h3>
        <div className="flex items-center gap-2">
          {activeFilters.length > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-xs"
            >
              Clear All
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {filterCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div key={category.title} className="space-y-3">
              <div className="flex items-center gap-2">
                <IconComponent className="w-4 h-4 text-gray-600" />
                <h4 className="text-sm font-medium text-gray-800">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterToggle(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      activeFilters.includes(filter.id)
                        ? `${filter.color} text-white shadow-md scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {activeFilters.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-1">
            {activeFilters.map((filterId) => {
              const filter = filterCategories
                .flatMap(cat => cat.filters)
                .find(f => f.id === filterId);
              return filter ? (
                <Badge 
                  key={filterId} 
                  variant="secondary" 
                  className="text-xs px-2 py-1"
                >
                  {filter.label}
                </Badge>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapFilters;
