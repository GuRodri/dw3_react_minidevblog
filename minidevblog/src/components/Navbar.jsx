import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userAuthentication } from '../hooks/userAuthentication'
import { useAuthValue } from '../context/AuthContext'
import styles from './Navbar.module.css'

const Navbar = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()
   
    return (
        <>
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.brand}>
                Blog <span>Dev</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/'
                        className={({ isActive}) => (isActive ? styles.active : null)}>Home</NavLink>
                </li>
                
                <li>
                    <NavLink to='/login'
                         className={({ isActive}) => (isActive ? styles.active : null)}>Login</NavLink>
                </li>                            
                              
            </ul>
         </nav>
     </>
    )
}

export default Navbar