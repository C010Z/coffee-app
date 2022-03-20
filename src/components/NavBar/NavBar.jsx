import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import CartWigdet from "../Widget/CartWigdet"
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <NavLink to='/'>CoffeeMarket</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='categoria/Cafeteras'>Cafeteras</NavLink>
                    <NavLink  to='categoria/Granos' >Granos</NavLink>

                </Nav>
                <Nav>

                <NavLink to='cart' className={({ isActive })=> isActive ? 'active' : ''} >
                        <CartWigdet />
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

)
}

export default NavBar