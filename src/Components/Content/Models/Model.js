import React, { useState } from 'react';
import renderHTML from 'react-render-html';
import '../../../style/other.css';
import { removePropertiesDeep } from '@babel/types';

export const Model = props => {

    if (props.data) {
        return (
            <div className='text-center text-light pt-2 content'>
                <h3>
                    {props.data.title}
                </h3>
                <div className='my-4'>
                    {renderHTML(props.data.html)}
                </div>
            </div>
        )
    }
    else {
        return (
            <h3 className='text-center text-light pt-2 content'>
                Loading...
            </h3>
        )
    }
}