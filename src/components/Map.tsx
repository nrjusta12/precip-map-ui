<MapContainer
  center={[39.8283, -98.5795]} // Geographic center of the contiguous U.S.
  zoom={4.5}
  style={{ height: "100vh", width: "100%" }}
  scrollWheelZoom={true}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
</MapContainer>
