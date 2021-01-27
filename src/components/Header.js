import React from 'react'
import './Header.css';
import logo from '../assets/img/logo.jpg';
export default function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt='LLBook store'/>
        </header>
    )
}
