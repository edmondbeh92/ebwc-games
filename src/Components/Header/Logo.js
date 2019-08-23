import React from 'react';
import '../../style/color.css';
import '../../style/image.css';
import '../../style/other.css';

export const Logo = () => (
    <div class='text-left col-9 col-sm-6 pl-4'>
        <h3>
            <a href="index.html" class='text-gray text-link' id='home-button'>
                <img src={require("../../images/ebwc_weblogo.png")} alt="EBWC_Logo" class='ebwc-icon' />
                <span class='pl-1'>EBWC Games</span>
            </a>
        </h3>
    </div>
)
