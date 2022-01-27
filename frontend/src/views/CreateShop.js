import React, { useState } from 'react';
import { useNavigate } from "react-router"

import Back from '../components/Back'
import './CreateShop.css'
import shopImg from '../assets/pic/shops.png'
import { create_shop } from '../services/Services'

export default function CreateShop() {

    const nav = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tel, setTel] = useState('')
    const [addr, setAddr] = useState('')

    const [err, setErr] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setErr(0)
            let data = {
                name: name,
                description: description,
                tel: tel,
                addr: addr
            }

            let res = await create_shop(data)
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
                            สร้างร้านค้า
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoFocus
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
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
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    required
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
                                    value={addr}
                                    onChange={(e) => setAddr(e.target.value)}
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
