import React from "react";
import { useParams } from "react-router";
import useStore from "../store/Contexto.jsx";

const ProfileCard = () => {

  const params = useParams();
  const {listPeople} = useStore();

  const [data] = listPeople.length ? listPeople.filter((item) => item.result.uid == params.id) : [];
  console.log(`data`,data)
  

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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
