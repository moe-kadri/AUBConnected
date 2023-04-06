import "./App.css"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Trading from "./components/trading/Trading"
import Feedback from "./components/feedback/Feedback"
import CareerGuidance from "./components/careerguidance/CareerGuidance"
import Schedue from "./components/schedule/Schedule"
import About from "./components/about/About"
import Events from "./components/events/Events"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Footer from "./components/footer/Footer"
import React, { Component }  from 'react';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/trading" exact element={<Trading />} />
          <Route path="/feedback" exact element={<Feedback />} />
          <Route path="/careerguidance" exact element={<CareerGuidance />} />
          <Route path="/schedule" exact element={<Schedue />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App