"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.header}>
            <img src="/images/logo.png" className={styles.logo} />

            <div 
                className={styles.hamburger} 
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
                <li><a href="#home">Início</a></li>
                <li><a href="#promo">Promoções</a></li>
                <li><a href="#menu">Cardápio</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
}