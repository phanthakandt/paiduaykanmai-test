import React from 'react';
import ProductCard from './ProductCard';
import PlusCard from './PlusCard';
import './Products.css'

export default function Products() {

    return (
        <div className="product-wrapper">
            <div className="container">
                <div className="row">
                    <ProductCard shop={{name: 'โค้ก', description: 'สูตรน้ำตาลน้อยกว่า', cost: '25', unit: 'ขวด'}} />
                    <PlusCard path={'/create-products'} />
                </div>
            </div>
        </div>
    )
}
