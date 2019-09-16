import React, { createContext, useState } from 'react';
import { Logo } from './Logo';
import { PageDropdown } from './PageDropdown';

export const SidebarContext = createContext();

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <SidebarContext.Provider value={{ isOpen, toggleOpen }}>
            <div className='bg-header sticky-header'>
                <div className='container-fluid'>
                    <div className='row text-center py-2'>
                        <Logo />
                        <PageDropdown />
                    </div>
                </div>
            </div>
        </SidebarContext.Provider >
    )
}
