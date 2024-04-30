import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return(
        <>
            <footer className={styles.footer}>
                <h3>Blog do desenvolvedor</h3>
                <p>Blog Dev &copy; 2024</p>
            </footer>
        </>
    )
}

export default Footer