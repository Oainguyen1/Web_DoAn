import classNames from 'classnames/bind';
import styles from './Girl.module.scss';
import Girl from '~/assets/Girl/Girl.png';
import Girl1 from '~/assets/Girl/Girl1.png';
import Girl2 from '~/assets/Girl/Girl2.png';
import Girl3 from '~/assets/Girl/Girl3.png';
import Girl4 from '~/assets/Girl/Girl4.png';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Girl,
        title: 'Áo Sơ Mi Nữ Tay Dài Lụa Satin Mềm Mịn',
        url: '/ao',
        price: '99,000 VND',
        previousPrices: '199,000VND',
    },
    { 
        src: Girl1, 
        title: 'Áo Sơ Mi Tay Dài Nữ Cố 2 Ve Túi Ngực', 
        url: '/ao2', 
        price: '250,000 VND', 
        // previousPrices: '200,000VND' 
    },
    { 
        src: Girl2, 
        title: 'T-shirt Nữ Slimfit Thun Rib Cotton Mềm', 
        url: '/ao3', 
        price: '99,000 VND', 
        // previousPrices: '220,000VND' 
    },
    { 
        src: Girl3, 
        title: 'T-shirt Nữ Croptop In Chữ', 
        url: '/ao4', 
        price: '99,000 VND', 
        previousPrices: '199,000VND' 
    },
    { 
        src: Girl4, 
        title: 'Quần Âu Nữ Dáng Baggy Ly Súp 2 Cúc', 
        url: '/ao2', 
        price: '499,000 VND', 
        // previousPrices: '320,000VND' 
    },
];

function SaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h1>Thời Trang Nữ</h1>
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
