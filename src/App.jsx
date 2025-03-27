import AkiyamartHeader from "./components/AkiyamartHeader";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <AkiyamartHeader />

      {/* Container untuk Map dan Konten Lainnya */}
      <div className="flex flex-row flex-grow">
        {/* MAP (Setengah Layar) */}
        <div className="w-3/4">
          <MapContainer
            center={[-6.9021732628969605, 107.61864815231802]}
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>

        {/* Konten Lain di Samping Map */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100 p-4">
          <p className="text-lg font-semibold text-gray-700">
            nanti ini isinya
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
