import React, { useState } from "react";

import { Title } from "./components/Title";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="routes-container">
      <Title text="CONTACT US" />
      <ContactForm />
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以處理表單提交的功能，例如發送email等
    console.log(formData);
    alert("感謝您的留言，我們將盡快回覆您！");
  };

  return (
    <div className="contact-form-container">
      <h2>聯絡我們</h2>
      <form onSubmit={handleSubmit}>
        <label>
          姓名:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          電子郵件:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          訊息:
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}
