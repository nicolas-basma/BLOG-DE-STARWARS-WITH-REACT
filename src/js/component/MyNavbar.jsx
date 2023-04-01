import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import useStore from "../store/Contexto.jsx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UseAnimations from 'react-useanimations';
import trash from "react-useanimations/lib/trash";

export const MyNavbar = () => {
  const { favorite } = useStore();
  const { handleDelete } = useStore();
  const Navigate = useNavigate();

  const handleHome = () => {
    Navigate("/");
  };

  let favNumber = favorite.length
  console.log(favNumber)

  let setFavorite = favorite.length ? (
    favorite.map((item) => (
      <NavDropdown.ItemText key={item.name}><div className="itemNavbar">
        <Link to={`${item.id}`}>{item.name}</Link>
        <UseAnimations animation={trash} onClick={()=>handleDelete(item.id)}/>
        </div>
      </NavDropdown.ItemText>
    ))
  ) : (
    <div className="emptyNavbar">Nothing to show</div>
  );

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFQDCjUKaJeQFoZOv2WdbvdsZO5o1S4gfMbn_8OSEXNb7c3GccxsKmTX5yC9FvOHeJ5M&usqp=CAU"
            className="logo"
            onClick={handleHome}
          />
        </Navbar.Brand>
        <NavDropdown title={`Favorites (${favNumber})`} id="basic-nav-dropdown">
          {setFavorite}
        </NavDropdown>
      </Container>
    </Navbar>
  );
};
