import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CategoryBar from "./NavBar/CategoryBar";
// import CategoryItemOverview from "./NavBar/CategoryItemOverview";
import Filters from "./ProductFilters/LeftSectionFilters/Filters";
// import displayImage from "./logo36.png";



function App(){

  return(
    <div>
      <Header />
      <CategoryBar />
      {/* <img src={displayImage} width="100%" alt="Testing" /> */}
      {/* <CategoryItemOverview /> */}
      <Filters />
      <Footer />
    </div>
  )
}

export default App;