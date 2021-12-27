import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, ADMIN_ROUTE} from "../utils/consts";
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
        <NavLink style={{color:'white', fontSize: 25}} to={MAIN_ROUTE}>ARIZONA</NavLink>
        <Nav.Link style={{color: 'white'}} href='alcoholic'>ALCOHOLIC COCKTAILS</Nav.Link>
        <Nav.Link style={{color: 'white'}} href='cocktails'>COCKTAILS</Nav.Link>
        <Nav.Link style={{color: 'white'}} href='about'>ABOUT US</Nav.Link>
        

        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <NavLink style={{color:'white', marginTop: 9, marginRight: 5}} to={ADMIN_ROUTE}>SUBSCRIBE!</NavLink>
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