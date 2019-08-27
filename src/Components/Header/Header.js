import React from 'react';
import { Logo } from './Logo';
import { PageDropdown } from './PageDropdown';

export const Header = () => (
    <div className='bg-color-one sticky-header'>
        <div className='container-fluid'>
            <div className='row text-center pt-3 pb-2'>
                <Logo />
                <PageDropdown />
            </div>
        </div>
    </div>
)
