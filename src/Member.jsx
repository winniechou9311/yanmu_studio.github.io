import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "./components/Title";

import "./styles/GeneralStyle.css";
import "./Member.css";

export default function Member() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="routes-container">
      <div className="title">
        <Title text="Member" />
      </div>
      <div className="member-content">
        <div className="member-section">
          <p>
            我已是 <strong>YANMU Studio | 言木影像工作室</strong> 會員
          </p>
          <p>請輸入您的註冊時使用的帳號或郵箱進行登入。</p>
          <div className="label-input-group">
            <label>會員帳號</label>
            <input type="text" />
          </div>
          <div className="label-input-group">
            <label>登入密碼</label>
            <input type="number" />
          </div>
          <div className="input-checkbox-group">
            <input type="checkbox" />
            <span>記住我</span>
          </div>
          <button>登入</button>
          <br />
          <a href="#">忘記密碼?</a>
        </div>

        <div className="signup-section">
          <p>
            我想成為 <strong>YANMU Studio | 言木影像工作室</strong> 會員
          </p>
          <p>
            加入會員即可獲得會員專屬限定的閱讀內容，以及得到隱藏的彩蛋訊息。
            如有任何會員註冊的問題，請來信至<strong>yanmu8494@gmail.com</strong>
            ，並註明註冊時使用的帳號以及郵箱，我們將由專人協助您處理此問題。
          </p>
          <button onClick={navigateToSignUp}>現在就註冊成為會員</button>
        </div>
      </div>
    </div>
  );
}
