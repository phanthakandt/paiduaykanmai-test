import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router"

import Back from '../components/Back'
import './CreateShop.css'
import './CreateProduct.css'
import snacksImg from '../assets/pic/snacks.png'
import { get_shop,create_product } from '../services/Services'

export default function CreateProduct() {

    const nav = useNavigate()

    const [shop, setShop] = useState([])

    const [shopOwnerId, setShopOwnerId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [unit, setUnit] = useState('')

    const [err, setErr] = useState(0)
    const [errShop, setErrShop] = useState(0)

    useEffect(async () => {
        try {
            let res = await get_shop()
            if (res.status === 200) {
                console.log(res);
                setShop(res.data)
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (shopOwnerId === '') {
            setErrShop(1)
            return
        }

        try {
            setErr(0)
            setErrShop(0)
            let data = {
                ownerId: shopOwnerId,
                name: name,
                description: description,
                cost: cost,
                unit: unit
            }

            console.log(data);

            let res = await create_product(data)
            if (res.status === 200) {
                nav('/', { replace: true })
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
                            เพิ่มสินค้า
                        </h3>
                        <div className='flex-box'>
                            <img src={snacksImg} className='img-shop' />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex-box">
                                <select name="product-owner" className='select-box-product' onChange={(e) => setShopOwnerId(e.target.value)}>
                                    <option value="" selected disabled>โปรดเลือกร้านค้า</option>
                                    {shop.length !== 0 ? (
                                        <>
                                            {shop.map((item) => (
                                                <option value={item._id}>{item.name}</option>
                                            ))}
                                        </>
                                    ) : <></>}
                                </select>

                            </div>

                            <label className='label-inline'>
                                <div className="head-label-100">
                                    ชื่อสินค้า
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </label>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    รายละเอียดสินค้า
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </label>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    ราคา
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="tel"
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)}
                                    required
                                />
                            </label>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    หน่วย
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                    required
                                />
                            </label>
                            <div className="flex-box">
                                <input type="submit" value="สร้าง" className="btn-submit" />
                            </div>

                            <div className={`err-create ${err ? "" : "d-none"}`}>
                                <p>Oops! There's error occur while creating the shop, please try again later :(</p>
                            </div>
                            <div className={`err-create ${errShop ? "" : "d-none"}`}>
                                <p>Oops! There's no shop, please create shop and try again later :(</p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
