import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

// 購物車
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Cart";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Member from "./Member.jsx";
import SignUp from "./SignUp.jsx";
import CartPage from "./CartPage";

import Logo from "../public/Logo/yanmu-high-resolution-logo-color-on-transparent-background.png";

import "./App.css";
import "./styles/GeneralStyle.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router className="header-container">
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    className="NavLink NavLink-logo"
                    to="/"
                    activeClassName="active"
                    exact
                  >
                    <img className="logo" src={Logo} alt="YANMU Logo" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="NavLink"
                    to="/about"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="NavLink"
                    to="/work"
                    activeClassName="active"
                  >
                    Gallary
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="NavLink"
                    to="/service"
                    activeClassName="active"
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="NavLink"
                    to="/contact"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="NavLink"
                    to="/member"
                    activeClassName="active"
                  >
                    <ion-icon name="person-outline"></ion-icon>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="NavLink"
                    to="/Cart"
                    activeClassName="active"
                  >
                    <ion-icon name="cart-outline"></ion-icon>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Footer />
          </header>
        </div>

        <Routes className="routes-content">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Service />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/member" element={<Member />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>
        YANMU Photography Studio.© {new Date().getFullYear()}
        All rights reserved.
      </p>
    </footer>
  );
}
