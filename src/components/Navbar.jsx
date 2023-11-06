import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <Navbar expand="lg" className="bg-danger" style={{ height: '10vh' }}>
      <Container>
        <Navbar.Brand href="#home">
          {/* Link que redirige al componente home */}
          <Link 
          to='/'
          className="text-white ms-3 text-decoration-none">
            <FontAwesomeIcon icon={faHouse} 
              className='p-1'/>
              Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Link que redirige al componente Contact */}
            <Link
            to='/contact'
            className="text-white ms-3 text-decoration-none">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
          <Nav className='md-auto text-white ms-3'>
            Happy Cake
            <FontAwesomeIcon icon={faCakeCandles}  
            className='p-1'/>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;