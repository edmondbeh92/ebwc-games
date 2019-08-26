import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WebLinks = props => (

    <a target="_blank" rel="noopener noreferrer" href={props.props.url}>
        <FontAwesomeIcon icon={props.props.icon} className='text-gray m-3' style={{ fontSize: '50px' }} />
    </a>
)