import React, { useState } from 'react';
import '../../style/color.css';
import '../../style/image.css';
import '../../style/other.css';

export const Logo = () => {

    const [glow, setGlow] = useState(false);
    const logoClass = `ebwc-icon ${glow ? 'icon-glow' : ''}`

    return (
        <div
            className='text-left col-9 col-sm-6 pl-4'
            onMouseEnter={() => setGlow(true)}
            onMouseLeave={() => setGlow(false)} >
            <h3>
                <a href="index.html" className='text-gray text-link'>
                    <img src={require("../../images/ebwc_weblogo.png")} alt="EBWC_Logo" className={logoClass} />
                    <span className='pl-1'>EBWC Games</span>
                </a>
            </h3>
        </div >
    );
}
