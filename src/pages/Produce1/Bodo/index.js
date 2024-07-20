import classNames from 'classnames/bind';
import styles from './Bodo.module.scss';
import Boy from '~/assets/Children/bd.webp';
import Boy1 from '~/assets/Children/bd1.webp';
import Boy2 from '~/assets/Children/bd2.webp';
import Boy3 from '~/assets/Children/bd3.webp';
import Boy4 from '~/assets/Children/bd4.webp';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Boy,
        title: 'Bộ Đồ Thu Đông Kid Cổ Bo Tim',
        url: '/Product-detail',
        price: '350,000 VND',
        // previousPrices: '140,000VND',
    },
    { 
        src: Boy1, 
        title: 'Bộ Đồ Trẻ Em In Faster', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Boy2, 
        title: 'Bộ Đồ Thu Đông Mác Kid', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        // previousPrices: '140,000VND' 
    },
    { 
        src: Boy3, 
        title: 'Bộ Đồ Trẻ Em Cổ Tròn', 
        url: '/Product-detail', 
        price: '258,000 VND', 
        previousPrices: '369,000VND' 
    },
    { 
        src: Boy4, 
        title: 'Bộ Đông Nữ Phối Áo Kẻ', 
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
                    <h1>Bộ đồ</h1>
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
