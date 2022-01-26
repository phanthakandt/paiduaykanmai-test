import React from 'react';
import './Menu.css'

export default function Menu() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid pt-3">
                <nav>
                    <div className="nav nav-tabs bottom-color-tab" id="nav-tab" role="tablist">
                        <button className="nav-link tabs-custom active" id="nav-shop-tab" data-bs-toggle="tab" data-bs-target="#nav-shop-tab" type="button" role="tab" aria-controls="nav-shop-tab" aria-selected="true">Shop</button>
                        <button className="nav-link tabs-custom" id="nav-categories-tab" data-bs-toggle="tab" data-bs-target="#nav-categories-tab" type="button" role="tab" aria-controls="nav-categories-tab" aria-selected="false">Categories</button>
                        <button className="nav-link tabs-custom" id="nav-products-tab" data-bs-toggle="tab" data-bs-target="#nav-products-tab" type="button" role="tab" aria-controls="nav-products-tab" aria-selected="false">Products</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
