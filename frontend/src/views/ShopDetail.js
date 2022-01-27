import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get_shop_by_id } from '../services/Services';

import Back from '../components/Back'
import './CreateShop.css'
import shopImg from '../assets/pic/shops.png'

export default function ShopDetail() {

    let { id } = useParams()
    const [data, setData] = useState({})

    useEffect(async () => {
        try {
            let res = await get_shop_by_id(id)
            if (res.status === 200) {
                setData(res.data[0])
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

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
                        <form>
                            <label className='label-inline'>
                                <div className="head-label-100">
                                    ชื่อร้าน
                                    <req></req>:
                                </div>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder={data.name ? data.name : '-'}
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                    // required
                                    // autoFocus
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
                                    placeholder={data.description ? data.description : '-'}

                                    // value={description}
                                    // onChange={(e) => setDescription(e.target.value)}
                                    // required
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
                                    placeholder={data.tel ? data.tel : '-'}
                                    // value={tel}
                                    // onChange={(e) => setTel(e.target.value)}
                                    // required
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
                                    placeholder={data.addr ? data.addr : '-'}
                                    // value={addr}
                                    // onChange={(e) => setAddr(e.target.value)}
                                    // required
                                />
                            </label>
                            <div className="flex-box">
                                <input type="submit" value="อัพเดท" className="btn-submit" />
                            </div>

                            {/* <div className={`err-create ${err ? "" : "d-none"}`}>
                                <p>Oops! There's error occur while creating the shop, please try again later :(</p>
                            </div> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
