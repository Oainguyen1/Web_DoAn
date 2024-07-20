import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/Logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Ao from '~/assets/Boy/Boy.jpg';
import Ao1 from '~/assets/Girl/Girl1.png';
import Ao2 from '~/assets/Boy/Boy2.jpg';
import Ao3 from '~/assets/Children/Children.png';
import Ao4 from '~/assets/Boy/Boy4.jpg';
import Boy from '~/assets/Children/Children4.png';
import Boy1 from '~/assets/Girl/Girl4.png';
import Boy2 from '~/assets/Girl/quan1.jpg';
import Boy3 from '~/assets/Girl/quan3.webp';
import Boy4 from '~/assets/Girl/quan2.webp';
import Vay from '~/assets/Girl/vay.webp';
import Vay1 from '~/assets/Girl/vay2.webp';
import Vay2 from '~/assets/Girl/vay3.webp';
import Vay3 from '~/assets/Girl/vay4.webp';
import Vay4 from '~/assets/Girl/vay5.webp';
import Bodo from '~/assets/Children/bd.webp';
import Bodo1 from '~/assets/Children/bd1.webp';
import Bodo2 from '~/assets/Children/bd2.webp';
import Bodo3 from '~/assets/Children/bd3.webp';
import Bodo4 from '~/assets/Children/bd4.webp';
import Pk from '~/assets/Boy/pk.webp';
import Pk1 from '~/assets/Boy/pk1.webp';
import Pk2 from '~/assets/Boy/pk2.webp';
import Pk3 from '~/assets/Boy/pk3.webp';
import Pk4 from '~/assets/Boy/pk4.webp';
const cx = classNames.bind(styles);

const produceData = [
    { label: 'Áo Polo Nam In Họa Tiết Ngôi Sao', url: '/ao', image: Ao ,price: '350,000 VND '},
    { label: 'Áo Sơ Mi Tay Dài Nữ Cố 2 Ve Túi Ngực', url: '/ao', image: Ao1 ,price: '299,000 VND '},
    { label: 'Polo Thể Thao Nam Phối Lé Nổi Bật', url: '/ao', image: Ao2 ,price: '258,000 VND'},
    { label: 'Áo Polo Trẻ Em Coolmax Siêu Mát Phối Bo', url: '/ao', image: Ao3 ,price:'199,000 VND'},
    { label: 'Áo Phông Nam Let Nature Lead', url: '/ao', image: Ao4, price: '258,000 VND'},
    { label: 'Quần Dài Trẻ Em Kaki Túi Sườn', url: '/ao', image: Boy ,price: '350,000 VND '},
    { label: 'Quần Âu Nữ Dáng Baggy Ly Súp 2 Cúc', url: '/ao', image: Boy1 ,price: '299,000 VND '},
    { label: 'Quần Jeans Nữ Dáng Suông Cotton Trơn', url: '/ao', image: Boy2 ,price: '258,000 VND'},
    { label: 'Quần Jeans Nữ Ống Đứng Cao Cạp 2 Cúc', url: '/ao', image: Boy3 ,price:'199,000 VND'},
    { label: 'Quần Jeans Nữ Skinny Co Giãn 4 Chiều', url: '/ao', image: Boy4, price: '258,000 VND'},
    { label: 'Chân Váy Nữ Đuôi Cá Đai Bọc', url: '/ao', image: Vay ,price: '350,000 VND '},
    { label: 'Chân Váy Chữ A Dáng Dài Qua Gối', url: '/ao', image: Vay1 ,price: '299,000 VND '},
    { label: 'Chân Váy Nữ Tennis Kẻ', url: '/ao', image: Vay2 ,price: '258,000 VND'},
    { label: 'Chân Váy Nữ Đứng Xẻ Trước', url: '/ao', image: Vay3 ,price:'199,000 VND'},
    { label: 'Chân Váy Nữ Da Trùng Đầu Gối', url: '/ao', image: Vay4, price: '258,000 VND'},
    { label: 'Bộ Đồ Thu Đông Kid Cổ Bo Tim', url: '/ao', image: Bodo ,price: '350,000 VND '},
    { label: 'Bộ Đồ Trẻ Em In Faster', url: '/ao', image: Bodo1 ,price: '299,000 VND '},
    { label: 'Bộ Đồ Thu Đông Mác Kid', url: '/ao', image: Bodo2 ,price: '258,000 VND'},
    { label: 'Bộ Đồ Trẻ Em Cổ Trònc', url: '/ao', image: Bodo3 ,price:'199,000 VND'},
    { label: 'Bộ Đông Nữ Phối Áo Kẻ', url: '/ao', image: Bodo4, price: '258,000 VND'},
    { label: 'Mũ Lưỡi Trai Phối Màu Thêu Chữ P', url: '/ao', image: Pk ,price: '350,000 VND '},
    { label: 'Mặt Khóa Cài Thắt Lưng Nam Xoay 2 Chiều', url: '/ao', image: Pk1 ,price: '299,000 VND '},
    { label: 'Túi Unisex Đeo Chéo Nắp Nam Châm', url: '/ao', image: Pk2 ,price: '258,000 VND'},
    { label: 'Thắt Lưng Nam Mặt Khoá Tự Động', url: '/ao', image: Pk3 ,price:'199,000 VND'},
    { label: 'Túi Unisex Đeo Chéo', url: '/ao', image: Pk4, price: '258,000 VND'},
];

