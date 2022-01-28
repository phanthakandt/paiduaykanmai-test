import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get_product_by_owner_id, get_shop_by_id, update_shop } from '../services/Services';
import ProductCard from '../components/ProductCard';

import Back from '../components/Back'
import './CreateShop.css'
import shopImg from '../assets/pic/shops.png'

export default function ShopDetail() {

    let { id } = useParams()
    const [products, setProcts] = useState([])

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tel, setTel] = useState('')
    const [addr, setAddr] = useState('')

    const [err, setErr] = useState(0)

    useEffect(async () => {
        try {
            let res = await get_shop_by_id(id)
            if (res.status === 200) {
                setName(res.data[0].name)
                setDescription(res.data[0].description)
                setTel(res.data[0].tel)
                setAddr(res.data[0].addr)
            }
        } catch (err) {
            console.log(err);
        }

        try {
            let res = await get_product_by_owner_id(id)
            if (res.status === 200) {
                setProcts(res.data)
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            id: id,
            data: {
                name: name,
                description: description,
                tel: tel,
                addr: addr
            }
        }

        // console.log(data);
        try {
            setErr(0)
            let res = await update_shop(data)
    
            if (res.status === 200) {
                window.location.reload()
            }
            
        } catch (err) {
            setErr(1)
        }
    }

    return (
        <div>
            <Back />

            <div className="container">
                <div className="flex-box">
                    <div className="card create-shop-card">
                        <h3 className='text-center'>
                            อัพเดทข้อมูล
                        </h3>
                        <div className='flex-box'>
                            <img src={shopImg} className='img-shop' />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    ชื่อร้าน
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    คำอธิบาย
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </label>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    เบอร์ติดต่อ
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="tel"
                                    placeholder={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                />
                            </label>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    ที่อยู่
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder={addr}
                                    onChange={(e) => setAddr(e.target.value)}
                                />
                            </label>
                            <div className="flex-box">
                                <input type="submit" value="อัพเดท" className="btn-submit" />
                            </div>

                            <div className={`err-create ${err ? '' : 'd-none'}`}>
                                <p>Oops! There's error occur while updating the shop, please try again later :(</p>
                            </div>
                        </form>

                    </div>
                </div>

                <div className='row mt-3 mb-5'>
                    <h3 className='my-3'>Products</h3>
                {products.length !== 0 ?
                        <>{products.map((item) => (<ProductCard shop={item} />))}</>
                        : <>This shop has no product yet.</>}
                </div>
            </div>
        </div>
    )
}
