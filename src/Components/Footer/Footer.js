import React from 'react';
import { WebLinks } from './WebLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faItchIo } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    const externalLinks = [
        {
            id: 1,
            url: "https://www.facebook.com/ebwcgames/",
            icon: faFacebookSquare
        },
        {
            id: 2,
            url: "https://www.instagram.com/ebwcgames/",
            icon: faInstagram
        },
        {
            id: 3,
            url: "https://www.youtube.com/channel/UC9BABQRYm2wtb6VtGOEn15Q",
            icon: faYoutube
        },
        {
            id: 4,
            url: "https://ebwc-games.itch.io/",
            icon: faItchIo
        },
        {
            id: 5,
            url: "https://sketchfab.com/edmondbeh92",
            icon: null
        },
        {
            id: 6,
            url: "ebgames12418@gmail.com",
            icon: 'envelope'
        }
    ]

    const links = externalLinks.map(externalLink => <WebLinks key={externalLink.id} props={externalLink} />)

    return (
        <div className='bg-color-one'>
            <footer className='container text-center text-gray pt-3 pb-3'>
                <div>
                    {links}
                </div>

                <h5 className='py-4'><FontAwesomeIcon icon='copyright' /> 2019 Copyright</h5>
            </footer>
        </div>
    );
}