import classNames from 'classnames/bind';
import styles from './Phukien.module.scss';
import Boy from '~/assets/Boy/pk.webp';
import Boy1 from '~/assets/Boy/pk1.webp';
import Boy2 from '~/assets/Boy/pk2.webp';
import Boy3 from '~/assets/Boy/pk3.webp';
import Boy4 from '~/assets/Boy/pk4.webp';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Boy,
        title: 'Mũ Lưỡi Trai Phối Màu Thêu Chữ P',
        url: '/Product-detail',
        price: '350,000 VND',
        // previousPrices: '140,000VND',
    },
    { 
        src: Boy1, 
        title: 'Mặt Khóa Cài Thắt Lưng Nam Xoay 2 Chiều', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Boy2, 
        title: 'Túi Unisex Đeo Chéo Nắp Nam Châm', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        // previousPrices: '140,000VND' 
    },
    { 
        src: Boy3, 
        title: 'Thắt Lưng Nam Mặt Khoá Tự Động', 
        url: '/Product-detail', 
        price: '258,000 VND', 
        previousPrices: '369,000VND' 
    },
    { 
        src: Boy4, 
        title: 'Túi Unisex Đeo Chéo', 
        url: '/Product-detail', 
        price: '199,000 VND', 
        previousPrices: '250,000VND' 
    },
];

function SaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h1>Phụ kiện</h1>
                </div>
                <div className={cx('title-block')}>
                    
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
