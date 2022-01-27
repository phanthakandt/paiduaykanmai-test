import React, { useState, useEffect } from 'react';
import ShopCard from './ShopCard';
import PlusCard from './PlusCard';

import { get_shop } from '../services/Services'

export default function Shop() {

    const [data, setData] = useState(null)

    useEffect(async () => {
        try {
            let res = await get_shop()
            if (res.status === 200) {
                setData(res.data)
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className="shop-wrapper">
            <div className="container">
                <div className="row">
                    {data ?
                        <>{data.map((item) => (<ShopCard shop={item} />))}</>
                        : <></>}
                    <PlusCard path={'/create-shop'} />
                </div>
            </div>
        </div>
    )
}
