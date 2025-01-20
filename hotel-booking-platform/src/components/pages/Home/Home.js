import React from "react";
import Hero from "../../Hero/Hero";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import Hotels from "../Hotels";
const Home = ({ searchData }) => {
  const navigate=useNavigate()
  const luxuryHotels = [
    {
      name: "Beachside Resort",
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Luxury Villa",
      image: "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Heritage Palace",
      image: "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];
  const indianHotelCategories = [
    {
      place: "Goa",
      categories: ["Hotels", "Budget Hotels", "Resorts", "Best Hotels", "North Goa", "Villas"],
      image: "https://promos.makemytrip.com/store/GoaDT.JPG"
    },
    {
      place: "Delhi",
      categories: ["Hotels", "Budget Hotels", "Resorts", "Best Hotels", "Near IGI Airport"],
      image: "https://promos.makemytrip.com/store/DelhiDT.JPG"
    },
    {
      place: "Bangalore",
      categories: ["Hotels", "Budget Hotels", "Resorts", "Near Airport", "Guhantara Resort"],
      image: "https://promos.makemytrip.com/store/BangaloreDT.JPG"
    },
    {
      place: "Ooty",
      categories: ["Hotels", "Resorts", "Cottages", "Budget Hotels", "Homestay"],
      image: "https://promos.makemytrip.com/images/50x50-Ooty-23052019.png"
    },
    {
      place: "Mumbai",
      categories: ["Hotels", "Budget Hotels", "Resorts", "Couple Hotels", "Near Mumbai Airport"],
      image: "https://promos.makemytrip.com/store/MumbaiDT.JPG"
    },
    {
      place: "Shimla",
      categories: ["Hotels", "Budget Hotels", "Best Hotels", "Resorts", "Near Mall Road"],
      image: "https://promos.makemytrip.com/images/50x50-Shimla-23052019.png"
    },
    {
      place: "Jaipur",
      categories: ["Hotels", "Resorts", "Budget Hotels", "Best Hotels", "Near Railway Station"],
      image: "https://promos.makemytrip.com/store/JaipurDT.JPG"
    },
    {
      place: "Manali",
      categories: ["Hotels", "Resorts", "Budget Hotels", "Best Hotels", "Near Mall Road"],
      image: "https://promos.makemytrip.com/images/50x50-Manali-23052019.png"
    }
  ];
  const footerContent = {
    sections: [
      {
        title: "About Us",
        links: [
          "About Us",
          "Careers",
          "Blog",
          "Contact Us"
        ]
      },
      {
        title: "Support",
        links: [
          "Customer Service",
          "FAQ",
          "Support",
          "Payment Security"
        ]
      },
      {
        title: "Legal",
        links: [
          "Privacy Policy",
          "Terms of Service",
          "Disclaimer",
          "Cookie Policy"
        ]
      },
      {
        title: "Connect",
        links: [
          "Facebook",
          "Twitter",
          "Instagram",
          "LinkedIn"
        ]
      }
    ],
    copyright: "© 2024 Your Company Name. All rights reserved."
  };




  return (
    <>

      <div className="container-fluid mt-3 rounded-2 custom-container">
        <div
          className="hero-banner" >

          <div className="hero-content text-center ">

            <h1 className="hero-headline">Explore the Wonders of India</h1>
            <p className="hero-subheadline">
              Book your perfect stay at top destinations across India.
              Experience the culture, comfort, and beauty.
            </p>
            <button className="btn btn-success btn-lg mt-3" onClick={()=>navigate('/Hotels')}>Find Your Stay

            </button>
          </div>

        </div>

      </div>
      <div className="container-fluid     mt-5 shadow-sm bg-light " style={{borderRadius:"30px"}}>
            <div className="row p-5">
              <div className="col-5">
                <div className="ffd-flex justify-content-center align-items-center"><h5 className="p-5 fw-bolder fs-1"><span  className="fs-3"style={{color:"gold"}}>INTRODUCING</span><br/>MMT LUXURY SECTION</h5></div>
              </div>
              <div className="col-7 d-flex justify-content-center align-items-center">
                <div className="row ">
                {luxuryHotels.map((luxury)=>{
               const {name,image}=luxury;
               return(
                <>
                  <div className="col-4 rounded">

                   <div className="card">
                      <img src={image}/>
                      <h6 className="text-center">{name}</h6>
                    </div>
                   </div>


                </>
               )
              })}
                </div>
              </div>


            </div>

          </div>
         {/* different types of places */}
          <div className="container-fluid mt-5  bg-light" style={{borderRadius:"30px"}}>
            <div >
              <div className="row p-5">
                {indianHotelCategories.map((placese)=>{
                  const {place,categories,image}=placese;
                  return(
                    <>
                    <div className="col-4">
                  <div className="row">
                    <div className="col-3 rounded-circle"><img className="rounded-circle"src={image}/></div>
                    <div className="col-9">
                      <h5>{place}</h5>
                      <p>{categories}</p>
                    </div>
                  </div>
                </div>
                    </>
                  )
                })}

              </div>

            </div>
          </div>
          {/* footer */}

  <div className="container-fluid bg-dark">
  <div className="container mt-4 bg-dark text-light">
    <div className="row p-5">
      {footerContent.sections.map((footer)=>{
        return(
          <>
          <div className="col-3">
            <h4>{footer.title}</h4>
            <ul className="list-unstyled">
              {footer.links.map((links)=>{
                return(
                  <>
                  <li>{links}</li>
                  </>
                )
              })}

            </ul>
          </div>
          </>
        )

      })}
    </div>
   </div>

  </div>


    </>
  );
};

export default Home;
