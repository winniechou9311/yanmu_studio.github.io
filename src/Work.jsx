import React, { useState, useEffect } from "react";

import photosData from "./HomePage/Album/Album.json";
import "./Work.css";

import { Title } from "./components/Title";

export default function Work() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // 模擬從JSON檔案中載入數據
    setPhotos(photosData);
  }, []);

  return (
    <div className="routes-container">
      <Title text="Gallary" />
      <div className="album-grid">
        {photos.map((photo) => (
          <div className="album-item" key={photo.key}>
            <div className="album-img">
              <img src={photo.path} alt={photo.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
