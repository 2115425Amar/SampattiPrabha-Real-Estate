import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Map.scss"
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({items}) {
  return (
    // <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
    <MapContainer
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [26.8467, 80.9462]
           // Lucknow, Uttar Pradesh as the initial center
          // Adjusted zoom to fit UP cities
      }
      zoom={4.5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item=>(
        <Pin item={item} key={item.id}/>
      ))}
    </MapContainer>
  )
}
export default Map
