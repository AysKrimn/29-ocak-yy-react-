import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { UserProvider } from '../Context/UserContext';




function SiteNav() {

  // context
  const { user } = useContext(UserProvider)

  return (
    <Navbar expand="lg" className='bg-dark' data-bs-theme="dark">
      <Container>

        <NavLink to="/" className='navbar-brand'>./LOGO</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="w-100">
            {/* LİNK ASLINDA A ETIKETI <a></a> */}
            <NavLink className='nav-link' to="/personeller"> Personellerimiz  </NavLink>  
            <NavLink className='nav-link' to="/sayac-uygulamam">Sayaç Uygulaması</NavLink>

            { 
            
            user === null 
            ? <NavLink className="nav-link ms-auto" to="/login">Giriş Yap</NavLink>
            
            :      
            <>
            <div className='d-flex ms-auto user-login-container'>

                  {/* avatar */}
                  <div className='avatar-container'>
                      <img src={user.avatar} alt={user.username} />
                  </div>

                  <NavDropdown title={user.username} id="basic-nav-dropdown" className='ms-auto'>
        
                      <p className='nav-link'>User ID: {user.id}</p>
                      <p className='nav-link'>User Type: {user.user_type}</p>
                      <NavDropdown.Divider />
                      <NavDropdown.Item style={{gap:"5px"}} className='d-flex align-items-center text-danger' href="/logout">

                      <ion-icon style={{fontSize: "larger"}} name="log-out-outline"></ion-icon>
                        Oturumu Kapat
                      </NavDropdown.Item>
                  </NavDropdown>


              </div>
              </>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav;