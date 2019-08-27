import React from 'react';
import { Model } from './Model';
import '../../../style/iframe.css';

export const Models = () => {

    const model_list = [
        {
            id: 1,
            api: ''
        },
        {
            id: 2,
            api: ''
        },
        {
            id: 3,
            api: ''
        },
        {
            id: 4,
            api: ''
        },
        {
            id: 5,
            api: ''
        },
        {
            id: 6,
            api: ''
        },
    ]

    return (
        <div className='container'>
            <h3>SPACE FIGHTER </h3>
            <Model data={model_list} />
        </div>
    )
}