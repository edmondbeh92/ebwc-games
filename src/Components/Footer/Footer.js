import React from 'react';
import { WebLinks } from './WebLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faItchIo } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    const externalLinks = [
        {
            id: 1,
            url: "https://www.facebook.com/ebwcgames/",
            icon: faFacebookSquare,
            tooltip: 'Facebook'
        },
        {
            id: 2,
            url: "https://www.instagram.com/ebwcgames/",
            icon: faInstagram,
            tooltip: 'Instagram'
        },
        {
            id: 3,
            url: "https://www.youtube.com/channel/UC9BABQRYm2wtb6VtGOEn15Q",
            icon: faYoutube,
            tooltip: 'Youtube'
        },
        {
            id: 4,
            url: "https://ebwc-games.itch.io/",
            icon: faItchIo,
            tooltip: 'Itch-io'
        },
        {
            id: 5,
            url: "https://sketchfab.com/edmondbeh92",
            icon: null,
            tooltip: 'Sketchfab'
        },
        {
            id: 6,
            url: "ebgames12418@gmail.com",
            icon: 'envelope',
            tooltip: 'E-mail'
        }
    ]

    const links = externalLinks.map(externalLink => <WebLinks key={externalLink.id} props={externalLink} />)

    return (
        <div className='bg-color-one pt-3 mt-5'>
            <footer className='container text-center text-gray pt-3 pb-3'>
                <div className='d-flex flex-row justify-content-center flex-wrap'>
                    {links}
                </div>
                <h5 className='py-4'><FontAwesomeIcon icon='copyright' /> 2018 Copyright</h5>
            </footer>
        </div>
    );
}