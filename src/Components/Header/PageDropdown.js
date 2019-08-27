import React, { useState } from 'react';
import { PageLinks } from './PageLinks'
import '../../style/color.css';
import '../../style/other.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageDropdown = () => {

    const linkProps = [
        {
            id: 1,
            url: 'games',
            icon: 'gamepad',
            text: 'GAMES'
        },
        {
            id: 2,
            url: '3d_models',
            icon: 'fighter-jet',
            text: '3D MODELS'
        }
    ]

    const pageLinks = linkProps.map(linkProp => <PageLinks key={linkProp.id} linkProps={linkProp} />);

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const menuClass = `dropdown-menu${isOpen ? ' show' : ''} dropdown-menu-right bg-color-one`;

    return (
        <div className='text-right col-3 col-sm-6 pr-4' style={{ marginTop: '3px' }}>

            <div className='dropdown' onClick={toggleOpen} >
                <button className='btn btn-secondary'>
                    <FontAwesomeIcon icon='bars' />
                </button>
                <div className={menuClass}>
                    {pageLinks}
                </div>
            </div>

        </div>
    )
}