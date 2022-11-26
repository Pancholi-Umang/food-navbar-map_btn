import React, { useState } from "react";
import Item from "./Items";
import './Navbar.css'

const allValues = [...new Set(Item.map((val) => val.category)), "all"];
console.log(allValues);

const Allover = () => {
  const [data, setData] = useState(Item);

  const handleClick = (btnProps) => {
    if (btnProps === "all") {
      return setData(Item);
    }
    const result = Item.filter((val) => {
      return val.category === btnProps;
    });
    setData(result);
  };
  console.log(data);
  return (
    <div className="container mt-5 ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex p-2">
              {allValues.map((getVal, index) => {
                return (
                  <button
                    key={index}
                    className="btn btn-warning mx-2 mt-2"
                    onClick={() => handleClick(getVal)}
                  >
                    {getVal}
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* {
        allValues.map((getVal,index)=>{
          return (
            <button key={index} className="btn btn-warning mx-2" onClick={() => handleClick(getVal)} >
              {getVal}
            </button>
          );
        })
      } */}

      <div className="row">
        {data.map((value, index) => {
          return (
            <div className="col-md-4 card g-5" key={index}>
              <img className="img" src={value.imag} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">{value.description}</p>
                <p className="card-text">{value.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allover;
