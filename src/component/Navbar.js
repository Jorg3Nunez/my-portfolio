import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
export const Navbar = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <div className="social-icon">
                            <a href="https://github.com/Jorg3Nunez">
                                <img src={''} alt="github"/>
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jorgenunez85">
                                <img src={''} alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navbar;