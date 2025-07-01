
import mapboxgl from 'mapbox-gl';
import { MAP_CONFIG } from '@/utils/mapConfig';

export const setupMapInteractivity = (map: mapboxgl.Map, isInteractive: boolean) => {
  if (isInteractive) {
    map.dragPan.enable();
    map.scrollZoom.enable();
    map.boxZoom.enable();
    map.dragRotate.enable();
    map.keyboard.enable();
    map.doubleClickZoom.enable();
    map.touchZoomRotate.enable();
  } else {
    map.dragPan.disable();
    map.scrollZoom.disable();
    map.boxZoom.disable();
    map.dragRotate.disable();
    map.keyboard.disable();
    map.doubleClickZoom.disable();
    map.touchZoomRotate.disable();
  }
};

export const addMainPropertyMarker = (map: mapboxgl.Map, longitude: number, latitude: number) => {
  new mapboxgl.Marker({
    color: MAP_CONFIG.marker.color,
    scale: MAP_CONFIG.marker.scale
  })
    .setLngLat([longitude, latitude])
    .setPopup(
      new mapboxgl.Popup({ offset: MAP_CONFIG.marker.popupOffset })
        .setHTML(MAP_CONFIG.marker.popupHtml)
    )
    .addTo(map);
};

export const addNavigationControls = (map: mapboxgl.Map) => {
  map.addControl(
    new mapboxgl.NavigationControl({
      visualizePitch: true,
    }),
    'top-right'
  );
};
