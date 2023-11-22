import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import L from 'leaflet';
import pin from "./pin-mapa.png";

function Map() {
  const center = [-15.77972, -47.92972];
  const zoom = 5;

  const [markers, setMarkers] = useState([]);
  const [locationInput, setLocationInput] = useState('');

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn.icon-icons.com/icons2/2444/PNG/512/location_map_pin_mark_icon_148685.png', // Insira a URL da sua imagem
    iconSize: [32, 32], // Tamanho do ícone [largura, altura]
    iconAnchor: [16, 32], // Posição do ícone em relação ao ponto do marcador [metade da largura, altura]
  });

  const handleConfirmLocation = async () => {
      // Converte o nome da cidade em coordenadas usando a OpenCage Geocoding API
      const apiKey = 'c708da0fbeb943ddb696caf4494255a6'; 
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

  };

  return (
    <div>
      <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div>
                <h2>{marker.title}</h2>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div id="filtro-mapa">
        <Grid container spacing={2}>
          <Grid item xs={1.5}>
          <TextField id="outlined-basic" label="Digite uma cidade" variant="outlined" value={locationInput} onChange={(e) => setLocationInput(e.target.value)}/>
          </Grid>
          <Grid item xs={1}>
          <Button onClick={handleConfirmLocation}>Adicionar Marcador</Button>
          </Grid>
          <Grid item xs={1}>
          <Button variant="contained">Exportar</Button>
          </Grid>
        </Grid>
        
      </div>
      
    </div>
  
  );
}

export default Map;
