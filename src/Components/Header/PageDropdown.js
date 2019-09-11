import React, { useState } from 'react';
import { PageLinks } from './PageLinks'
import { Footer } from '../Footer/Footer'
import '../../style/color.css';
import '../../style/other.css';
import '../../style/sidebar.css';
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
    const menuClass = `d-flex flex-column dropdown-close ${isOpen ? 'dropdown-sidebar' : ''} bg-sidebar`;

    return (
        <>
            <div className='text-right col-3 col-sm-6 pr-4'>
                <div onClick={toggleOpen}>
                    <button className='dropdown-btn'>
                        <FontAwesomeIcon icon='bars' />
                    </button>
                </div>
            </div>

            <div className={menuClass}>
                <div className='text-right pt-2 px-4 w-100' onClick={toggleOpen}>
                    <button className='close-btn'>
                        <FontAwesomeIcon icon='times' />
                    </button>
                </div>
                <div className='w-100'>
                    {pageLinks}
                    <hr className='hr-sidebar' />
                </div>
            </div>
        </>
    )
}