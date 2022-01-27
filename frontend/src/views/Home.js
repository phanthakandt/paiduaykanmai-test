import React from 'react';
import Menu from '../components/Menu'
import Shop from '../components/Shop'
import Products from '../components/Products'

export default function Home() {
    return (
        <div>
            <Menu />
            <div className="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab">
                    <Shop />
                </div>
                <div class="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab">
                    <Products />
                </div>
            </div>
        </div>
    )
}
