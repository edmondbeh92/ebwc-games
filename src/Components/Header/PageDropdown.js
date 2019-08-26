import React, { useState } from 'react';
import { PageLinks } from './PageLinks'
import '../../style/color.css';
import '../../style/other.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageDropdown = () => {

    const linkProps = [
        {
            url: "games.html",
            icon: 'gamepad',
            text: 'GAMES'
        },
        {
            url: "3d_models.html",
            icon: 'fighter-jet',
            text: '3D MODELS'
        },
        {
            url: "links.html",
            icon: 'link',
            text: 'LINKS'
        }
    ]

    const pageLinks = linkProps.map(linkProp => <PageLinks linkProps={linkProp} />);

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const menuClass = `dropdown-menu${isOpen ? ' show' : ''} dropdown-menu-right bg-color-one`;

    return (
        <div className='text-right col-3 col-sm-6 pr-5'>

            <div className='dropdown' onClick={toggleOpen} >
                <button className='btn btn-secondary btn-sm'>
                    <FontAwesomeIcon icon='bars' />
                </button>
                <div className={menuClass}>
                    {pageLinks}
                </div>
            </div>

        </div>
    )
}