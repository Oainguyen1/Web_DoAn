import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import image from '~/assets/Slide/slide.png';
import image2 from '~/assets/Slide/slide2.png';
import image3 from '~/assets/Slide/slide3.png';
import flashSale from '~/assets/Logo/sale_icon.png';
import titleImage from '~/assets/Title/flash_sale.png';
import titleImage2 from '~/assets/Title/best_seller.png';
import Produce from '~/assets/SaleProduce/produce.png';
import Produce2 from '~/assets/SaleProduce/produce2.png';
import Produce3 from '~/assets/SaleProduce/produce3.png';
import Produce4 from '~/assets/SaleProduce/produce4.png';

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
        url: '/ao',
        price: '100,000 VND',
        previousPrices: '140,000VND',
    },
    { src: Produce2, title: 'Áo 2', url: '/product-detail', price: '200,000 VND', previousPrices: '140,000VND' },
    { src: Produce3, title: 'Áo 3', url: '/ao3', price: '300,000 VND', previousPrices: '140,000VND' },
    { src: Produce4, title: 'Áo 4', url: '/ao4', price: '400,000 VND', previousPrices: '140,000VND' },
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
                                            <a href={item.url}>
                                                <h3>{item.title}</h3>
                                            </a>
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
                                            <a href={item.url}>
                                                <h3>{item.title}</h3>
                                            </a>
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
