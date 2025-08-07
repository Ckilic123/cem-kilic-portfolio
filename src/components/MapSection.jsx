import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import local marker images to avoid external fetches
import markerIcon from '../assets/leaflet/marker-icon.png';
import markerIcon2x from '../assets/leaflet/marker-icon-2x.png';
import markerShadow from '../assets/leaflet/marker-shadow.png';

// Fix Leaflet's default icon paths to use local images
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

/**
 * MapSection
 * Displays work locations on an interactive map using Leaflet.
 */
const MapSection = () => {
  const positions = [
    { name: 'Munich', coords: [48.1351, 11.5820] },
    { name: 'Berlin', coords: [52.5200, 13.4050] },
    { name: 'Istanbul', coords: [41.0082, 28.9784] },
    { name: 'Dusseldorf', coords: [51.2277, 6.7735] },
  ];

  // Choose a center roughly between the markers
  const center = [50.1109, 8.6821];

  return (
    <section id="locations" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Locations
        </h2>
        <div className="h-96 w-full rounded-2xl overflow-hidden border border-white/10">
          <MapContainer center={center} zoom={5} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map((pos, idx) => (
              <Marker key={idx} position={pos.coords}>
                <Popup>{pos.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
