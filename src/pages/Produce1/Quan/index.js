import classNames from 'classnames/bind';
import styles from './Quan.module.scss';
import Boy from '~/assets/Children/Children4.png';
import Boy1 from '~/assets/Girl/Girl4.png';
import Boy2 from '~/assets/Girl/quan1.jpg';
import Boy3 from '~/assets/Girl/quan3.webp';
import Boy4 from '~/assets/Girl/quan2.webp';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Boy,
        title: 'Quần Dài Trẻ Em Kaki Túi Sườn',
        url: '/Product-detail',
        price: '350,000 VND',
        // previousPrices: '140,000VND',
    },
    { 
        src: Boy1, 
        title: 'Quần Âu Nữ Dáng Baggy Ly Súp 2 Cúc', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Boy2, 
        title: 'Quần Jeans Nữ Dáng Suông Cotton Trơn', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        // previousPrices: '140,000VND' 
    },
    { 
        src: Boy3, 
        title: 'Quần Jeans Nữ Ống Đứng Cao Cạp 2 Cúc', 
        url: '/Product-detail', 
        price: '258,000 VND', 
        previousPrices: '369,000VND' 
    },
    { 
        src: Boy4, 
        title: 'Quần Jeans Nữ Skinny Co Giãn 4 Chiều', 
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
                    <h1>Quần</h1>
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
