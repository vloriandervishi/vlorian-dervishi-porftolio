import React, { useState } from "react";
import About from "./About/About-Me-index";
import Nav from "./Nav/Nav-index";
import Portfolio from "./portfolio/portfolio-index";
import Resume from "./Resume/Resume-index";
import Contact from "./Contact/contact-index";

function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About></About>;
      case "Portfoliof":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        return <Resume></Resume>;
    }
  };
  return(
   <div>
    
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>

    <div>{renderPage(currentPage)}</div>

  </div>
  )
}

export default PortfolioContainer;
