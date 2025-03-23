import "./VehiclesList.css";
import React from "react";

function Filter({ onFilterChange }) {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value); // Pass the selected value to the parent component
  };

  return (
    <div className="filter-container_vl">
      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="All"
          defaultChecked
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> All
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Bikes"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Bikes
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Price"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Price
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Rating"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Rating
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Cars"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Cars
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Vans"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Vans
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Available"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Available
      </label>

      <label className="filter-option_vl">
        <input
          type="radio"
          name="filter"
          value="Not available"
          onChange={handleFilterChange}
        />
        <span className="circle_vl"></span> Not available
      </label>
    </div>
  );
}

export default Filter;