import React from "react";

import Hero from "../Hero/Hero";
const Hotels=({ searchData })=>{
    return(
        <>
        <div>
      <Hero searchData={searchData} />
    </div>
        </>
    )
}
export default Hotels;
