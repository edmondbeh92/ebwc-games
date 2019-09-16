import React, { useState, useContext } from 'react';
import { SidebarContext } from './Header';
import { Link } from 'react-router-dom';
import '../../style/color.css';
import '../../style/image.css';
import '../../style/other.css';

export const Logo = () => {

    const [glow, setGlow] = useState(false);
    const { isOpen, toggleOpen } = useContext(SidebarContext);
    const logoClass = `ebwc-icon ${glow ? 'icon-glow' : ''}`

    return (
        <div
            className='text-left col-9 col-sm-6 pl-4'
            onMouseEnter={() => setGlow(true)}
            onMouseLeave={() => setGlow(false)}
            onClick={isOpen ? toggleOpen : null} >
            <h3>
                <Link to="/" className='text-gray text-link'>
                    <img src={require("../../images/ebwc_weblogo.png")} alt="EBWC_Icon" className={logoClass} />
                    <span className='pl-1'>EBWC</span>
                </Link>
            </h3>
        </div >
    );
}
