import React, { useEffect, useRef } from 'react';

// Data for cities and roles
const CITY_ENTRIES = [
  {
    id: 'berlin',
    city: 'Berlin',
    company: 'AUTO1 Group',
    title: 'Product Manager',
    period: 'May 2022 – Oct 2023',
    coords: [13.4050, 52.5200],
  },
  {
    id: 'munich',
    city: 'Munich',
    company: 'CARFAX Europe',
    title: 'Product Manager',
    period: 'Nov 2023 – Dec 2024',
    coords: [11.5820, 48.1351],
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    company: 'ING',
    title: 'Product Owner',
    period: 'Sep 2020 – Mar 2022',
    coords: [28.9784, 41.0082],
  },
  {
    id: 'dusseldorf',
    city: 'Düsseldorf',
    company: 'METRO',
    title: 'Product Owner Intern',
    period: 'Dec 2018 – May 2019',
    coords: [6.7735, 51.2277],
  },
];

const darkStyle = 'mapbox://styles/mapbox/dark-v11';

export default function MapboxCareerMap({ className = '' }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const token = import.meta.env.VITE_MAPBOX_TOKEN || '';
      if (!token) return;

      const module = await import('mapbox-gl');
      const mapboxgl = module.default || module;
      mapboxgl.accessToken = token;

      if (!mapboxgl.supported()) return;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: darkStyle,
        center: [9.0, 50.0],
        zoom: 4.2,
        attributionControl: false,
        pitch: 0,
        antialias: true,
        cooperativeGestures: true,
      });

      if (!isMounted) return;

      mapRef.current = map;
      map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
      map.addControl(new mapboxgl.AttributionControl({ compact: true }));

      // Create animated markers with tooltips
      const createdMarkers = CITY_ENTRIES.map((entry) => {
        const el = document.createElement('div');
        el.className = 'career-pin';
        el.setAttribute('data-id', entry.id);

        // Tooltip content element
        const tooltip = document.createElement('div');
        tooltip.className = 'career-tooltip';
        tooltip.innerHTML = `
          <div class="tooltip-card">
            <div class="city">${entry.city}</div>
            <div class="title">${entry.title}</div>
            <div class="company">${entry.company}</div>
            <div class="period">${entry.period}</div>
          </div>
        `;
        el.appendChild(tooltip);

        const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat(entry.coords)
          .addTo(map);

        // Show/hide tooltip on hover
        el.addEventListener('mouseenter', () => el.classList.add('hover'));
        el.addEventListener('mouseleave', () => el.classList.remove('hover'));

        return marker;
      });

      markersRef.current = createdMarkers;

      // Fit bounds to markers with padding
      const bounds = new mapboxgl.LngLatBounds();
      CITY_ENTRIES.forEach((e) => bounds.extend(e.coords));

      map.once('load', () => {
        map.fitBounds(bounds, { padding: 80, duration: 800, maxZoom: 6 });

        // Subtle glow under markers
        const source = {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: CITY_ENTRIES.map((e) => ({
              type: 'Feature',
              properties: { id: e.id },
              geometry: { type: 'Point', coordinates: e.coords },
            })),
          },
        };

        if (!map.getSource('city-pulse')) map.addSource('city-pulse', source);
        if (!map.getLayer('city-pulse-layer')) {
          map.addLayer({
            id: 'city-pulse-layer',
            type: 'circle',
            source: 'city-pulse',
            paint: {
              'circle-radius': [
                'interpolate', ['linear'], ['zoom'],
                4, 4,
                8, 12
              ],
              'circle-color': '#3b82f6',
              'circle-opacity': 0.15,
              'circle-blur': 0.6,
            },
          });
        }
      });
    })();

    return () => {
      isMounted = false;
      try {
        markersRef.current.forEach((m) => m.remove?.());
        mapRef.current?.remove?.();
      } catch (_) {}
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapContainerRef}
        className="w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10"
      />
      {!import.meta.env.VITE_MAPBOX_TOKEN && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm bg-black/10">
          Set VITE_MAPBOX_TOKEN in .env.local to enable the map
        </div>
      )}
    </div>
  );
}