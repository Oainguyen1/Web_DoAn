import Home from '~/pages/Home';
import Boy from '~/pages/Produce/Boy';
import Girl from '~/pages/Produce/Girl';
import Children from '~/pages/Produce/Children';
import Cart from '~/pages/Cart';
import Login from '~/pages/Account/Login';
import Signin from '~/pages/Account/Signin';
import About from '~/pages/About';
import SaleUp from '~/pages/Produce/SaleUp';
import Product_detail from '~/pages/Product_detail';
import Checkout from '~/pages/Order/Checkout';
import Ao from '~/pages/Produce1/Ao';
import Bodo from '~/pages/Produce1/Bodo';
import Phukien from '~/pages/Produce1/Phukien';
import Quan from '~/pages/Produce1/Quan';
import Vay from '~/pages/Produce1/Vay';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/boy', component: Boy },
    { path: '/girl', component: Girl },
    { path: '/children', component: Children },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/signin', component: Signin },
    { path: '/about', component: About },
    { path: '/saleup', component: SaleUp },
    { path: '/product-detail/:id', component: Product_detail },
    { path: '/checkout', component: Checkout },
    { path: '/ao', component: Ao },
    { path: '/bodo', component: Bodo },
    { path: '/phukien', component: Phukien },
    { path: '/quan', component: Quan },
    { path: '/vay', component: Vay },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
