import React, { useState } from 'react';
import '../../style/color.css';
import '../../style/image.css';
import '../../style/other.css';

export const Logo = () => {

    const addGlowClass = e => e.target.querySelector('img').classList.add('icon-glow');
    const removeGlowClass = e => e.target.querySelector('img').classList.remove('icon-glow');

    return (
        <div className='text-left col-9 col-sm-6 pl-4' onMouseEnter={addGlowClass} onMouseLeave={removeGlowClass}>
            <h3>
                <a href="index.html" className='text-gray text-link'>
                    <img src={require("../../images/ebwc_weblogo.png")} alt="EBWC_Logo" className='ebwc-icon' />
                    <span className='pl-1'>EBWC Games</span>
                </a>
            </h3>
        </div>
    );
}
