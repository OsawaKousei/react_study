import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 35.6895, // 緯度
    lng: 139.6917, // 経度
};

const GoogleMapComponent: React.FC = () => {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {/* 子コンポーネントをここに追加できます */}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
