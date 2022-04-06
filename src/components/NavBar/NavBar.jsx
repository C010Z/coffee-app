import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'
import CartWigdet from "../Widget/CartWigdet"

const NavBar = () => {



    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/'>CoffeeMarket</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='categoria/Cafeteras'>Cafeteras</NavLink>
                        <NavLink to='categoria/Granos' >Granos</NavLink>

                    </Nav>
                    <Nav>
                        <div className="nav-cart">
                            <NavLink to='cart' className={({ isActive }) => isActive ? 'active' : ''} >
                                <CartWigdet />
                            </NavLink>  </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar