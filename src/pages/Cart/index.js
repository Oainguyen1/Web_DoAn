import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import icon from '~/assets/Logo/blank_cart.png';
// import { removeCompletedOrder } from '~/redux/slice/cartSlice'; // Import action

const cx = classNames.bind(styles);

function Cart() {
    const cartItems = useSelector((state) => state.cart.CartArr);
    const completedOrders = useSelector((state) => state.cart.completedOrders) || [];
    const dispatch = useDispatch();
    const [items, setItems] = useState(cartItems);

    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;

        const updatedItems = items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
        setItems(updatedItems);

        dispatch({
            type: 'UPDATE_CART_ITEM_QUANTITY',
            payload: { id, quantity: newQuantity },
        });
    };

    // const handleOrderReceived = (orderId) => {
    //     dispatch(removeCompletedOrder(orderId));
    // };

    useEffect(() => {
        // No need to set recentOrder anymore since it's not used in this updated version
    }, [completedOrders]);

    const totalPrice = calculateTotalPrice();

    return (
        <div className={cx('wrapper-2')}>
            {items.length > 0 && (
                <div className={cx('content-2')}>
                    <h2>Giỏ hàng của bạn</h2>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <div className={cx('item-meta')}>
                                        <div className={cx('item-meta-top')}>
                                            <p className={cx('item-color')}>Màu: {item.color}</p>
                                            <p className={cx('item-size')}>Kích thước: {item.size}</p>
                                            <p className={cx('item-price')}>Giá: {item.price} ₫</p>
                                        </div>
                                        <div className={cx('quantity-selector')}>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={cx('summary')}>
                        <div className={cx('total-price')}>
                            <span>Tổng tiền:</span>
                            <span>{totalPrice} ₫</span>
                        </div>
                        <div className={cx('checkout-button')}>
                            <button onClick={() => navigate('/checkout', { state: { items, totalPrice } })}>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {items.length === 0 && (
                <div className={cx('empty-cart')}>
                    <img src={icon} alt="" />
                    <p>Giỏ hàng của bạn đang trống</p>
                </div>
            )}
            <div className={cx('order-completed')}>
                <p className={cx('title')}>Trạng thái đơn hàng</p>
                {completedOrders.map((order) => (
                    <div className={cx('recent-order')} key={order.id}>
                        <h3>Đơn hàng {order.id}</h3>
                        <ul>
                            {order.items.map((item) => (
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
                            <span>{order.totalPrice} ₫</span>
                        </div>
                        <div className={cx('order-details')}>
                            <div className={cx('payment-method')}>
                                <h4>Phương thức thanh toán</h4>
                                <p>{order.paymentMethod}</p>
                            </div>
                            <div className={cx('order-status')}>
                                <h4>Trạng thái đơn hàng</h4>
                                <p>{order.orderStatus}</p>
                            </div>
                        </div>
                        <div className={cx('saved-address')}>
                            <h4>Địa chỉ giao hàng</h4>
                            <p>
                                <strong>Tên:</strong> {order.address.name}
                            </p>
                            <p>
                                <strong>Số điện thoại:</strong> {order.address.phone}
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong> {order.address.address}
                            </p>
                        </div>
                        {/* <div className={cx('order-actions')}>
                            <button onClick={() => handleOrderReceived(order.id)} className={cx('received-button')}>
                                Đã nhận được hàng
                            </button>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
