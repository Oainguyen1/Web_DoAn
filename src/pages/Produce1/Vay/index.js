import classNames from 'classnames/bind';
import styles from './Vay.module.scss';
import Boy from '~/assets/Girl/vay.webp';
import Boy1 from '~/assets/Girl/vay2.webp';
import Boy2 from '~/assets/Girl/vay3.webp';
import Boy3 from '~/assets/Girl/vay4.webp';
import Boy4 from '~/assets/Girl/vay5.webp';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Boy,
        title: 'Chân Váy Nữ Đuôi Cá Đai Bọc',
        url: '/Product-detail',
        price: '350,000 VND',
        // previousPrices: '140,000VND',
    },
    { 
        src: Boy1, 
        title: 'Chân Váy Chữ A Dáng Dài Qua Gối', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Boy2, 
        title: 'Chân Váy Nữ Tennis Kẻ', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        // previousPrices: '140,000VND' 
    },
    { 
        src: Boy3, 
        title: 'Chân Váy Nữ Đứng Xẻ Trước', 
        url: '/Product-detail', 
        price: '258,000 VND', 
        previousPrices: '369,000VND' 
    },
    { 
        src: Boy4, 
        title: 'Chân Váy Nữ Da Trùng Đầu Gối', 
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
                    <h1>Váy</h1>
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
