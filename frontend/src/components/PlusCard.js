import React from 'react';
import plusImg from '../assets/pic/plus.png'

export default function PlusCard(props) {
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href={props.path}>
                <div className="card shop-card flex-box">
                    <img src={plusImg} className='img-shop' />
                </div>
            </a>
        </div>
    )
}
