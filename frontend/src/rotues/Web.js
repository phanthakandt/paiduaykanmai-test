import React from 'react';
import Home from '../views/Home'
import CreateShop from '../views/CreateShop';
import ShopDetail from '../views/ShopDetail'

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
                <Route path='/create-shop' element={<CreateShop />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}
