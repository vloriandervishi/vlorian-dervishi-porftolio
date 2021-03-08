import React from "react";
import '../Nav/assets/style.css';


function Nav(props) {
  const tabs=['About','Portfolio','Contact','Resume'];
  return (
    <header className="header">
      <h1>Vlorian Dervishi</h1>
    <ul className="nav ">
      {tabs.map(tab =>(
        <li  key={tab}>
        <a className="nav" href={'#' + tab.toLocaleLowerCase()}
        onClick={() =>props.handlePageChange(tab)}
        className={props.currentPage === tab? 'navActive': 'a'}>{tab} </a>
      </li>
      ))}
      
    </ul>
    </header>
      
    
  );
}

export default Nav;
