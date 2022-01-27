import React, { useEffect } from 'react';
import shopImg from '../assets/pic/shops.png'
import './Shop.css'


export default function ShopCard(props) {

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href={`/shop/${props.shop._id}`}>
                <div className="card shop-card">
                    <div className='flex-box'>
                        <img src={shopImg} className='img-shop' />
                    </div>
                    <div className="card-content">
                        <p>ชื่อร้าน: {props.shop.name}</p>
                        <p>คำอธิบาย: {props.shop.description}</p>
                        <p>โทรศัพท์: {props.shop.tel}</p>
                        <p>ที่อยู่: {props.shop.addr}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
