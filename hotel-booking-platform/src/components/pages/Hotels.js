import React from "react";

import Hero from "../Hero/Hero";
const Hotels=({ searchData })=>{
    return(
        <>
        <div className="container-fluid">
      <Hero searchData={searchData} />
    </div>
        </>
    )
}
export default Hotels;
