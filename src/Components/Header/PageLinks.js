import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLinks = props => (

    <div class='dropdown-item pl-2 pb-2'>
        <h5><a href={props.url} class='text-gray text-link'>
            <span class='text-warning'>
                <FontAwesomeIcon icon={props.icon} />
            </span>
            <span class='pl-1'>{props.text}</span>
        </a>
        </h5>
    </div>
)