const initialSuggestions = [
    { label: 'Áo', url: '/ao' },
    { label: 'Quần', url: '/quan' },
    { label: 'Váy', url: '/vay' },
    { label: 'Phụ kiện', url: '/phukien' },
    { label: 'Bộ đồ', url: '/bodo' },
];

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchSuggestions, setSearchSuggestions] = useState(initialSuggestions);
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        setShowSuggestions(true);
        if (query) {
            const newSuggestions = initialSuggestions.filter((suggestion) =>
                suggestion.label.toLowerCase().includes(query.toLowerCase())
            );
            setSearchSuggestions(newSuggestions);
        } else {
            setSearchSuggestions(initialSuggestions);
        }
    };

    const handleSearch = () => {
        console.log('Tìm kiếm:', searchQuery);
        setShowSuggestions(false);
    };

    const handleSuggestionClick = (suggestion) => {
        navigate(suggestion.url);
        setShowSuggestions(false);
    };

    const handleViewMoreClick = (query) => {
        const category = query.toLowerCase();
        const suggestion = initialSuggestions.find(suggestion => suggestion.label.toLowerCase() === category);
        const url = suggestion ? suggestion.url : '/search';

        navigate(`${url}?q=${category}`);
        setShowSuggestions(false);
    };

    const filteredSuggestions = searchQuery
        ? produceData.filter((suggestion) =>
            suggestion.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <>
            {showSuggestions && <div className={cx('background-blur')} onClick={() => setShowSuggestions(false)}></div>}
            <header className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('top-row')}>
                        <div className={cx('logo')}>
                            <a href="./">
                                <img height="60px" src={image} alt="Logo" />
                            </a>
                        </div>
                        <div className={cx('search-container')}>
                            <div className={cx('search')} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)}>
                                <input
                                    placeholder="Tìm kiếm"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <button className={cx('search-btn')} onClick={handleSearch}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            {showSuggestions && (
                                <div className={cx('suggestions', 'full-screen')}>
                                    <div className={cx('suggestions-content')}>
                                        <div className={cx('suggestion-column', 'suggestion-text-column')}>
                                            <div className={cx('suggestion-header')}>Đề xuất hàng đầu</div>
                                            {searchSuggestions.map((suggestion, index) => (
                                                <div
                                                    key={index}
                                                    className={cx('suggestion-item')}
                                                    onMouseDown={() => handleSuggestionClick(suggestion)}
                                                >
                                                    {suggestion.label}
                                                </div>
                                            ))}
                                        </div>
                                        <div className={cx('suggestion-column', 'suggestion-image-column')}>
                                            <div className={cx('product-grid')}>
                                                {filteredSuggestions.length > 0 && filteredSuggestions.map((suggestion, index) => (
                                                    <div key={index} className={cx('product-card')}>
                                                        <a href={suggestion.url}>
                                                            <div className={cx('product-card-image-wrapper')}>
                                                                <img src={suggestion.image} alt={suggestion.label} />
                                                            </div>
                                                            <div className={cx('product-card-details')}>
                                                                <div className={cx('product-card-title')}>
                                                                    {suggestion.label}
                                                                </div>
                                                                <div className={cx('product-card-price')}>
                                                                    {suggestion.price}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                            {filteredSuggestions.length > 0 && (
                                                <div className={cx('view-more')}>
                                                    <button className={cx('view-more-btn')} onClick={() => handleViewMoreClick(searchQuery)}>
                                                        Xem tất cả
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <a href="./saleup">
                            <h1>Sale up to 30%</h1>
                        </a>
                        <div className={cx('dropdown')}>
                            <a href="./boy">
                                <h1>Nam</h1>
                            </a>
                            <div className={cx('dropdown-content')}>
                                <a href="./boy">Áo Polo</a>
                                <a href="./boy/shirt">Áo Sơ Mi</a>
                            </div>
                        </div>
                        <div className={cx('dropdown')}>
                            <a href="./girl">
                                <h1>Nữ</h1>
                            </a>
                            <div className={cx('dropdown-content')}>
                                <a href="./girl/dress">Váy</a>
                                <a href="./girl/skirt">Chân Váy</a>
                            </div>
                        </div>
                        <div className={cx('dropdown')}>
                            <a href="./children">
                                <h1>Trẻ em</h1>
                            </a>
                            <div className={cx('dropdown-content')}>
                                <a href="./children">Bé Trai</a>
                                <a href="./children/girl">Bé Gái</a>
                            </div>
                        </div>
                        <a href="./about">
                            <h1>Giới thiệu</h1>
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
        </>
    );
}

export default Header;
