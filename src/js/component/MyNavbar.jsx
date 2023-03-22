import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import useStore from "../store/Contexto.jsx"

export const MyNavbar = () => {

  const {favorite} = useStore();

  let setFavorite = favorite.length ? favorite.map((item) => <NavDropdown.Item key={item.name}>{item.name}</NavDropdown.Item>) : null;

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFQDCjUKaJeQFoZOv2WdbvdsZO5o1S4gfMbn_8OSEXNb7c3GccxsKmTX5yC9FvOHeJ5M&usqp=CAU"
            className="logo"
          />
        </Navbar.Brand>
        <NavDropdown title="Favorites" id="basic-nav-dropdown">
         {setFavorite}
        </NavDropdown>
      </Container>
    </Navbar>
  )
}
