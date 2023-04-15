import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type LeaFletProps = {
  lat: number;
  long: number;
  userName: string;
};

export const LeaFlet = ({ lat, long, userName }: LeaFletProps) => {
  return (
    <MapContainer
      id="map"
      center={[lat, long]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>Here is {userName} house.</Popup>
      </Marker>
    </MapContainer>
  );
};
