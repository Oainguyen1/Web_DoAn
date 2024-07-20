import classNames from 'classnames/bind';
import styles from './SaleUp.module.scss';
import saleIcon from '~/assets/Logo/sale_icon.png';
import banner from '~/assets/Banner/flash_sale_banner.png';
import Produce from '~/assets/SaleProduce/produce.png';
import Produce1 from '~/assets/SaleProduce/produce1.png';
import Produce2 from '~/assets/SaleProduce/produce2.png';
import Produce3 from '~/assets/SaleProduce/produce3.png';
import Produce4 from '~/assets/SaleProduce/produce4.png';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Produce,
        title: 'Áo chống nắng đa năng Anti UV - Versatile',
        url: '/ao',
        price: '139,000 VND',
        previousPrices: '220,000VND',
    },
    { 
        src: Produce1, 
        title: 'Áo Polo Thể Thao Nam In Vai Phản Quang', 
        url: '/ao2', 
        price: '299,000 VND', 
        previousPrices: '350,000VND' 
    },
    { 
        src: Produce2, 
        title: 'Áo Chống Nắng Nam Có Mũ', 
        url: '/ao3', 
        price: '139,000 VND', 
        previousPrices: '220,000VND' 
    },
    { 
        src: Produce3, 
        title: 'Sơ Mi Tay Dài Nam Knit', 
        url: '/ao4', 
        price: '299,000 VND', 
        previousPrices: '390,000VND' 
    },
    { 
        src: Produce4, 
        title: 'Polo Nam Cafe Dệt Tổ Ong Mickey In Ngực', 
        url: '/ao2', 
        price: '249,000 VND', 
        previousPrices: '320,000VND' 
    },
];

function SaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <img src={saleIcon} alt="" />
                    <h1>Sale Up 30%</h1>
                </div>
                <div className={cx('banner')}>
                    <img src={banner} alt="" />
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
