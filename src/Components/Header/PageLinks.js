import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLinks = props => (

    <button className='dropdown-item pl-2 pb-2'>
        <h5 className='text-gray'>
            <span className='text-warning'>
                <FontAwesomeIcon icon={props.linkProps.icon} />
            </span>
            <span className='pl-1'>{props.linkProps.text}</span>

        </h5>
    </button>
)
