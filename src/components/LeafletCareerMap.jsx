import React, { useEffect, useMemo, useRef, useState } from 'react';

const CITY_ENTRIES = [
  { id: 'berlin', city: 'Berlin', title: 'Product Manager', company: 'AUTO1 Group', period: 'May 2022 – Oct 2023', coords: [52.5200, 13.4050] },
  { id: 'munich', city: 'Munich', title: 'Product Manager', company: 'CARFAX Europe', period: 'Nov 2023 – Dec 2024', coords: [48.1351, 11.5820] },
  { id: 'istanbul', city: 'Istanbul', title: 'Product Owner', company: 'ING', period: 'Sep 2020 – Mar 2022', coords: [41.0082, 28.9784] },
  { id: 'dusseldorf', city: 'Düsseldorf', title: 'Product Owner Intern', company: 'METRO', period: 'Dec 2018 – May 2019', coords: [51.2277, 6.7735] },
];

export default function LeafletCareerMap({ className = '' }) {
  const [leaflet, setLeaflet] = useState(null);
  const [rl, setRl] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        await import('leaflet/dist/leaflet.css');
        const leafletMod = await import('leaflet');
        const reactLeafletMod = await import('react-leaflet');
        const L = leafletMod.default || leafletMod;

        // Prevent default image icon usage; we use DivIcon
        delete L.Icon.Default.prototype._getIconUrl;

        if (!isMounted) return;
        setLeaflet(L);
        setRl({
          MapContainer: reactLeafletMod.MapContainer,
          TileLayer: reactLeafletMod.TileLayer,
          Marker: reactLeafletMod.Marker,
          Popup: reactLeafletMod.Popup,
          useMap: reactLeafletMod.useMap,
        });
      } catch (e) {
        console.error(e);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  const bounds = useMemo(() => {
    if (!leaflet) return null;
    const L = leaflet;
    const latlngs = CITY_ENTRIES.map((c) => L.latLng(c.coords[0], c.coords[1]));
    return L.latLngBounds(latlngs);
  }, [leaflet]);

  if (!leaflet || !rl) {
    return (
      <div className={`relative w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Loading map…</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = rl;
  const L = leaflet;

  const createDivIcon = (entry) =>
    L.divIcon({
      className: '',
      html: `
        <div class="career-pin">
          <div class="career-tooltip">
            <div class="tooltip-card">
              <div class="city">${entry.city}</div>
              <div class="title">${entry.title}</div>
              <div class="company">${entry.company}</div>
              <div class="period">${entry.period}</div>
            </div>
          </div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      popupAnchor: [0, -20],
    });

  return (
    <div className={`relative w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 ${className}`}>
      <MapContainer
        ref={mapRef}
        bounds={bounds || undefined}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        maxZoom={8}
        minZoom={2}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains={['a', 'b', 'c', 'd']}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {CITY_ENTRIES.map((entry) => (
          <Marker
            key={entry.id}
            position={[entry.coords[0], entry.coords[1]]}
            icon={createDivIcon(entry)}
            eventHandlers={{}}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-extrabold">{entry.city}</div>
                <div className="font-bold text-blue-400">{entry.title}</div>
                <div className="font-semibold text-indigo-200">{entry.company}</div>
                <div className="text-gray-400 text-xs">{entry.period}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}