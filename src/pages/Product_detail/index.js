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

    const thayDoiSoLuong = (thayDoi) => {
        setSoLuong((soLuongTruoc) => Math.max(1, soLuongTruoc + thayDoi));
    };

    return (
        <div className={cx('product-page')}>
            <div className={cx('image-gallery')}>
                <img src={detail1} alt="Main Product" className={cx('main-image')} />
                <div className={cx('thumbnail-list')}>
                    <img
                        src={detail7}
                        alt="Thumbnail 1"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={detail8}
                        alt="Thumbnail 2"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={detail9}
                        alt="Thumbnail 3"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={detail10}
                        alt="Thumbnail 4"
                        className={cx('thumbnail')}
                    />
                    {/* <img
                        src={detail6}
                        alt="Thumbnail 5"
                        className={cx('thumbnail')}
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
                    <p>Màu sắc: Navy</p>
                    <div className={cx('color-buttons')}>
                        <button className={cx('color-button')}>Navy</button>
                        <button className={cx('color-button')}>Đen</button>
                        <button className={cx('color-button')}>Trắng</button>
                        <button className={cx('color-button')}>Cam</button>
                        <button className={cx('color-button')}>Xanh</button>
                    </div>
                </div>
                <div className={cx('size-options')}>
                    <p>Kích thước:</p>
                    <div className={cx('size-buttons')}>
                        <button className={cx('size-button')}>M</button>
                        <button className={cx('size-button')}>L</button>
                        <button className={cx('size-button')}>XL</button>
                        <button className={cx('size-button')}>2XL</button>
                        <button className={cx('size-button')}>3XL</button>
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
