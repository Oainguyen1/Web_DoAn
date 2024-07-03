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
                        <a href="./">
                            <img height="60px" src={image} alt="Logo" />
                        </a>
                    </div>
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm"></input>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('action')}>
                    <a href="./saleup">
                        <h1>Sale up to 30% </h1>
                    </a>
                    <a href="./boy">
                        <h1>Nam </h1>
                    </a>
                    <a href="./girl">
                        <h1>Nữ</h1>
                    </a>
                    <a href="./children">
                        <h1>Trẻ em </h1>
                    </a>
                    <a href="./about">
                        <h1>Giới thiệu </h1>
                    </a>

                    <div className={cx('cart-container')}>
                        <a className={cx('cart')} href="./cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                        <div className={cx('badge')}>0</div>
                    </div>
                    <div className={cx('user')}>
                        <a href="./login">
                            <h1>Đăng nhập</h1>
                        </a>
                        <h1>/</h1>
                        <a href="./signin">
                            <h1>Đăng Ký</h1>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
