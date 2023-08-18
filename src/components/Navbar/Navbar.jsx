
import {React, useContext, useEffect} from 'react'
import {Button, Navbar as NavbarBS, Container, Nav, NavDropdown, Image} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'
import AuthContext from '../../context/context'
import { Auth } from 'aws-amplify'
import './navbar.css'
import Logo from '../../assets/imgs/logo-no-background.svg'
import { useShoppingCart } from '../../context/ShoppingCartContext'




const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { openCart, cartQuantity } = useShoppingCart()
  const navigate = useNavigate()

  useEffect(() => {

  }, [isAuthenticated]);
  const signOut = () => {
    Auth.signOut()
    setIsAuthenticated(false)
    navigate('/home') // after this we were being navigated to the Auth page, we want to instead navigate to the home page



  }
  return (
    <NavbarBS sticky="top" className='navnav bg-white shadow-sm mb-3'>
        <Container className='container2345'>
            <Nav className='smol-nav'>
              
              <div className="big-nav"><Nav.Link className='navlinkk' as={NavLink} to="/home"> Home </Nav.Link></div>
              <div className="big-nav"><Nav.Link className='navlinkk' as={NavLink} to="/products"> Products </Nav.Link></div>
              <div className="big-nav"><Nav.Link className='navlinkk' as={NavLink} to="/premium"> Premium Content </Nav.Link></div>
      
                {/* <p>{isAuthenticated.toString()}</p> */}
            </Nav>

            <NavbarBS.Brand as={NavLink} to="/home" className='d-flex justify-content-center ms-auto me-auto'>
              <Image 
              src={Logo}
              className='logo'
              alt="Your logo alt text"
              ></Image>
            </NavbarBS.Brand>

            <div className='last'>
              {isAuthenticated ? (
                    <NavDropdown bg="primary" title="Settings" id="navbarDropdownMenuLink" className="navbar-background m-2">
                    <NavDropdown.Item onClick={signOut}> Sign Out </NavDropdown.Item>
                    {/* <Nav.Link className='navlinkk m-4' onClick={signOut}>Sign out</Nav.Link> */}
                    </ NavDropdown>
                          
                      ) : 
                      ( 
                      <div className="big-nav"><Nav.Link className='navlinkk m-2' as={NavLink} to="/auth"> Sign Up or Sign In </Nav.Link></div>  
                      )}
              {cartQuantity > 0 && (
                <Button className='m-1' onClick={openCart} style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
              }} variant="outline-primary">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 902.86 902.86">
                <g>
                  <g>
                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                      M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                      c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                      c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                      C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                      c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                      M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                      S619.162,694.432,619.162,716.897z"/>
                  </g>
                </g>
              </svg>
              <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}>{cartQuantity}</div>
              </Button> )}
            </div>
        </Container>
    </NavbarBS>

  )
}

export default Navbar
