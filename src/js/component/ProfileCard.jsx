import React from "react";


<div className="card mb-3 profileCard">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="individualDetails">   
        Gender:{" "}
        {charData ? charData.result.properties.gender : "loading.."}</p>
        <p className="individualDetails">
        Eyes Color:{" "}
        {charData ? charData.result.properties.eye_color : "loading.."}
        </p>
        <p className="individualDetails">
        birth_year:{" "}
        {charData ? charData.result.properties.birth_year : "loading.."}

        </p>
      </div>
    </div>
  </div>
</div>