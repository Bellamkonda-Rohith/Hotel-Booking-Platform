import React, { useState } from 'react';
import '../src/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Hotels from './components/pages/Hotels';
import ContactUs from './components/pages/ContactUs';
import AboutUS from './components/pages/AboutUS';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

function App() {
  const [searchData, setSearchData] = useState("");

  return (
    <div className='container-fluid custom-main mt-3'>
      <Router>
        <Navbar  setSearchData={setSearchData} />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/Home" element={<Home  />} />
          <Route path="/Hotels" element={<Hotels searchData={searchData}/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
