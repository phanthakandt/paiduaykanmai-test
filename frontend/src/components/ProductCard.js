import React from 'react';
import snacksImg from '../assets/pic/snacks.png'
import './Shop.css'


export default function ProductCard(props) {
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href={`/product/${props.shop._id}`}>
                <div className="card shop-card">
                    <div className='flex-box'>
                        <img src={snacksImg} className='img-shop' />
                    </div>
                    <div className="card-content">
                        <p>ชื่อสินค้า: {props.shop.name}</p>
                        <p>คำอธิบาย: {props.shop.description}</p>
                        <p>ราคา: {`${props.shop.cost} บาท`}</p>
                        <p>หน่วย: {props.shop.unit}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
