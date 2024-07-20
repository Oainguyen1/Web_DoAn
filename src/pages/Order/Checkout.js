import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { removeProduct, addCompletedOrder } from '~/redux/slice/cartSlice'; // Import removeProduct action

const cx = classNames.bind(styles);

function Checkout() {
    const cartItems = useSelector((state) => state.cart.CartArr);
    const [items, setItems] = useState(cartItems);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [newAddress, setNewAddress] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const [savedAddress, setSavedAddress] = useState(null);
    const [formErrors, setFormErrors] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleAddressFormChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prev) => ({ ...prev, [name]: value }));
    };

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^[0-9]+$/;
        return phoneRegex.test(phone);
    };

    const validateAddress = () => {
        let errors = {};
        let isValid = true;

        if (!newAddress.name.trim()) {
            errors.name = 'Tên không được để trống';
            isValid = false;
        }
        if (!newAddress.phone.trim()) {
            errors.phone = 'Số điện thoại không được để trống';
            isValid = false;
        } else if (!validatePhoneNumber(newAddress.phone)) {
            errors.phone = 'Số điện thoại không hợp lệ';
            isValid = false;
        }
        if (!newAddress.address.trim()) {
            errors.address = 'Địa chỉ không được để trống';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleAddAddress = () => {
        if (validateAddress()) {
            setSavedAddress(newAddress);
            setIsAddressModalOpen(false);
            setNewAddress({
                name: '',
                phone: '',
                address: '',
            });
        }
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handlePayment = async () => {
        if (!savedAddress) {
            alert('Bạn cần thêm địa chỉ giao hàng trước khi thanh toán');
            return;
        }

        try {
            // Clear cart
            items.forEach((item) => {
                dispatch(removeProduct(item.id));
            });

            dispatch(
                addCompletedOrder({
                    items,
                    totalPrice,
                    address: savedAddress,
                    paymentMethod: selectedPaymentMethod,
                    status: 'Đang giao hàng', // Trạng thái đơn hàng
                    date: new Date().toISOString(), // Optional: Add timestamp for the order
                }),
            );

            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const handleCloseSuccessModal = async () => {
        setShowSuccessModal(false);
        navigate('/cart'); // Navigate to cart page
    };

    const totalPrice = calculateTotalPrice();

    return (
        <div className={cx('checkout-wrapper')}>
            <div className={cx('cart-summary')}>
                <h2>Thanh toán</h2>
                <h3>Thông tin giỏ hàng</h3>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <div className={cx('item-meta')}>
                                    <p className={cx('item-color')}>Màu: {item.color}</p>
                                    <p className={cx('item-size')}>Kích thước: {item.size}</p>
                                    <p className={cx('item-quantity')}>Số lượng: {item.quantity}</p>
                                    <p className={cx('item-price')}>Giá: {item.price} ₫</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={cx('total-price')}>
                    <span>Tổng tiền:</span>
                    <span>{totalPrice} ₫</span>
                </div>

                <div className={cx('checkout-options')}>
                    <div className={cx('address-section')}>
                        <h3>Chọn địa chỉ giao hàng</h3>
                        <button className={cx('add-address-button')} onClick={() => setIsAddressModalOpen(true)}>
                            Thêm địa chỉ
                        </button>
                        {savedAddress && (
                            <div className={cx('saved-address')}>
                                <h4>Địa chỉ giao hàng</h4>
                                <p>
                                    <strong>Tên:</strong> {savedAddress.name}
                                </p>
                                <p>
                                    <strong>Số điện thoại:</strong> {savedAddress.phone}
                                </p>
                                <p>
                                    <strong>Địa chỉ:</strong> {savedAddress.address}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={cx('payment-section')}>
                        <h3>Chọn phương thức thanh toán</h3>
                        <div className={cx('payment-methods')}>
                            <label>
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="COD"
                                    checked={selectedPaymentMethod === 'COD'}
                                    onChange={() => handlePaymentMethodChange('COD')}
                                />
                                Thanh toán khi nhận hàng
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="PayPal"
                                    checked={selectedPaymentMethod === 'PayPal'}
                                    onChange={() => handlePaymentMethodChange('PayPal')}
                                />
                                Thanh toán bằng PayPal
                            </label>
                        </div>
                    </div>
                </div>

                <div className={cx('confirm-payment')}>
                    <button onClick={handlePayment}>Thanh toán</button>
                </div>
            </div>

            {isAddressModalOpen && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <span className={cx('close')} onClick={() => setIsAddressModalOpen(false)}>
                            &times;
                        </span>
                        <h2>Nhập địa chỉ giao hàng</h2>
                        <div className={cx('address-form')}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Tên người nhận"
                                value={newAddress.name}
                                onChange={handleAddressFormChange}
                            />
                            {formErrors.name && <p className={cx('error-text')}>{formErrors.name}</p>}
                            <input
                                type="text"
                                name="phone"
                                placeholder="Số điện thoại"
                                value={newAddress.phone}
                                onChange={handleAddressFormChange}
                            />
                            {formErrors.phone && <p className={cx('error-text')}>{formErrors.phone}</p>}
                            <textarea
                                name="address"
                                placeholder="Địa chỉ giao hàng"
                                value={newAddress.address}
                                onChange={handleAddressFormChange}
                            />
                            {formErrors.address && <p className={cx('error-text')}>{formErrors.address}</p>}
                            <button onClick={handleAddAddress}>Lưu địa chỉ</button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessModal && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <h2>Thông báo thành công</h2>
                        <p>Thanh toán thành công! Cảm ơn bạn đã đặt hàng.</p>
                        <button className={cx('success-button')} onClick={handleCloseSuccessModal}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
