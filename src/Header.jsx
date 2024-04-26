import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

    
    function Header() {
      return (
        <Navbar collapseOnSelect expand="lg" id="navbar">
          <Container>
              <Col xs={4} md={3}>
              <Image id="header-logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/12/03/Dad-Bod-Graphics-6992196-1.jpg" thumbnail />
              </Col>
              
            <Navbar.Brand id="restaurant-name" className='text-light'>Dad Bod's Bar & Grill</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='text-light' href="/">Menu</Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
                <NavDropdown title="More Info" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="./Contact">Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.google.com/search?q=348+e+main+st&sca_esv=0717052e380d506a&sxsrf=ACQVn09gEYnTgqaqFoRk4Zpdvph_JebtCA%3A1714094316004&source=hp&ei=6wArZq2SO_eZptQP2pOq8AU&iflsig=ANes7DEAAAAAZisO_PZ0hzlUz2FVgDwN7IW1rwJoeA1t&oq=348+E+&gs_lp=Egdnd3Mtd2l6IgYzNDggRSAqAggAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjkLlCzDFirHXABeACQAQGYAZwBoAHDBaoBAzMuM7gBA8gBAPgBAZgCBqACzwSoAgrCAgcQIxgnGOoCwgIKECMYgAQYJxiKBcICCxAuGIAEGLEDGNQCwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAgQQABgDwgIGEAAYAxgKmAMPkgcDMy4zoAfRKA&sclient=gws-wiz">
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