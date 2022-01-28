import React from 'react';
import Home from '../views/Home'
import CreateShop from '../views/CreateShop';
import ShopDetail from '../views/ShopDetail';
import CreateProduct from '../views/CreateProduct';
import ProductDetail from '../views/ProductDetail'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

export default function Web() {
    return (
        <Router>
            <Routes>
                <Route path='/shop/:id' element={<ShopDetail />} />
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/create-shop' element={<CreateShop />} />
                <Route path='/create-products' element={<CreateProduct />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}
