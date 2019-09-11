import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLinks = props => (

    <Link to={`/${props.linkProps.url}`}>
        <h5 className='page-link text-gray text-left pl-5'>
            <span className='text-warning'>
                <FontAwesomeIcon icon={props.linkProps.icon} />
            </span>
            <span className='pl-5'>{props.linkProps.text}</span>
        </h5>
    </Link>
)
