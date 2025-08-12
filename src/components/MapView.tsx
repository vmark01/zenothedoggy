import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Place } from './Place';
import 'leaflet/dist/leaflet.css';
import './MapView.css'
import { favoritePlaces } from './places';
import { useTranslation } from "react-i18next";

const customMustarIcon = new L.Icon({
  iconUrl: '/marker.png',
  iconSize: [40, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});


export type PlaceProps = {
  places: Place[];
}

export default function MapView() {
  const center: [number, number] = [47.1625, 19.5033];
  const zoom = 7; 

  const { t } = useTranslation();

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-wrapper">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {favoritePlaces.map((place) => (
        <Marker
          key={place.id}
          position={place.position}
          icon={customMustarIcon}
        >
          <Popup>
            <strong>{t(place.name)}</strong><br />
            {t(place.description)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
