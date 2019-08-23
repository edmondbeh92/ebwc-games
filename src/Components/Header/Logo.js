import React, { useState } from 'react';
import '../../style/color.css';
import '../../style/image.css';
import '../../style/other.css';

export const Logo = () => {

    const addGlowClass = e => {
        const icon = document.getElementById('home-button');
        icon.classList.add('icon-glow');
        console.log('on');
    }

    const removeGlowClass = e => {
        const icon = document.getElementById('home-button');
        icon.classList.remove('icon-glow');
    }

    return (
        <div class='text-left col-9 col-sm-6 pl-4' onMouseEnter={addGlowClass} onMouseLeave={removeGlowClass}>
            <h3>
                <a href="index.html" class='text-gray text-link'>
                    <img src={require("../../images/ebwc_weblogo.png")} alt="EBWC_Logo" class='ebwc-icon' id='home-button' />
                    <span class='pl-1'>EBWC Games</span>
                </a>
            </h3>
        </div>
    );
}
