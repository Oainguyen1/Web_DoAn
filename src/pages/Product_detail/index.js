import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '~/redux/slice/cartSlice';
import classNames from 'classnames/bind';
import styles from './Product_detail.module.scss';
import detail1 from '~/assets/Product_detail/detail1.jpg';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const { id } = useParams();
    const [product, setProduct] = useState(null);

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

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const dispatch = useDispatch();
    // const CartProducts = useSelector((state) => state.cart.CartArr);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-details/${id}`);
                setProduct(response.data.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            const cartProduct = {
                id: product._id,
                name: product.name,
                image: product.image, // Assuming 'image' is a property of the product
                color: selectedColor,
                size: selectedSize,
                price: product.price,
                quantity: soLuong,
            };
            dispatch(addProduct(cartProduct));
            setIsSuccessModalOpen(true);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

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
                    <img
                        src={detail1}
                        alt="Thumbnail 5"
                        className={cx('thumbnail')}
                        onClick={() => handleThumbnailClick(detail1)}
                    />
                </div>
            </div>
            <div className={cx('product-details')}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>Giá bán:</h4>
                <h2>{product.price} ₫</h2>
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
                    <button className={cx('size-chart-button')} onClick={toggleModal}>
                        Bảng kích thước
                    </button>
                </div>
                <div className={cx('quantity-selector')}>
                    <button onClick={() => thayDoiSoLuong(-1)}>-</button>
                    <span>{soLuong}</span>
                    <button onClick={() => thayDoiSoLuong(1)}>+</button>
                </div>
                <button className={cx('them-vao-gio')} onClick={handleAddToCart}>
                    Thêm vào giỏ
                </button>
                <button className={cx('mua-ngay')}>Mua ngay</button>
            </div>
            {isModalOpen && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <span className={cx('close')} onClick={toggleModal}>
                            &times;
                        </span>
                        <h2>Bảng kích thước</h2>
                        <table className={cx('size-chart')}>
                            <thead>
                                <tr>
                                    <th>Kích thước</th>
                                    <th>Vòng ngực (cm)</th>
                                    <th>Chiều dài (cm)</th>
                                    <th>Vai (cm)</th>
                                    <th>Tay (cm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>M</td>
                                    <td>92-96</td>
                                    <td>68</td>
                                    <td>42</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>96-100</td>
                                    <td>70</td>
                                    <td>44</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>100-104</td>
                                    <td>72</td>
                                    <td>46</td>
                                    <td>22</td>
                                </tr>
                                <tr>
                                    <td>2XL</td>
                                    <td>104-108</td>
                                    <td>74</td>
                                    <td>48</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>3XL</td>
                                    <td>108-112</td>
                                    <td>76</td>
                                    <td>50</td>
                                    <td>24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {isSuccessModalOpen && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <span className={cx('close')} onClick={() => setIsSuccessModalOpen(false)}>
                            &times;
                        </span>
                        <h2>Thông báo</h2>
                        <p>Bạn đã thêm sản phẩm vào giỏ hàng thành công!</p>
                        <div className={cx('success-button-container')}>
                            <button className={cx('success-button')} onClick={() => setIsSuccessModalOpen(false)}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product_detail;
