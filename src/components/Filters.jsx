import React from "react";
import "../App.css";
import SelectUSState from "./StateSelect";


// Display filter controls
const Filters = ({setSelectedState, setName, setisCrop, setIsSeed}) => {
  return (
    <div className="d-flex">
      <div className="search-box">
      {/* U.S. State select box */}
        <SelectUSState
        id="selectState"
        className="select-box hover"
        onChange={setSelectedState}
      />
      </div>

      {/* Search input field */}
      <div className="search-box">
        <input className="search-box" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name, City"/>
      </div>
      
      {/* Has crop protection checkbox */}
      <label 
      className="checkContainer checkContainerOne">
        Has Crop Protection Purchases
          <input 
          type="checkbox"
          value={true}
          onChange={(e)=>setisCrop(e.target.checked)} 
          id="flexCheckDefault">
          </input>
        
              {/* Stylize checkboxes */}
              <span className="checkmark"></span>
      </label>
      
      {/* Has seed purchases checkbox */}
      <label 
      className="checkContainer checkContainerTwo">
        Has Seed Purchases
          <input 
          type="checkbox"
          value={true}
          onChange={(e)=>setIsSeed(e.target.checked)} 
          id="flexCheckDefault">
          </input>

                {/* Stylize checkbox */}
                <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Filters;
