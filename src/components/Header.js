import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import './abc.scss';
import logo from '../assets/img/logo.jpg';
export default function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt='LLBook store'/>
            <span className='llbook'>LL BOOK</span>
            <form className='form-group'>
                <input className='form-field' type='search' placeholder='Tìm kiếm tựa sách, tác giả' />
                <span><FontAwesomeIcon icon={faSearch} className='icon-search' /></span>
            </form>
            <p>12314</p>
        </header>
    )
}
