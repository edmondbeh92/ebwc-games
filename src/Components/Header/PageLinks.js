import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLinks = props => (

    <h5 className='text-left px-4'>
        <Link to={`/${props.linkProps.url}`} className='page-link'>
            <span className='text-warning'>
                <FontAwesomeIcon icon={props.linkProps.icon} />
            </span>
            <span className='pl-5'>{props.linkProps.text}</span>
        </Link>
    </h5>
)
