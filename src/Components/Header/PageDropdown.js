import React from 'react';
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

    const pageLinks = linkProps.map(linkProp => <PageLinks props={linkProp} />);

    return (
        <div class='text-right col-3 col-sm-6 pr-5'>

            <div class='dropdown'>
                <button type='button' class='btn btn-secondary btn-sm'
                    data-toggle='dropdown'>
                    <FontAwesomeIcon icon='bars' />
                </button>
                <div class='dropdown-menu dropdown-menu-right show bg-color-one'>
                    {pageLinks}
                </div>
            </div>

        </div>
    )
}