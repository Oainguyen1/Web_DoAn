import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import icon from '~/assets/Logo/blank_cart.png';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <img src={icon} alt="" />
                    <p>Giỏ hàng của bạn đang trống</p>
                </div>
                <div className={cx('button-container')}>
                    <a href="./login">Đăng nhập/Đăng Ký</a>
                </div>
            </div>
        </div>
    );
}

export default Cart;
