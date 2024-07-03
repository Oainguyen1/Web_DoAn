import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-container')}>
                <h1 className={cx('title')}>Đăng nhập</h1>
                <form className={cx('form')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="username" className={cx('label')}>
                            Email
                        </label>
                        <input type="text" id="username" className={cx('input')} placeholder="Email" />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password" className={cx('label')}>
                            Mật khẩu
                        </label>
                        <input type="password" id="password" className={cx('input')} placeholder="Mật khẩu" />
                    </div>
                    <button type="submit" className={cx('buttony')}>
                        Đăng nhập
                    </button>
                    <div className={cx('extra-options')}>
                        <a href="#" className={cx('forgot-password')}>
                            Quên mật khẩu?
                        </a>
                    </div>
                </form>
                <div className={cx('signup-prompt')}>
                    <span>Bạn chưa có tài khoản?</span>
                    <a href="./signin" className={cx('signup-link')}>
                        Đăng ký ngay!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
