import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-section')}>
                    <p className={cx('footer-mission')}>
                        “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ
                        mệnh, là triết lý, là chiến lược.. luôn cùng SALE tiến bước
                    </p>
                    <div className={cx('social-icons')}>
                        <a href="https://www.facebook.com">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.youtube.com">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://zalo.me">
                            <i className="fab fa-zalo"></i>
                        </a>
                        <a href="https://shopee.vn">
                            <i className="fab fa-shopify"></i>
                        </a>
                        <a href="https://www.lazada.vn">
                            <i className="fab fa-lazada"></i>
                        </a>
                        <a href="https://www.sendo.vn">
                            <i className="fab fa-sendo"></i>
                        </a>
                        <a href="https://tiki.vn">
                            <i className="fab fa-tiki"></i>
                        </a>
                    </div>
                </div>
                <div className={cx('footer-section')}>
                    <h4>VỀ SALE</h4>
                    <ul>
                        <li>
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#">Liên hệ</a>
                        </li>
                        <li>
                            <a href="#">Tuyển dụng</a>
                        </li>
                        <li>
                            <a href="#">Tin tức</a>
                        </li>
                        <li>
                            <a href="#">Hệ thống cửa hàng</a>
                        </li>
                        <li>
                            <a href="#">Hàng mới về</a>
                        </li>
                        <li>
                            <a href="#">Hàng Outlet</a>
                        </li>
                        <li>
                            <a href="#">Tin khuyến mãi</a>
                        </li>
                        <li>
                            <a href="#">Đăng ký đối tác</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-section')}>
                    <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                    <ul>
                        <li>
                            <a href="#">Hướng dẫn Chọn size</a>
                        </li>
                        <li>
                            <a href="#">Chính sách Khách hàng thân thiết</a>
                        </li>
                        <li>
                            <a href="#">Chính sách Bảo hành, đổi/trả</a>
                        </li>
                        <li>
                            <a href="#">Chính sách Thanh toán, giao nhận</a>
                        </li>
                        <li>
                            <a href="#">Chính sách Đồng phục</a>
                        </li>
                        <li>
                            <a href="#">Chính sách Bảo mật thông tin khách hàng</a>
                        </li>
                        <li>
                            <a href="#">Chính sách Sử dụng Cookies</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-section')}>
                    <h4>CÔNG TY CP THỜI TRANG SALE</h4>
                    <address>
                        Công ty cổ phần Thời trang SALE
                        <br />
                        Mã số thuế: 0801206940
                        <br />
                        Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương - Hải Dương
                        <br />
                        <a href="#">Tìm cửa hàng gần bạn nhất</a>
                    </address>
                    <p>Liên hệ đặt hàng: 024 999 86 999</p>
                    <p>Thắc mắc đơn hàng: 024 999 86 999</p>
                    <p>Góp ý khiếu nại: 1800 2086</p>
                    <p>
                        Email: <a href="mailto:chamsockhachhang@sale.vn">chamsockhachhang@sale.vn</a>
                    </p>
                    {/* <div className="certifications">
                <img src="path_to_cert_image_1" alt="Certification 1" />
                <img src="path_to_cert_image_2" alt="Certification 2" />
              </div> */}
                </div>
            </div>
            <div className={cx('footer-bottom')}>© SALE - Bản quyền thuộc về Công ty cổ phần thời trang SALE</div>
        </footer>
    );
}

export default Footer;
