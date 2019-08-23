import React from 'react';
import { Logo } from './Logo';
import { PageLinks } from './PageLinks';

export const Header = () => (
    <div>

        <div class='bg-color-one sticky'>
            <div class='container'>
                <div class='row text-center pt-3 pb-2'>

                    <Logo />
                    <PageLinks />



                </div>
            </div>
        </div>

    </div>
)
