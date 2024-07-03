import classNames from 'classnames/bind';
import styles from './Boy.module.scss';
import Boy from '~/assets/Boy/Boy.jpg';
import Boy1 from '~/assets/Boy/Boy1.jpg';
import Boy2 from '~/assets/Boy/Boy2.jpg';
import Boy3 from '~/assets/Boy/Boy3.jpg';
import Boy4 from '~/assets/Boy/Boy4.jpg';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Boy,
        title: 'Áo Polo Nam In Họa Tiết Ngôi Sao',
        url: '/ao',
        price: '350,000 VND',
        // previousPrices: '140,000VND',
    },
    { 
        src: Boy1, 
        title: 'Áo Polo Thể Thao Nam In Vai Phản Quang', 
        url: '/ao2', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Boy2, 
        title: 'Polo Thể Thao Nam Phối Lé Nổi Bật', 
        url: '/ao3', 
        price: '299,000 VND', 
        // previousPrices: '140,000VND' 
    },
    { 
        src: Boy3, 
        title: 'Áo Polo Nam Mắt Chim Phối Vai Hoạ Tiết Monogram', 
        url: '/ao4', 
        price: '258,000 VND', 
        previousPrices: '369,000VND' 
    },
    { 
        src: Boy4, 
        title: 'Áo Phông Nam Let Nature Lead', 
        url: '/ao2', 
        price: '199,000 VND', 
        previousPrices: '250,000VND' 
    },
];

function SaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h1>Thời Trang Nam</h1>
                </div>
                <div className={cx('title-block')}>
                    <h1>Đề Xuất Dành Cho Bạn</h1>
                </div>
                <div className={cx('image-container')}>
                    <div className={cx('images-produce')}>
                        {produceData.map((item, index) => (
                            <div key={index} className={cx('produce-item')}>
                                <img src={item.src} alt={`Produce ${index + 1}`} />
                                <a href={item.url}>
                                    <h3>{item.title}</h3>
                                </a>
                                <div className={cx('price-container')}>
                                    <span className={cx('discounted-price')}>{item.price}</span>
                                    <span className={cx('original-price')}>{item.previousPrices}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('images-produce')}>
                        {produceData.map((item, index) => (
                            <div key={index} className={cx('produce-item')}>
                                <img src={item.src} alt={`Produce ${index + 1}`} />
                                <a href={item.url}>
                                    <h3>{item.title}</h3>
                                </a>
                                <div className={cx('price-container')}>
                                    <span className={cx('discounted-price')}>{item.price}</span>
                                    <span className={cx('original-price')}>{item.previousPrices}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleUp;
