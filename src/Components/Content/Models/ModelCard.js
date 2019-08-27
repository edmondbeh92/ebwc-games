import React, { useState } from 'react';
import '../../../style/image.css';

export const ModelCard = props => {

    const [hover, setHover] = useState(false);
    const cardHover = `card mt-5 ${hover ? 'card-hover' : ''}`

    return (
        <div className={cardHover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img
                src={props.data.thumbnail_url}
                alt='model-image'
                style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '100%' }} />
            <div className='card-size text-center'>
                <h5 className='pt-2'><b>{props.data.title}</b></h5>
            </div>
        </div>
    )
}