import React, { useState } from 'react';
import '../../../style/other.css';

export const Model = props => {

    const [modelData, setModelData] = useState({});

    return (
        <div>
            <h3 className='text-center text-light pt-2 content'>
                {modelData.title}
            </h3>
        </div>
    )
}