import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("台北市");
  const [weatherData, setWeatherData] = useState([]);
  const [cities, setCities] = useState([]); // 添加這一行來存儲所有縣市名稱

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-68532D5B-5F0D-4FB4-808F-C360C3686216&format=JSON`
        );

        console.log("Full API Response:", response.data);

        const cityData = response.data.records.locations[0].location;

        const cityNames = cityData.map((loc) => loc.locationName); // 使用不同名稱來避免命名衝突
        setCities(cityNames); // 更新 cities state

        console.log("Selected City Data:", cityNames);

        const selectedCityData = cityData.find(
          (loc) => loc.locationName === city
        );
        if (selectedCityData) {
          const formattedData = selectedCityData.weatherElement.map(
            (element) => {
              return {
                time: element.time[0].startTime,
                value: element.time[0].elementValue[0].value,
              };
            }
          );
          setWeatherData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="weather-container">
      <h2>選擇縣市:</h2>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((cityName, index) => (
          <option key={index} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
      <h3>氣溫：</h3>
      <h3>降雨機率：</h3>
    </div>
  );
}
