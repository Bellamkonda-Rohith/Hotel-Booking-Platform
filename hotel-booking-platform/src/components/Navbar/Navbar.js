import React from 'react';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import Hotels from '../pages/Hotels';

const Navbar = ({setSearchData}) => {


    const navigate=useNavigate()
  const handleSearch = (event) => {
    setSearchData(event.target.value);
    console.log(event.target.value)
    navigate('/Hotels')
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top " style={{ backgroundColor: "#131010", borderRadius:"30px"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontWeight: "700", fontFamily: "emoji", fontSize: "25px", background: "rgba(0, 0, 0, 0.4)", borderRadius: "10px", padding: "5px" }}>StayIndia</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mb-lg-0 me-auto ms-auto custom-list" style={{ fontWeight: "500" }}>
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Home">Home</a></li>
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Hotels">Hotels</a></li>
            <li className="nav-item"><a className="nav-link active" href="/AboutUS">About Us</a></li>
            <li className="nav-item"><a className="nav-link active" href="/ContactUs">Contact Us</a></li>
            <li className="nav-item"><a className="nav-link active" href="/Login">Login</a></li>
            <li className="nav-item"><a className="nav-link active" href="/Signup">Signup</a></li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white" }} onChange={handleSearch} />

          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
