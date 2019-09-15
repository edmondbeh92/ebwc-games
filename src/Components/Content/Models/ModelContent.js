import React, { useState } from 'react';
import renderHTML from 'react-render-html';
import '../../../style/other.css';

export const ModelContent = props => {

    if (props.data) {
        return (
            <div className='content'>
                <h3 className='text-center'>
                    {props.data.title}
                </h3>
                <div className='text-center my-4'>
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