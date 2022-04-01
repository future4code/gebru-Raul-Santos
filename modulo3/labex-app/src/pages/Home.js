import React from "react";
import { useNavigate } from "react-router-dom";

import { goToHomePage, LoginPage } from "../Coodinator";

const Home = () => {

  const navigate = useNavigate()

  
  
  return (
    <div>
      <h3>Home</h3>
      <div>
        <img src="https://loremflickr.com/320/240?lock=14" />
      </div>

      <button onClick={()=>goToHomePage(navigate)}>Página Home</button>
      <button onClick={()=>LoginPage(navigate)}>LoginPage</button>

    </div>
    
  )
};

export default Home;
