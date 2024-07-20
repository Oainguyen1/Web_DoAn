import classNames from 'classnames/bind';
import styles from './Ao.module.scss';
import Ao from '~/assets/Boy/Boy.jpg';
import Ao1 from '~/assets/Girl/Girl1.png';
import Ao2 from '~/assets/Boy/Boy2.jpg';
import Ao3 from '~/assets/Children/Children.png';
import Ao4 from '~/assets/Boy/Boy4.jpg';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Ao,
        title: 'Áo Polo Nam In Họa Tiết Ngôi Sao',
        url: '/Product-detail',
        price: '350,000 VND',
        // previousPrices: '140,000VND',
    },
    { 
        src: Ao1, 
        title: 'Áo Sơ Mi Tay Dài Nữ Cố 2 Ve Túi Ngực', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Ao2, 
        title: 'Polo Thể Thao Nam Phối Lé Nổi Bật', 
        url: '/Product-detail', 
        price: '299,000 VND', 
        // previousPrices: '140,000VND' 
    },
    { 
        src: Ao3, 
        title: 'Áo Polo Trẻ Em Coolmax Siêu Mát Phối Bo', 
        url: '/Product-detail', 
        price: '258,000 VND', 
        previousPrices: '369,000VND' 
    },
    { 
        src: Ao4, 
        title: 'Áo Phông Nam Let Nature Lead', 
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
                <h1>Áo</h1>
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