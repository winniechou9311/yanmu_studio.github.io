import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

import { calculatePrice } from "./utilities/calculatePrice";

import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";

const timeSlots = [
  "上午 ( 9:00開始 )",
  "下午 ( 14:00開始 )",
  "晚上 ( 18:00開始 )",
  "山岳攝影(全天)",
];

export default function BookingForm({ selectedServiceType }) {
  //購物車
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: new Date().getTime(),
      name: selectedServiceType,
      people: numberOfPeople,
      date: startDate.toLocaleDateString(),
      time: timeSlot,
      price: totalPrice,
      selectedServiceType,
      weddingType,
      needDress,
      hikingType,
    };
    dispatch(addItem(item));
  };

  const [selectedService, setSelectedService] = useState("selectedServiceType");
  const [weddingType, setWeddingType] = useState("");
  const [needDress, setNeedDress] = useState(false);

  const [hikingType, setHikingType] = useState("");

  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const currentDate = new Date();
  const sevenDaysFromNow = new Date(currentDate);
  sevenDaysFromNow.setDate(currentDate.getDate() + 7);
  const [startDate, setStartDate] = useState(sevenDaysFromNow);
  const halfYearLater = new Date();
  halfYearLater.setMonth(currentDate.getMonth() + 6);
  const [timeSlot, setTimeSlot] = useState(timeSlots[0]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // 使用 useEffect 來偵測狀態變化並呼叫 calculatePrice
  React.useEffect(() => {
    const price = calculatePrice(
      selectedServiceType,
      weddingType,
      numberOfPeople,
      needDress,
      hikingType
    );
    setTotalPrice(price);
  }, [
    selectedServiceType,
    weddingType,
    numberOfPeople,
    needDress,
    hikingType,
    timeSlot,
  ]);

  return (
    <div className="booking-form">
      <div className="form-group">
        {selectedServiceType === "婚紗攝影" && (
          <>
            <label>選擇婚紗類型:</label>
            <select
              value={weddingType}
              onChange={(e) => setWeddingType(e.target.value)}
              required
            >
              <option value="">請選擇</option>
              <option value="單人重磅婚紗">單人重磅婚紗(NT$8000)</option>
              <option value="單人輕量婚紗">單人輕型婚紗(NT$6500)</option>
            </select>
            <br />
          </>
        )}

        {selectedServiceType === "山岳攝影" && (
          <>
            <label>選擇行程類型:</label>
            <select
              value={hikingType}
              onChange={(e) => setHikingType(e.target.value)}
              required
            >
              <option value="">請選擇</option>
              <option value="單日行程">單日郊山(NT$8000)</option>
              <option value="二日行程">兩天一夜(NT$12000)</option>
              <option value="三日行程">三天兩夜(NT$16000)</option>
            </select>
            <br />
          </>
        )}
        <br />

        <label>選擇人數:</label>
        <select
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(Number(e.target.value))}
          disabled={
            selectedServiceType !== "個人寫真" &&
            weddingType === "" &&
            hikingType === ""
          }
        >
          <option value={1}>1人</option>
          <option value={2}>2人</option>
          <option value={3}>3人</option>
          <option value={4}>4人</option>
          <option value={5}>5人</option>
        </select>

        <br />
        {selectedServiceType === "婚紗攝影" && numberOfPeople >= 2 && (
          <>
            <label>第2人(含）以上需要禮服嗎？</label>
            <select
              value={needDress}
              onChange={(e) => setNeedDress(e.target.value === "true")}
              disabled={weddingType === ""}
            >
              <option value={true}>需要(NT$2000/人)</option>
              <option value={false}>不需要(NT$500/人)</option>
            </select>
            <br />
          </>
        )}

        <br />

        <label>選擇日期:</label>
        <p>最早開放預約時間為7天後～半年內</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={startDate}
          maxDate={halfYearLater}
        />

        <br />

        <label>選擇時段:</label>
        <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
          {timeSlots.map((slot) => {
            // 如果是「山岳攝影」，只渲染「山岳攝影(全天)」選項
            if (selectedServiceType === "山岳攝影") {
              if (slot === "山岳攝影(全天)") {
                return (
                  <option
                    key={slot}
                    value={slot}
                    disabled={bookedSlots.includes(slot)}
                  >
                    {slot} {bookedSlots.includes(slot) && " (已被預約)"}
                  </option>
                );
              }
              return null; // 不渲染其他選項
            }

            // 「個人寫真」和「婚紗攝影」不渲染「山岳攝影(全天)」選項
            if (slot === "山岳攝影(全天)") {
              return null;
            }

            // 對於其他時段選項，正常渲染
            return (
              <option
                key={slot}
                value={slot}
                disabled={bookedSlots.includes(slot)}
              >
                {slot} {bookedSlots.includes(slot) && " (已被預約)"}
              </option>
            );
          })}
        </select>
        <div>
          <h3 className="booking-price">總價格: NT${totalPrice}</h3>
        </div>
        <br />
        <div className="form-group">
          <button onClick={handleAddToCart}>加入購物車</button>
        </div>
      </div>
    </div>
  );
}
