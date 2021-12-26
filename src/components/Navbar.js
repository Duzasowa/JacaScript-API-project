import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PLANETS_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'


const NavBar = observer(() => {
  const history = useHistory()
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color:'white'}} to={MAIN_ROUTE}>STARWARS</NavLink>
        <Nav.Link style={{color: 'white'}} href='alcoholic'>ALCOHOLIC COCKTAILS</Nav.Link>
        <Nav.Link style={{color: 'white'}} href='cocktails'>COCKTAILS</Nav.Link>
        <Nav.Link style={{color: 'white'}} href='planets'>PLANETS</Nav.Link>
        

        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Nav.Link href="//////">SUBSCRIBE!</Nav.Link>
            <Button variant={"outline-light"} className="ml-2">SIGN OUT</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>SIGN IN</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;