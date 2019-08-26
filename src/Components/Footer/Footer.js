import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faItchIo } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
    <div className='bg-color-one'>
        <footer className='container text-center text-gray pt-3 pb-3'>
            <div>
                <a target="_blank" href="https://www.facebook.com/ebwcgames/">
                    <FontAwesomeIcon icon={faFacebookSquare} className='text-gray m-3' style={{ fontSize: '50px' }} />
                </a>

                <a target="_blank" href="https://www.instagram.com/ebwcgames/">
                    <FontAwesomeIcon icon={faInstagram} className='text-gray m-3' style={{ fontSize: '50px' }} />
                </a>

                <a target="_blank" href="https://www.youtube.com/channel/UC9BABQRYm2wtb6VtGOEn15Q">
                    <FontAwesomeIcon icon={faYoutube} className='text-gray m-3' style={{ fontSize: '50px' }} />
                </a>

                <a target="_blank" href="https://ebwc-games.itch.io/">
                    <FontAwesomeIcon icon={faItchIo} className='text-gray m-3' style={{ fontSize: '50px' }} />
                </a>

                <a target="_blank" href="https://sketchfab.com/edmondbeh92">

                </a>

                <a target="_blank" href="ebgames12418@gmail.com">
                    <FontAwesomeIcon icon='envelope' className='text-gray m-3' style={{ fontSize: '50px' }} />
                </a>

            </div>

            <h5 className='py-4'><FontAwesomeIcon icon='copyright' /> 2019 Copyright</h5>
        </footer>
    </div>
)