import React from 'react';
import './Menu.css'

export default function Menu() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid pt-3">
                <nav>
                    <div className="nav nav-tabs bottom-color-tab" id="nav-tab" role="tablist">
                        <a href="/">
                            <button className="nav-link tabs-custom active" >กลับ</button>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
