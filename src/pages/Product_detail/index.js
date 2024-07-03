import classNames from 'classnames/bind';
import styles from './Product_detail.module.scss';
import React, { useState } from 'react';
import detail1 from '~/assets/Product_detail/detail1.jpg';
// import detail2 from '~/assets/Product_detail/detail2.jpg';
// import detail3 from '~/assets/Product_detail/detail3.jpg';
// import detail4 from '~/assets/Product_detail/detail4.jpg';
// import detail5 from '~/assets/Product_detail/detail5.jpg';
import detail6 from '~/assets/Product_detail/detail6.jpg';
import detail7 from '~/assets/Product_detail/detail7.jpg';
import detail8 from '~/assets/Product_detail/detail8.jpg';
import detail9 from '~/assets/Product_detail/detail9.jpg';
import detail10 from '~/assets/Product_detail/detail10.jpg';

const cx = classNames.bind(styles);

function Product_detail() {
    const [soLuong, setSoLuong] = useState(1);
    const [mainImage, setMainImage] = useState(detail1);
    const [selectedColor, setSelectedColor] = useState('Navy');
    const [selectedSize, setSelectedSize] = useState('M');

    const thayDoiSoLuong = (thayDoi) => {
        setSoLuong((soLuongTruoc) => Math.max(1, soLuongTruoc + thayDoi));
    };

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className={cx('product-page')}>
            <div className={cx('image-gallery')}>
                <img src={mainImage} alt="Main Product" className={cx('main-image')} />
                <div className={cx('thumbnail-list')}>
                    <img
                        src={detail7}
                        alt="Thumbnail 1"
                        className={cx('thumbnail')}
                        onClick={() => handleThumbnailClick(detail7)}
                    />
                    <img
                        src={detail8}
                        alt="Thumbnail 2"
                        className={cx('thumbnail')}
                        onClick={() => handleThumbnailClick(detail8)}
                    />
                    <img
                        src={detail9}
                        alt="Thumbnail 3"
                        className={cx('thumbnail')}
                        onClick={() => handleThumbnailClick(detail9)}
                    />
                    <img
                        src={detail10}
                        alt="Thumbnail 4"
                        className={cx('thumbnail')}
                        onClick={() => handleThumbnailClick(detail10)}
                    />
                    {/* <img
                        src={detail6}
                        alt="Thumbnail 5"
                        className={cx('thumbnail')}
                        onClick={() => handleThumbnailClick(detail6)}
                    /> */}
                </div>
            </div>
            <div className={cx('product-details')}>
                <h3>Áo Polo nam</h3>
                <p>SKU: 123456789</p>
                <p>Áo Polo nam, kiểu dáng đơn giản, thoải mái, phù hợp mặc ở nhà, đi chơi, dạo phố.</p>
                <h4>Giá bán:</h4>
                <h2>399.000 ₫</h2>
                <div className={cx('color-options')}>
                    <p>Màu sắc: {selectedColor}</p>
                    <div className={cx('color-buttons')}>
                        <button 
                            className={cx('color-button', { active: selectedColor === 'Navy' })} 
                            onClick={() => handleColorClick('Navy')}
                        >
                            Navy
                        </button>
                        <button 
                            className={cx('color-button', { active: selectedColor === 'Đen' })} 
                            onClick={() => handleColorClick('Đen')}
                        >
                            Đen
                        </button>
                        <button 
                            className={cx('color-button', { active: selectedColor === 'Trắng' })} 
                            onClick={() => handleColorClick('Trắng')}
                        >
                            Trắng
                        </button>
                        <button 
                            className={cx('color-button', { active: selectedColor === 'Cam' })} 
                            onClick={() => handleColorClick('Cam')}
                        >
                            Cam
                        </button>
                        <button 
                            className={cx('color-button', { active: selectedColor === 'Xanh' })} 
                            onClick={() => handleColorClick('Xanh')}
                        >
                            Xanh
                        </button>
                    </div>
                </div>
                <div className={cx('size-options')}>
                    <p>Kích thước: {selectedSize}</p>
                    <div className={cx('size-buttons')}>
                        <button 
                            className={cx('size-button', { active: selectedSize === 'M' })} 
                            onClick={() => handleSizeClick('M')}
                        >
                            M
                        </button>
                        <button 
                            className={cx('size-button', { active: selectedSize === 'L' })} 
                            onClick={() => handleSizeClick('L')}
                        >
                            L
                        </button>
                        <button 
                            className={cx('size-button', { active: selectedSize === 'XL' })} 
                            onClick={() => handleSizeClick('XL')}
                        >
                            XL
                        </button>
                        <button 
                            className={cx('size-button', { active: selectedSize === '2XL' })} 
                            onClick={() => handleSizeClick('2XL')}
                        >
                            2XL
                        </button>
                        <button 
                            className={cx('size-button', { active: selectedSize === '3XL' })} 
                            onClick={() => handleSizeClick('3XL')}
                        >
                            3XL
                        </button>
                    </div>
                </div>
                <div className={cx('quantity-selector')}>
                    <button onClick={() => thayDoiSoLuong(-1)}>-</button>
                    <span>{soLuong}</span>
                    <button onClick={() => thayDoiSoLuong(1)}>+</button>
                </div>
                <button className={cx('them-vao-gio')}>Thêm vào giỏ</button>
                <button className={cx('mua-ngay')}>Mua ngay</button>
            </div>
        </div>
    );
}

export default Product_detail;
