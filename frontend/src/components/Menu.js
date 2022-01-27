import React from 'react';
import './Menu.css'

export default function Menu() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid pt-3">
                <nav>
                    <div className="nav nav-tabs bottom-color-tab" id="nav-tab" role="tablist">
                        <button className="nav-link tabs-custom active" id="nav-shop-tab" data-bs-toggle="tab" data-bs-target="#nav-shop" type="button" role="tab" aria-controls="nav-shop" aria-selected="true">ร้านค้า</button>
                        <button className="nav-link tabs-custom" id="nav-products-tab" data-bs-toggle="tab" data-bs-target="#nav-products" type="button" role="tab" aria-controls="nav-products" aria-selected="false">สินค้า</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
