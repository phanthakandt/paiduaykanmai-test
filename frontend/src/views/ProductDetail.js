import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get_product_by_id, update_product, delete_product } from '../services/Services';

import Back from '../components/Back'
import './CreateShop.css'
import snackImg from '../assets/pic/snacks.png'

export default function ShopDetail() {

    let { id } = useParams()
    const nav = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [unit, setUnit] = useState('')

    const [err, setErr] = useState(0)

    useEffect(async () => {
        try {
            let res = await get_product_by_id(id)
            if (res.status === 200) {
                setName(res.data[0].name)
                setDescription(res.data[0].description)
                setCost(res.data[0].cost)
                setUnit(res.data[0].unit)
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
                cost: cost,
                unit: unit
            }
        }

        try {
            setErr(0)
            let res = await update_product(data)

            if (res.status === 200) {
                window.location.reload()
            }

        } catch (err) {
            setErr(1)
        }

    }

    const del = async (e) => {
        console.log('delete this');
        try {
            let res = await delete_product(id)
            // console.log(res); 
            if (res.status === 200) {
                nav('/')
            }

        } catch (err) {

        }
    }

    return (
        <div>
            <Back />

            <div className="container">
                <div className="flex-box">
                    <div className="card create-shop-card">
                        <h3 className='text-center'>
                            อัพเดทข้อมูลสินค้า
                        </h3>
                        <div className='flex-box'>
                            <img src={snackImg} className='img-shop' />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    ชื่อสินค้า
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
                                    ราคา
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="tel"
                                    placeholder={cost}
                                    onChange={(e) => setCost(e.target.value)}
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
                                    placeholder={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                />
                            </label>
                            <div className="flex-box">
                                <input type="submit" value="อัพเดท" className="btn-submit" />
                                <input type="button" value="ลบสินค้า" className="btn-del" onClick={del} />
                            </div>
                            {/* <div className="flex-box"> */}
                            {/* </div> */}

                            <div className={`err-create ${err ? '' : 'd-none'}`}>
                                <p>Oops! There's error occur while updating the product, please try again later :(</p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
