import React, { useState } from 'react';
import { useNavigate } from "react-router"

import Back from '../components/Back'
import './CreateShop.css'
import './CreateProduct.css'
import snacksImg from '../assets/pic/snacks.png'
import { create_shop } from '../services/Services'

export default function CreateProduct() {

    const nav = useNavigate()

    const [shopOwner, setShopOwner] = useState('')
    const [shopOwnerId, setShopOwnerId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [unit, setUnit] = useState('')

    const [err, setErr] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setErr(0)
            let data = {
                ownerId: shopOwnerId,
                ownerBy: shopOwner,
                name: name,
                description: description,
                cost: cost,
                unit: unit
            }

            // let res = await create_shop(data)
            // if (res.status === 200) {
            //     nav('/', { replace: true })
            // }
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
                                <select name="product-owner" className='select-box-product'>
                                    <option value="">xxx</option>
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
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
