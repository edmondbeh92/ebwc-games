import React, { useState } from 'react';
import { PageLinks } from './PageLinks'
import '../../style/color.css';
import '../../style/other.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageDropdown = () => {

    const linkProps = [
        {
            id: 1,
            icon: 'gamepad',
            text: 'GAMES'
        },
        {
            id: 2,
            icon: 'fighter-jet',
            text: '3D MODELS'
        },
        {
            id: 3,
            icon: 'link',
            text: 'LINKS'
        }
    ]

    const pageLinks = linkProps.map(linkProp => <PageLinks key={linkProp.id} linkProps={linkProp} />);

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const menuClass = `dropdown-menu${isOpen ? ' show' : ''} dropdown-menu-right bg-color-one`;

    return (
        <div className='text-right col-3 col-sm-6 pr-4 mt-1'>

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