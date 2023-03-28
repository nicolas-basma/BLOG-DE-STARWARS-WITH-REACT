import React from "react";
import { useParams } from "react-router";
import useStore from "../store/Contexto.jsx";

const ProfileCard = () => {

  const params = useParams();
  const {listPeople} = useStore();

  const [data] = listPeople.length ? listPeople.filter((item) => item.result.uid == params.id) : [];

  

  return (
  
      <div className="card mb-3 profileCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data ? data?.result.properties.name : 'loading..'}</h5>
              <p className="card-text">
               For reasons only fully understood by themselves, researchers at the École Polytechnique Fédérale de Lausanne (EPFL) 
               in Switzerland plotted the most important characters on a bizarre map that shows the connections between the characters.
               The researchers chose 7,563 characters to include on the map, 1,367 of which are Jedi and 724 Sith.
               Despite the movies and related stories being set in a galaxy far, far away, almost 80 per cent of the major characters are human.
               The characters are spread among 640 different communities on 294 planets, 
               and despite the high visibility of aliens in the Star Wars universe, it turns out almost 80 percent of the major players are actually human.
              </p>
              <p className="individualDetails">
                Gender:{" "}
                {data ? data?.result.properties.gender : "loading.."}
              </p>
              <p className="individualDetails">
                Eyes Color:{" "}
                {data ? data?.result.properties.eye_color : "loading.."}
              </p>
              <p className="individualDetails">
                birth_year:{" "}
                {data ? data?.result.properties.birth_year : "loading.."}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileCard;
