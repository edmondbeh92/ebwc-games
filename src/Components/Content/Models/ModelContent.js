import React, { useState } from 'react';
import renderHTML from 'react-render-html';
import '../../../style/other.css';

export const ModelContent = props => {

    if (props.data) {
        return (
            <div className='text-center text-light pt-2 content col-12 col-sm-9'>
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
            <div className='content'>
                <h3>WELCOME TO THE MODEL PAGE!</h3>
                <hr />
                <div>

                </div>
            </div>
        )
    }
}