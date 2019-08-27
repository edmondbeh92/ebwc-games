import React, { useState } from 'react';
import renderHTML from 'react-render-html';
import '../../../style/other.css';
import { removePropertiesDeep } from '@babel/types';

export const ModelContent = props => {

    if (props.data) {
        return (
            <div className='text-center text-light pt-2 content col-8'>
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
            <div className='col-12 col-sm-8'>
                <h3 className='text-center text-light pt-2 content'>
                    Loading...
                </h3>
            </div>
        )
    }
}