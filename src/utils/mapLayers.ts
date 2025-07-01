
import mapboxgl from 'mapboxgl';
import { travelTimeIsochrones, getLuxuryHeatmapData } from '@/services/mapDataService';

export const addTravelTimeIsochrones = (map: mapboxgl.Map) => {
  // Add 15-minute travel time zone
  if (!map.getSource('travel-15min')) {
    map.addSource('travel-15min', {
      type: 'geojson',
      data: travelTimeIsochrones['15min']
    });

    map.addLayer({
      id: 'travel-15min-fill',
      type: 'fill',
      source: 'travel-15min',
      paint: {
        'fill-color': '#ff6b6b',
        'fill-opacity': 0.1
      }
    });

    map.addLayer({
      id: 'travel-15min-line',
      type: 'line',
      source: 'travel-15min',
      paint: {
        'line-color': '#ff6b6b',
        'line-width': 2,
        'line-dasharray': [2, 2]
      }
    });
  }

  // Add 30-minute travel time zone
  if (!map.getSource('travel-30min')) {
    map.addSource('travel-30min', {
      type: 'geojson',
      data: travelTimeIsochrones['30min']
    });

    map.addLayer({
      id: 'travel-30min-fill',
      type: 'fill',
      source: 'travel-30min',
      paint: {
        'fill-color': '#4ecdc4',
        'fill-opacity': 0.1
      }
    });

    map.addLayer({
      id: 'travel-30min-line',
      type: 'line',
      source: 'travel-30min',
      paint: {
        'line-color': '#4ecdc4',
        'line-width': 2,
        'line-dasharray': [2, 2]
      }
    });
  }
};

export const addLuxuryHeatmap = (map: mapboxgl.Map) => {
  const heatmapData = getLuxuryHeatmapData();
  
  if (!map.getSource('luxury-heatmap')) {
    map.addSource('luxury-heatmap', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: heatmapData.map(point => ({
          type: 'Feature',
          properties: { weight: point.weight },
          geometry: {
            type: 'Point',
            coordinates: point.coordinates
          }
        }))
      }
    });

    map.addLayer({
      id: 'luxury-heatmap-layer',
      type: 'heatmap',
      source: 'luxury-heatmap',
      paint: {
        'heatmap-weight': ['get', 'weight'],
        'heatmap-intensity': 1,
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0, 'rgba(33,102,172,0)',
          0.2, 'rgb(103,169,207)',
          0.4, 'rgb(209,229,240)',
          0.6, 'rgb(253,219,199)',
          0.8, 'rgb(239,138,98)',
          1, 'rgb(178,24,43)'
        ],
        'heatmap-radius': 30,
        'heatmap-opacity': 0.6
      }
    });
  }
};

export const add3DBuildings = (map: mapboxgl.Map) => {
  if (!map.getLayer('3d-buildings')) {
    map.addLayer({
      id: '3d-buildings',
      source: 'composite',
      'source-layer': 'building',
      filter: ['==', 'extrude', 'true'],
      type: 'fill-extrusion',
      minzoom: 15,
      paint: {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
      }
    });
  }
};
