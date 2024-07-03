import classNames from 'classnames/bind';
import styles from './Children.module.scss';
import Children from '~/assets/Children/Children.png';
import Children1 from '~/assets/Children/Children1.png';
import Children2 from '~/assets/Children/Children2.png';
import Children3 from '~/assets/Children/Children3.png';
import Children4 from '~/assets/Children/Children4.png';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Children,
        title: 'Áo Polo Trẻ Em Coolmax Siêu Mát Phối Bo',
        url: '/ao',
        price: '169,000 VND',
        previousPrices: '199,000VND',
    },
    { 
        src: Children1, 
        title: 'Polo Trẻ Em Họa Tiết In Tràn', 
        url: '/ao2', 
        price: '199,000 VND', 
        // previousPrices: '200,000VND' 
    },
    { 
        src: Children2, 
        title: 'Sơ Mi Trẻ Em Phối Mũ Nỉ', 
        url: '/ao3', 
        price: '199,000 VND', 
        // previousPrices: '220,000VND' 
    },
    { 
        src: Children3, 
        title: 'Áo Sơ Mi Trẻ Em In Hình Tay Liền', 
        url: '/ao4', 
        price: '99,000 VND', 
        previousPrices: '179,000VND' 
    },
    { 
        src: Children4, 
        title: 'Quần Dài Trẻ Em Kaki Túi Sườn', 
        url: '/ao2', 
        price: '299,000 VND', 
        // previousPrices: '320,000VND' 
    },
];

function SaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h1>Thời Trang Trẻ em</h1>
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
