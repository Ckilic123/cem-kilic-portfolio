import React, { useEffect, useState } from 'react';

/**
 * MapSection
 * Displays work locations on an interactive map using Leaflet.
 */
const MapSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [leafletModules, setLeafletModules] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let isMounted = true;

    async function loadLeaflet() {
      try {
        // Dynamically import CSS and libraries only on the client
        await import('leaflet/dist/leaflet.css');
        const leaflet = await import('leaflet');
        const reactLeaflet = await import('react-leaflet');

        // Fix Leaflet's default icon paths to use local images (loaded via Vite)
        const markerIcon = (await import('../assets/leaflet/marker-icon.png')).default;
        const markerIcon2x = (await import('../assets/leaflet/marker-icon-2x.png')).default;
        const markerShadow = (await import('../assets/leaflet/marker-shadow.png')).default;

        // Configure default icons
        // Some bundlers attach default export under .default; ensure we use the correct object
        const L = (leaflet && leaflet.default) ? leaflet.default : leaflet;
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: markerIcon,
          iconRetinaUrl: markerIcon2x,
          shadowUrl: markerShadow,
        });

        if (isMounted) {
          setLeafletModules({
            L,
            MapContainer: reactLeaflet.MapContainer,
            TileLayer: reactLeaflet.TileLayer,
            Marker: reactLeaflet.Marker,
            Popup: reactLeaflet.Popup,
          });
        }
      } catch (error) {
        console.error('Failed to load Leaflet/react-leaflet:', error);
      }
    }

    loadLeaflet();

    return () => {
      isMounted = false;
    };
  }, [isClient]);

  const positions = [
    { name: 'Munich', coords: [48.1351, 11.5820] },
    { name: 'Berlin', coords: [52.5200, 13.4050] },
    { name: 'Istanbul', coords: [41.0082, 28.9784] },
    { name: 'Dusseldorf', coords: [51.2277, 6.7735] },
  ];

  // Choose a center roughly between the markers
  const center = [50.1109, 8.6821];

  const MapContent = () => {
    if (!leafletModules) {
      return (
        <div className="h-96 w-full rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center text-gray-400">
          Loading map...
        </div>
      );
    }

    const { MapContainer, TileLayer, Marker, Popup } = leafletModules;

    return (
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
    );
  };

  return (
    <section id="locations" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Locations
        </h2>
        <MapContent />
      </div>
    </section>
  );
};

export default MapSection;
