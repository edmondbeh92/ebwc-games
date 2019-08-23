import React from 'react';
import '../../style/color.css';
import '../../style/other.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLinks = () => (

    <div class='text-right col-3 col-sm-6 pr-5'>
        <div class='dropdown'>
            <button type='button' class='btn btn-secondary btn-sm'
                data-toggle='dropdown'>
                <FontAwesomeIcon icon='bars' />
            </button>
            <div class='dropdown-menu dropdown-menu-right bg-color-one'>
                <div class='pl-2 pt-3 pb-2'>
                    <h5><a href="games.html" class='text-gray text-link'>
                        <span class='text-warning'>
                            <FontAwesomeIcon icon='gamepad' />
                        </span>
                        <span class='pl-1'>GAMES</span>
                    </a>
                    </h5>
                </div>
                <div class='pl-2 pb-2'>
                    <h5><a href="3d_models.html" class='text-gray text-link'>
                        <span class='text-warning'>
                            <FontAwesomeIcon icon='fighter-jet' />
                        </span>
                        <span class='pl-1'>3D MODELS</span>
                    </a>
                    </h5>
                </div>
                <div class='pl-2 pb-2'>
                    <h5><a href="links.html" class='text-gray text-link'>
                        <span class='text-warning'>
                            <FontAwesomeIcon icon='link' />
                        </span>
                        <span class='pl-1'>LINKS</span>
                    </a>
                    </h5>
                </div>
            </div>
        </div>
    </div>

)