import React from 'react';
import { Logo } from './Logo';
import { PageDropdown } from './PageDropdown';

export const Header = () => (
    <div className='bg-header sticky-header'>
        <div className='container-fluid'>
            <div className='row text-center py-2'>
                <Logo />
                <PageDropdown />
            </div>
        </div>
    </div>
)
