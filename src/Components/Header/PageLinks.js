import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLinks = props => (

    <div className='dropdown-item pl-2 pb-2'>
        <h5><a href={props.linkProps.url} className='text-gray text-link'>
            <span className='text-warning'>
                <FontAwesomeIcon icon={props.linkProps.icon} />
            </span>
            <span className='pl-1'>{props.linkProps.text}</span>
        </a>
        </h5>
    </div>
)
