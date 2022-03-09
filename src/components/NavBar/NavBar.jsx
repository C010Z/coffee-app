import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import CartWigdet from "../Widget/CartWigdet"



function NavBar() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">CoffeeMarket</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Cafeteras</Nav.Link>
                        <Nav.Link href="#pricing">Granos</Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link eventKey={2} href="#memes">
                            <CartWigdet />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar
