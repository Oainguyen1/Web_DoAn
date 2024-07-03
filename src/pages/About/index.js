import classNames from 'classnames/bind';
import styles from './About.module.scss';
import about4 from '~/assets/About/about4.png';
import about5 from '~/assets/About/about5.png';
import about6 from '~/assets/About/about6.png';

// https://yody.vn/page/gioi-thieu


// const images = [
//     { src: about, url: './' },
//     { src: about2, url: './' },
//     { src: about3, url: './' },
// ];

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>Giới thiệu</h1>
                <img src={about4} alt="Main Product" className={cx('main-image')} />
                <h3>Bắt đầu từ thương hiệu thời trang Hi5 ra đời trong năm 2009, trải qua chặng đường phát triển đầy khó khăn, Hi5 được đổi tên thành Yody vào năm 2014 với ước mơ gây dựng một thương hiệu thời trang hàng đầu thế giới.</h3>
                <p>Từ đó trở đi Yody lớn mạnh không ngừng, đến năm 2016 Yody đã có 38 cửa hàng, chỉ sau 2 năm vào năm 2018 Yody đã có 73 cửa hàng. Đến năm 2019 Yody đã có 82 cửa hàng và tính đến thời điểm hiện tại Yody đã mở rộng được hơn 260 cửa hàng trên toàn quốc.</p>
                <img src={about5} alt="Main Product" className={cx('main-image')} />
                <h1>SỨ MỆNH CỦA YODY</h1>
                <p>Make everyone look good, feel good</p>
                <h1>TẦM NHÌN CỦA YODY</h1>
                <p>Everyday wear for everyone</p>
                <h1>NIỀM TIN CỦA YODY</h1>
                <ul>
                    <li>Tất cả các khoản chi đều là chi phí, chỉ có chi cho khách hàng và nhân viên là không phí.</li>
                    <li>Tất cả những thành viên của Yody đều đang nỗ lực hết sức và có năng lực để thực hiện mục tiêu chung.</li>
                    <li>Mỗi thành viên Yody đều có thể thay đổi khi được trao niềm tin, ghi nhận, hướng dẫn và đào tạo.</li>
                </ul>
                <img src={about6} alt="Main Product" className={cx('main-image')} />
                <p>Yody mong muốn mang đến cho toàn bộ khách hàng trên khắp mọi miền tổ quốc Việt Nam những sản phẩm thời trang do chính tay người Việt làm ra. Không phân biệt tầng lớp, không phân biệt giàu nghèo, những khách hàng chưa bao giờ được trải nghiệm dịch vụ mua sắm vượt ngoài mong đợi, ai cũng sẽ được chào đón, tôn trọng khi đến với Yody. </p>

            </div>
        </div>
    );
}

export default About;
