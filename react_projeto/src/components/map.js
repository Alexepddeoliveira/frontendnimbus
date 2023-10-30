import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const center = [-15.77972, -47.92972];
  const zoom = 5;

  const [markers, setMarkers] = useState([]);
  const [locationInput, setLocationInput] = useState('');
  const [addingMarker, setAddingMarker] = useState(false);

  const handleAddMarker = () => {
    setAddingMarker(true);
  };

  const handleConfirmLocation = async () => {
    if (addingMarker) {
      // Converte o nome da cidade em coordenadas usando uma API de geocodificação (por exemplo, o OpenCage Geocoding API)
      const apiKey = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave de API
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${locationInput}&key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry;
          const newMarker = {
            position: [location.lat, location.lng],
            title: locationInput,
            description: 'Localização escolhida pelo usuário.',
          };
          setMarkers([...markers, newMarker]);
        }
      } catch (error) {
        console.error('Erro ao buscar coordenadas:', error);
      }

      setAddingMarker(false);
    }
  };

  return (
    <div>
      <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>
              <div>
                <h2>{marker.title}</h2>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div>
        <input
          type="text"
          placeholder="Digite a cidade ou coordenadas"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <button onClick={handleConfirmLocation}>Confirmar Localização</button>
      </div>
      <button onClick={handleAddMarker}>Adicione um marcador</button>
    </div>
  );
}

export default Map;
