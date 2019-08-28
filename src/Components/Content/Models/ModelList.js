import React from 'react';
import { ModelCard } from './ModelCard';

export const ModelList = props => {

    const modelTags = props.data.map(model => <ModelCard key={model.title} data={model} />)

    return (
        <div className='col-12 col-sm-3 list'>
            {modelTags}
        </div>
    )
}