import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                 <div className='menu-icon' onClick={ handleClick }>
                     <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About     
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Approach    
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Projects     
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Work With Me     
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Contact     
                        </Link> 
                    </li>
                 </ul>
              </div>
          </nav>
        </>
    )
}

export default Navbar
