import React, { useState } from "react";
import axios from "axios";
import { Title } from "./components/Title";

import "./styles/GeneralStyle.css";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordStrengthChecker = (password) => {
    // 驗證8至10個字符
    const lengthCheck = password.length >= 8 && password.length <= 10;
    // 驗證至少一個大寫字母
    const uppercaseCheck = /[A-Z]/.test(password);
    // 驗證至少一個小寫字母
    const lowercaseCheck = /[a-z]/.test(password);
    // 驗證至少一個數字
    const numberCheck = /\d/.test(password);

    // 確認所有條件都是true
    return lengthCheck && uppercaseCheck && lowercaseCheck && numberCheck;
  };

  const [errorMessage, setErrorMessage] = useState(""); // 用於顯示錯誤消息

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("兩次輸入的密碼不相同!");
      return;
    }

    // 如果密碼匹配，則可以進行一些表單驗證或發送數據到後端的操作
    console.log(formData);
    setErrorMessage(""); // 清除錯誤消息

    try {
      const response = await axios.post("YOUR_BACKEND_ENDPOINT", formData);
      console.log(response.data);
      // 處理後端回傳的數據或轉向其他頁面
    } catch (error) {
      console.error("Error posting data:", error);
      // 處理錯誤，例如顯示錯誤消息給用戶
    }
  };

  return (
    <div className="routes-container">
      <Title text="Sign Up" />

      <div className="signup-section">
        <form onSubmit={handleSubmit}>
          <h3>新用戶註冊</h3>
          <p>
            貼心小提醒：若遲遲沒有收到驗證信件，可能是跑到垃圾信件匣，記得將郵件設定為非垃圾信喔！
          </p>
          <label>會員帳號</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />{" "}
          <br />
          <p>填寫會員帳號請使用英文字母或數字註冊。</p>
          <label>會員信箱</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />{" "}
          <br />
          <p>驗證信件將會寄送至此郵箱。</p>
          <label>設定密碼</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />{" "}
          <br />
          <label>再次確認密碼</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />{" "}
          <br />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
          {/* 如果有錯誤消息，則顯示 */}
          <p>密碼強度表</p>
          <p>按下送出代表已閱讀並同意會員及隱私條款。</p>
          <button type="submit">送出</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
