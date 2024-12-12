import React, { useState, useEffect } from 'react';
import '../Hero/Hero.css';

const Hero = ({ searchData }) => {
  const hotelsArray = [
    {
      place: "Goa",
      name: "Beachside Resort",
      address: "123 Beach St, Goa",
      rating: 4.5,
      price: 120,
      amenities: ["Free WiFi", "Breakfast Included", "Beach Access"],
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Goa",
      name: "Luxury Villa",
      address: "456 Ocean Dr, Goa",
      rating: 4.8,
      price: 250,
      amenities: ["Free WiFi", "Swimming Pool", "Spa"],
      image: "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Goa",
      name: "Budget Inn",
      address: "789 Palm Rd, Goa",
      rating: 3.8,
      price: 80,
      amenities: ["Free WiFi", "Parking", "Restaurant"],
      image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Jaipur",
      name: "Heritage Palace",
      address: "101 Amber Rd, Jaipur",
      rating: 4.7,
      price: 180,
      amenities: ["Free WiFi", "Breakfast Included", "Pool"],
      image: "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Jaipur",
      name: "City Hotel",
      address: "202 Pink City Ln, Jaipur",
      rating: 4.3,
      price: 110,
      amenities: ["Free WiFi", "Parking", "Gym"],
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Jaipur",
      name: "Budget Stay",
      address: "303 Fort St, Jaipur",
      rating: 3.9,
      price: 70,
      amenities: ["Free WiFi", "Breakfast Included", "Restaurant"],
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Kerala",
      name: "Lakeview Hotel",
      address: "404 Backwater Blvd, Kerala",
      rating: 4.6,
      price: 150,
      amenities: ["Free WiFi", "Breakfast Included", "Boat Tours"],
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Kerala",
      name: "Eco Resort",
      address: "505 Green St, Kerala",
      rating: 4.9,
      price: 300,
      amenities: ["Free WiFi", "Eco-Tours", "Spa"],
      image: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Kerala",
      name: "Homestay Inn",
      address: "606 Spice Ln, Kerala",
      rating: 4.1,
      price: 90,
      amenities: ["Free WiFi", "Breakfast Included", "Local Cuisine"],
      image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Delhi",
      name: "City Center Hotel",
      address: "707 Connaught Place, Delhi",
      rating: 4.4,
      price: 130,
      amenities: ["Free WiFi", "Breakfast Included", "Gym"],
      image: "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Delhi",
      name: "Luxury Suites",
      address: "808 Capital Rd, Delhi",
      rating: 4.9,
      price: 270,
      amenities: ["Free WiFi", "Swimming Pool", "Spa"],
      image: "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      place: "Delhi",
      name: "Economy Inn",
      address: "909 Market St, Delhi",
      rating: 3.7,
      price: 75,
      amenities: ["Free WiFi", "Parking", "Restaurant"],
      image: "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [filteredData, setFilteredData] = useState([]);
  const filterData = hotelsArray.filter((hotelData) => {
    return hotelData.place.toLowerCase().includes(searchData.toLowerCase());
  });

  useEffect(() => {

      setFilteredData(filterData);

  }, [searchData]);

  return (
    <div className="container mt-4 bg-light">
      <div className="row">
        {filteredData.map((hotel, index) => (
          <div className="col-md-4" key={index}>
            <div className="card m-4 rounded-2">
              <img src={hotel.image} className="card-img-top" alt={hotel.name} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.address}</p>
                <p className="card-text"><strong>Rating:</strong> {hotel.rating}</p>
                <p className="card-text"><strong>Price:</strong> ${hotel.price} per night</p>
                <p className="card-text"><strong>Amenities:</strong> {hotel.amenities.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
