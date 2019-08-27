import React from 'react';
import { ModelCard } from './ModelCard';

export const ModelList = props => {

    const modelTags = props.data.map(model => <ModelCard key={model.title} data={model} />)

    return (
        <div className='d-flex flex-column list'>
            {modelTags}
        </div>
    )
}