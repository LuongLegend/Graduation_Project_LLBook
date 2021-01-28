import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';
import logo from '../assets/img/logo.jpg';
export default function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img className='header__logo-img' src={logo} alt='LLBook store' />
                <span className='header__logo-llbook'>LL BOOK</span>
            </div>
            <form className='form-group'>
                <input className='form-field' type='search' placeholder='Tìm kiếm tựa sách, tác giả' />
                <span><FontAwesomeIcon icon={faSearch}  /></span>
            </form>
            <div>
                <FontAwesomeIcon icon={faCartArrowDown} className='header-icon color-blueviolet' />
                <FontAwesomeIcon icon={faHeart} className='header-icon' />
                <span>Đăng nhập | </span>
                <span>Đăng ký</span>
            </div>
        </header>
    )
}
