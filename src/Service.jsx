import React, { useState, useEffect } from "react";

import { Title } from "./components/Title.jsx";
import BookingForm from "./BookingForm.jsx";

import "./styles/GeneralStyle.css";
import "./Service.css";
import "./ActionButton.css";
import { ActionButton } from "./ActionButton.jsx";

const Services = [
  {
    key: 1,
    type: "個人寫真",
    path: "./public/Service/Personal/Service_Personal_Image.jpg",
    alt: "Service_Personal_Image",
    price: "NT$4000",
    duration: "3小時",
    delivery: "5個工作日",
    description:
      "一人以上不加價\n提供精修電子檔，一組5張不分直橫式\n拍攝完5個工作日內email電子檔\n最早開放預約時間為7天後～半年內",
  },
  {
    key: 2,
    type: "婚紗攝影",
    path: "./public/Service/Wedding/Service_Wedding_Image.jpg",
    alt: "Service_Wedding_Image",
    price: "\n單人重磅婚紗：NT$8000\n單人輕型婚紗:NT$6500",
    duration: "4小時",
    delivery: "5個工作日",
    description:
      "如需拍攝雙人以上寫真服務\n－加 1 人 NT$500（不需禮服）\n－加 1 人 NT$2000（需禮服)\n提供精修電子檔，一組5張不分直橫式\n拍攝完5個工作日內email電子檔\n最早開放預約時間為7天後～半年內",
  },
  {
    key: 3,
    type: "山岳攝影",
    path: "./public/Service/Mountain/Service_Mountain_Image_2.jpg",
    alt: "Service_Mountain_Image",
    price: "\n單日郊山：NT$8000\n兩天一夜：NT$12000\n三天兩夜：NT$16000",
    duration: "整天",
    delivery: "7個工作日",
    description:
      "如需拍攝雙人以上寫真服務，加 1 人 NT$500\n兩天(含)以上行程，第二天起每日$NT4000\n須協助攝影師交通、食宿，不包含於攝影費用內\n提供精修電子檔，一組5張不分直橫式\n拍攝完5個工作日內email電子檔\n最早開放預約時間為7天後～半年內",
  },
];

export default function Service() {
  //Booking Modal

  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const handleOpenModal = (service) => {
    setCurrentService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentService(null);
  };

  const handleBackgroundClick = (event) => {
    // 檢查點擊的元素是否是背景
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      // 使用 `key` 來檢查是否按下的是 "Escape" 鍵
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    // 如果 modal 打開，添加鍵盤事件監聽器
    if (showModal) {
      document.addEventListener("keydown", handleEscKey);
    }

    // 在組件卸載或 modal 關閉時，刪除監聽器
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [showModal]); // 依賴於 `showModal` 的狀態

  return (
    <div className="routes-container">
      <Title text="Our Service" />

      <div className="service-container">
        {Services.map((service) => (
          <div className="Service-item" key={service.key}>
            <h2 className="service-title">{service.type}</h2>
            <img className="Service-img" src={service.path} alt={service.alt} />
            <div className="service-content">
              <div className="service-button">
                <ActionButton
                  text="立即預約"
                  onClick={() => handleOpenModal(service)}
                ></ActionButton>
                <h3>
                  價格：
                  {service.price.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
                <br />
                <h3>拍攝時長：{service.duration}</h3>
                <h3>交件時間：{service.delivery}</h3>
              </div>

              <br />
              <div className="service-description">
                <h3>服務說明：</h3>
                <br />

                {service.description.split("\n").map((line, i) => (
                  <li key={i}>
                    {line}
                    <br />
                  </li>
                ))}
              </div>

              <div className="service-button"></div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal" onClick={handleBackgroundClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>

            <h2 className="modal-title">{currentService?.type}</h2>
            <BookingForm selectedServiceType={currentService?.type} />

            <p className="service-description modal-service">
              <h3>服務說明：</h3>
              <br />
              {currentService?.description.split("\n").map((line, i) => (
                <li key={i}>
                  {line}

                  <br />
                </li>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
