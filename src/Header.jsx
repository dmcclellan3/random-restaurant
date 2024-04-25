import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

    
    function Header() {
      return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
              <Col xs={3} md={2}>
              <Image id="header-logo" src="dad bod logo.png" thumbnail />
              </Col>
              
            <Navbar.Brand>Dad Bod's Bar & Grill</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Menu</Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
                <NavDropdown title="More Info" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Location
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
              <Nav>
                {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                <Nav.Link eventKey={2} href="#memes">
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header;