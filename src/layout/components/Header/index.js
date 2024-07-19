import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/Logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('top-row')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img height="60px" src={image} alt="Logo" />
                        </Link>
                    </div>
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm"></input>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('action')}>
                    <Link to="/saleup">
                        <h1>Sale up to 30%</h1>
                    </Link>
                    <div className={cx('dropdown')}>
                        <Link to="/boy">
                            <h1>Nam</h1>
                        </Link>
                        <div className={cx('dropdown-content')}>
                            <Link to="/boy">Áo Polo</Link>
                            <Link to="/boy">Áo Sơ Mi</Link>
                        </div>
                    </div>
                    <div className={cx('dropdown')}>
                        <Link to="/girl">
                            <h1>Nữ</h1>
                        </Link>
                        <div className={cx('dropdown-content')}>
                            <Link to="/girl">Váy</Link>
                            <Link to="/girl">Chân Váy</Link>
                        </div>
                    </div>
                    <div className={cx('dropdown')}>
                        <Link to="/children">
                            <h1>Trẻ em</h1>
                        </Link>
                        <div className={cx('dropdown-content')}>
                            <Link to="/children">Bé Trai</Link>
                            <Link to="/children">Bé Gái</Link>
                        </div>
                    </div>
                    <Link to="/about">
                        <h1>Giới thiệu</h1>
                    </Link>
                    <div className={cx('cart-container')}>
                        <Link className={cx('cart')} to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                        <div className={cx('badge')}>0</div>
                    </div>
                    <div className={cx('user')}>
                        <Link to="/login">
                            <h1>Đăng nhập</h1>
                        </Link>
                        <h1>/</h1>
                        <Link to="/signin">
                            <h1>Đăng Ký</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
