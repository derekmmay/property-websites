import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, ShoppingBag, UtensilsCrossed, Clock, DollarSign, Zap, Plane, Building, GraduationCap, X } from 'lucide-react';

interface MapFiltersProps {
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
  onClose: () => void;
  onExitInteractiveMode: () => void;
}

const MapFilters: React.FC<MapFiltersProps> = ({ activeFilters, onFilterChange, onClose, onExitInteractiveMode }) => {
  const filterCategories = [
    {
      title: "Convenience",
      icon: Car,
      filters: [
        { id: "grocery", label: "Groceries", color: "bg-black" },
        { id: "gas_station", label: "Gas Stations", color: "bg-black" },
        { id: "hospital", label: "Hospitals", color: "bg-black" }
      ]
    },
    {
      title: "Hospitality",
      icon: DollarSign,
      filters: [
        { id: "lodging", label: "Hotels", color: "bg-black" },
        { id: "tourist_attraction", label: "Attractions", color: "bg-black" },
        { id: "bank", label: "Banks", color: "bg-black" }
      ]
    },
    {
      title: "Recreation",
      icon: Clock,
      filters: [
        { id: "golf_course", label: "Golf Courses", color: "bg-black" },
        { id: "park", label: "Parks", color: "bg-black" },
        { id: "gym", label: "Fitness", color: "bg-black" }
      ]
    },
    {
      title: "Dining",
      icon: UtensilsCrossed,
      filters: [
        { id: "restaurant", label: "Restaurants", color: "bg-black" },
        { id: "bar", label: "Bars", color: "bg-black" },
        { id: "cafe", label: "Cafes", color: "bg-black" }
      ]
    },
    {
      title: "Education",
      icon: GraduationCap,
      filters: [
        { id: "school", label: "Schools", color: "bg-black" },
        { id: "university", label: "Universities", color: "bg-black" },
        { id: "library", label: "Libraries", color: "bg-black" }
      ]
    }
  ];

  const handleFilterToggle = (filterId: string) => {
    console.log('Filter clicked:', filterId);
    console.log('Current active filters:', activeFilters);
    
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(f => f !== filterId)
      : [...activeFilters, filterId];
    
    console.log('New filters:', newFilters);
    onFilterChange(newFilters);
    
    // Show visual feedback that filter is working
    const filterElement = document.querySelector(`[data-filter="${filterId}"]`);
    if (filterElement) {
      filterElement.classList.add('animate-pulse');
      setTimeout(() => {
        filterElement.classList.remove('animate-pulse');
      }, 200);
    }
  };

  const clearAllFilters = () => {
    console.log('Clearing all filters');
    onFilterChange([]);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Close button clicked in MapFilters');
    onClose();
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg max-h-[80vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-black tracking-wide">Area Insights</h3>
        <div className="flex items-center gap-2">
          {activeFilters.length > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-xs hover:bg-black hover:text-white transition-colors"
            >
              Clear All
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCloseClick}
            className="h-8 w-8 p-0 hover:bg-black hover:text-white transition-colors"
            type="button"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filterCategories.map((category) => {
          const IconComponent = category.icon;
          const categoryHasActiveFilters = category.filters.some(filter => activeFilters.includes(filter.id));
          
          return (
            <div key={category.title} className="space-y-2">
              <div className="flex items-center gap-2">
                <IconComponent className={`w-4 h-4 ${categoryHasActiveFilters ? 'text-black' : 'text-gray-600'}`} />
                <h4 className={`text-sm font-medium ${categoryHasActiveFilters ? 'text-black' : 'text-gray-800'}`}>
                  {category.title}
                  {categoryHasActiveFilters && (
                    <span className="ml-2 text-xs bg-black text-white px-2 py-1 rounded-full">
                      {category.filters.filter(f => activeFilters.includes(f.id)).length}
                    </span>
                  )}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.filters.map((filter) => {
                  const isActive = activeFilters.includes(filter.id);
                  return (
                    <button
                      key={filter.id}
                      data-filter={filter.id}
                      onClick={() => handleFilterToggle(filter.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer min-h-[36px] touch-manipulation ${
                        isActive
                          ? 'bg-black text-white shadow-lg scale-105 border-2 border-black'
                          : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                      }`}
                    >
                      {filter.label}
                      {isActive && (
                        <span className="ml-1 text-xs">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {activeFilters.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-600">Active Filters:</p>
            <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
              {activeFilters.length}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {activeFilters.map((filterId) => {
              const filter = filterCategories
                .flatMap(cat => cat.filters)
                .find(f => f.id === filterId);
              return filter ? (
                <Badge 
                  key={filterId} 
                  variant="secondary" 
                  className="text-xs px-2 py-1 bg-black text-white cursor-pointer hover:bg-gray-800"
                  onClick={() => handleFilterToggle(filterId)}
                >
                  {filter.label} ✕
                </Badge>
              ) : null;
            })}
          </div>
          <div className="mt-2 p-2 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Filter Results:</p>
            <p className="text-xs text-black">
              Showing {activeFilters.length} filter{activeFilters.length !== 1 ? 's' : ''} applied to the map area.
            </p>
          </div>
        </div>
      )}

      {/* Exit Interactive Mode Button */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <Button
          onClick={onExitInteractiveMode}
          variant="outline"
          className="w-full px-6 py-3 bg-white/95 backdrop-blur-sm border-2 border-black rounded-xl text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
          type="button"
        >
          Exit Interactive Mode
        </Button>
      </div>
    </div>
  );
};

export default MapFilters;
