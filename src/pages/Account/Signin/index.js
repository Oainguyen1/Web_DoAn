import classNames from 'classnames/bind';
import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function Signin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('signin-container')}>
                <h1 className={cx('title')}>Đăng ký</h1>
                <form className={cx('form')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="username" className={cx('label')}>
                            Họ và tên
                        </label>
                        <input type="text" id="username" className={cx('input')} placeholder="Họ và tên" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="email" className={cx('label')}>
                            Số điện thoại
                        </label>
                        <input type="email" id="email" className={cx('input')} placeholder="Số điện thoại" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password" className={cx('label')}>
                            Địa chỉ Email
                        </label>
                        <input type="password" id="password" className={cx('input')} placeholder="Email" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="confirm-password" className={cx('label')}>
                            Mật khẩu
                        </label>
                        <input type="password" id="confirm-password" className={cx('input')} placeholder="Mật khẩu" />
                    </div>
                    <button type="submit" className={cx('button')}>
                        Đăng ký
                    </button>
                </form>
                <div className={cx('signin-prompt')}>
                    <span>Đã có tài khoản?</span>
                    <a href="./login" className={cx('signin-link')}>
                        Đăng nhập ngay!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Signin;
