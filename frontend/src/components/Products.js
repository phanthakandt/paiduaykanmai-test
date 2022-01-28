import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import PlusCard from './PlusCard';
import './Products.css'

import { get_product } from '../services/Services';

export default function Products() {

    const [data, setData] = useState(null)

    useEffect(async () => {
        try {
            let res = await get_product()
            if (res.status === 200) {
                setData(res.data)
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className="product-wrapper">
            <div className="container">
                <div className="row">
                    {/* <ProductCard shop={{name: 'โค้ก', description: 'สูตรน้ำตาลน้อยกว่า', cost: '25', unit: 'ขวด'}} /> */}
                    {data ?
                        <>{data.map((item) => (<ProductCard shop={item} />))}</>
                        : <></>}
                    <PlusCard path={'/create-products'} />
                </div>
            </div>
        </div>
    )
}
