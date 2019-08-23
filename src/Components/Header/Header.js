import React from 'react';
import { Logo } from './Logo';

export const Header = () => (
    <div>

        <div class='bg-color-one sticky'>
            <div class='container'>
                <div class='row text-center pt-3 pb-2'>

                    <Logo />


                    <div class='text-right col-3 col-sm-6  pr-5'>
                        <div class='dropdown'>
                            <button type='button' class='fa fa-bars fa-2x btn btn-secondary btn-sm'
                                data-toggle='dropdown'></button>
                            <div class='dropdown-menu dropdown-menu-right bg-color-one'>
                                <div class='pl-2 pt-3 pb-2'>
                                    <h5><a href="games.html" class='text-gray text-link'>
                                        <span class='fa fa-gamepad text-warning'></span>
                                        <span class='pl-1'>GAMES</span>
                                    </a>
                                    </h5>
                                </div>
                                <div class='pl-2 pb-2'>
                                    <h5><a href="3d_models.html" class='text-gray text-link'>
                                        <span class='fa fa-fighter-jet text-warning'></span>
                                        <span class='pl-1'>3D MODELS</span>
                                    </a>
                                    </h5>
                                </div>
                                <div class='pl-2 pb-2'>
                                    <h5><a href="links.html" class='text-gray text-link'>
                                        <span class='fa fa-link text-warning'></span>
                                        <span class='pl-1'>LINKS</span>
                                    </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </div>
)
