import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Navbarr = () => {
    return (
        <div className="wow animate__fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <NavLink to="/">
                        <img
                            src="/images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png"
                            alt="Logo"
                            className="d-inline-block align-top"
                            style={{ maxWidth: '150px' }} // اضبط حجم الصورة حسب الحاجة
                        />
                    </NavLink>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        style={{ filter: 'invert(0%)' }} // ضبط لون الأيقونة إلى الأسود
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navlinks justify-content-end">
                            <HashLink to="/#latest" className="nav-item wow animate__fadeIn" data-wow-duration="1s">Latest Builds</HashLink>
                            <HashLink to="/#process" className="nav-item wow animate__fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">Process</HashLink>
                            <HashLink to="/#service" className="nav-item wow animate__fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">Services</HashLink>
                            <HashLink to="/#contact" className="nav-item wow animate__fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">Contact Us</HashLink>
                            <NavLink to="/Projects" className="nav-item wow animate__fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">Projects</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarr;
