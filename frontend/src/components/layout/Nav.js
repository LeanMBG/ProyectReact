import '../../styles/components/layout/Nav.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends Component {
render () {
    return(
        <nav>
            <div>
            <ul className='holder'>
                <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/Nosotros">Nosotros</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/Novedades">Novedades</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/Contacto">Contacto</NavLink></li>
            </ul>
            </div>
        </nav>
    ) 
}
}
export default Nav;