import React from "react";
import { useParams } from "react-router";
import useStore from "../store/Contexto.jsx";
import { imgTatooine } from "../store/Store.js";

const ProfilePlanets= ()=>{
    const params = useParams();
  
    const {listPlanets} = useStore();
  
    const [data] = listPlanets.length ? listPlanets.filter((item) => item.result.uid == params.id) : [];

    const imgTatoo = data?.result.properties.name == 'Tatooine';

  
    return (
    
        <div className="profileCard2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={ imgTatoo ? imgTatooine : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data ? data?.result.properties.name : 'loading..'}</h5>
                <p className="card-text">
                The entire Star Wars lore is focused on a huge galaxy with plenty of star systems that have their own planets.
                 However, for some reason, the story tends to focus too much on a few planets due to how important they are to
                  the narrative.
                </p>
                <p className="individualDetails">
                    Name:{" "}
                  {data ? data?.result.properties.name : "loading.."}
                </p>
                <p className="individualDetails">
                    Diameter:{" "}
                  {data ? data?.result.properties.diameter : "loading.."}
                </p>
                <p className="individualDetails">
                    Orbital_period:{" "}
                  {data ? data?.result.properties.orbital_period : "loading.."}
                </p>
                <p className="individualDetails">
                    Gravity:{" "}
                  {data ? data?.result.properties.gravity : "loading.."}
                </p>
                <p className="individualDetails">
                    Population:{" "}
                  {data ? data?.result.properties.population : "loading.."}
                </p>
                <p className="individualDetails">
                    Rotation_period:{" "}
                  {data ? data?.result.properties.rotation_period : "loading.."}
                </p>
              <p className="individualDetails">
                    Surface_water:{" "}
                  {data ? data?.result.properties.surface_water : "loading.."}
                </p>
               <p className="individualDetails">
             Terrain:{" "}
                  {data ? data?.result.properties.terrain : "loading.."}
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};
export default ProfilePlanets;