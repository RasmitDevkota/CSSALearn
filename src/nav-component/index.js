import { 
    Nav,
    Navbar, 
    NavDropdown
} from 'react-bootstrap';
  
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function navsetup() {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="../">Home</Nav.Link>
                        <Nav.Link href="../dashboard">Dashboard</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="../random">Test</NavDropdown.Item>
                            <NavDropdown.Item href="../random">Test</NavDropdown.Item>
                            <NavDropdown.Item href="../random">Test</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../random">Test</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default navsetup;