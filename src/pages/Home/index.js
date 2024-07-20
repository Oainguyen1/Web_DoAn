import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import image from '~/assets/Slide/slide.png';
import image2 from '~/assets/Slide/slide2.png';
import image3 from '~/assets/Slide/slide3.png';
import flashSale from '~/assets/Logo/sale_icon.png';
import titleImage from '~/assets/Title/flash_sale.png';
import titleImage2 from '~/assets/Title/best_seller.png';
import Produce from '~/assets/SaleProduce/produce.png';
import Produce1 from '~/assets/SaleProduce/produce1.png';
import Produce2 from '~/assets/SaleProduce/produce2.png';
import Produce3 from '~/assets/SaleProduce/produce3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const images = [
    { src: image, url: './' },
    { src: image2, url: './' },
    { src: image3, url: './' },
];

const produceData = [
    {
        src: Produce,
        title: 'Áo chống nắng đa năng Anti UV - Versatile',
        url: '/product-detail/669a24e0cdf6d79d165e9deb',
        price: '139,000 VND',
        previousPrices: '220,000VND',
    },
    {
        src: Produce1,
        title: 'Áo Polo Thể Thao Nam In Vai Phản Quang',
        url: '/product-detail/669a24e0cdf6d79d165e9deb',
        price: '299,000 VND',
        previousPrices: '350,000VND',
    },
    {
        src: Produce2,
        title: 'Áo Chống Nắng Nam Có Mũ',
        url: '/Product-detail/669a24e0cdf6d79d165e9deb',
        price: '139,000 VND',
        previousPrices: '220,000VND',
    },
    {
        src: Produce3,
        title: 'Sơ Mi Tay Dài Nam Knit',
        url: '/Product-detail/669a24e0cdf6d79d165e9deb',
        price: '299,000 VND',
        previousPrices: '390,000VND',
    },

    // {
    //     src: Produce4,
    //     title: 'Polo Nam Cafe Dệt Tổ Ong Mickey In Ngực',
    //     url: '/Product-detail/669a24e0cdf6d79d165e9deb',
    //     price: '249,000 VND',
    //     previousPrices: '320,000VND'
    // },
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        window.location.href = images[currentIndex].url;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('slide')}>
                    <img
                        src={images[currentIndex].src}
                        alt={`Slide ${currentIndex + 1}`}
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                    />
                    <div className={cx('control')}>
                        <button className={cx('prev')} onClick={prevSlide}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className={cx('next')} onClick={nextSlide}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className={cx('produce')}>
                    <div className={cx('menu-list')}></div>
                    <div className={cx('produce-list')}>
                        <div className={cx('sale')}>
                            <a href="./saleup" className={cx('flash-sale')}>
                                <img src={flashSale} alt="" />
                                <h1>Ưu đãi 30%</h1>
                            </a>
                            <div className={cx('images-container')}>
                                <div className={cx('title-sale')}>
                                    <img src={titleImage} alt="" />
                                </div>
                                <div className={cx('images-produce')}>
                                    {produceData.map((item, index) => (
                                        <div key={index} className={cx('produce-item')}>
                                            <img src={item.src} alt={`Produce ${index + 1}`} />
                                            <Link to={item.url}>
                                                <h3>{item.title}</h3>
                                            </Link>
                                            <div className={cx('price-container')}>
                                                <span className={cx('discounted-price')}>{item.price}</span>
                                                <span className={cx('original-price')}>{item.previousPrices}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={cx('best-seller')}>
                            <h1>Bán chạy nhất</h1>
                            <div className={cx('images-container')}>
                                <div className={cx('title-sale')}>
                                    <img src={titleImage2} alt="" />
                                </div>
                                <div className={cx('images-produce')}>
                                    {produceData.map((item, index) => (
                                        <div key={index} className={cx('produce-item')}>
                                            <img src={item.src} alt={`Produce ${index + 1}`} />
                                            <Link to={item.url}>
                                                <h3>{item.title}</h3>
                                            </Link>
                                            <div className={cx('price-container')}>
                                                <span className={cx('discounted-price')}>{item.price}</span>
                                                <span className={cx('original-price')}>{item.previousPrices}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
